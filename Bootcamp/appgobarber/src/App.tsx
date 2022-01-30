import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes  from './routes';

// Verificar um caminho melhor para incluir essas instrução
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
// Verificar um caminho melhor para incluir essas instrução

const App:   React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38"/>
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
