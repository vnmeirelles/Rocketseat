import React, {
               useEffect,
               useRef,
               useImperativeHandle,
               forwardRef,
               useState,
               useCallback
              } from 'react';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const [isFocused, setIsFocused] =useState(false);
  const [isFilled, setIsFilled] =useState(false);

  const inputElementRef = useRef<any>(null);
  const {fieldName, registerField, error, defaultValue = ''} = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue});

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  },[]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  // useEffect(() => {
  //   registerField<string>({
  //     name: fieldName,
  //     ref: inputValueRef.current,
  //     path: 'value',
  //     setValue(ref: any, value) {
  //       inputValueRef.current.value = value;
  //       inputElementRef.current.setNativeProps({ text: value });
  //     },
  //     clearValue() {
  //       inputValueRef.current.value = '';
  //       inputElementRef.current.clear();
  //     }
  //   });
  // },[fieldName, registerField]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFocused={isFocused}
      isErrored={!!error}
    >
      <Icon
        name={icon}
        size={20}
        color={isFocused ||isFilled ? '#ff9000': '#666360'}
      />
      <TextInput
        keyboardAppearance='dark'
        ref={inputElementRef}
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        { ...rest }
      />
    </ Container>
  );
};

export default forwardRef(Input);
