import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #C53030 ;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-style: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translatex(-50%);

    color: #312E38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #C53030 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span{
    opacity: 1;
    visibility: visible;
  }
`;
