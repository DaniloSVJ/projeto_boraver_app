import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color:string;
  background: string;
  
}

const Button: React.FC<ButtonProps> = ({ background, color, children, ...rest }) => {

const props = { background, color, children, ...rest}
return(  
  <Container {...props}>
    <ButtonText color={color}>{children}</ButtonText>
  </Container>
);

}

export default Button;