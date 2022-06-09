import { View,StyleSheet } from 'react-native';
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';
import styled from 'styled-components';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color:string;
  background: string;
  bordercolor: string;
  
}
const styles = StyleSheet.create({

  border: {
     borderColor: "#fff",
     borderStyle:"solid",
     borderWidth: 1

  },
});

const Button: React.FC<ButtonProps> = ({ background,bordercolor, color, children, ...rest }) => {

  

const props = { background, bordercolor,color, children, ...rest}
return(  
  
  <Container {...props}>
    <ButtonText color={color}>{children}</ButtonText>
  </Container>
  
);

}

export default Button;