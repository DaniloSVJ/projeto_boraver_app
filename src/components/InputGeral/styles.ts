import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Ionicons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 47px;
  padding: 0 16px;

  background-color:#F0FFFF			;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  border-color: #fff;
  flex-direction: row;
  align-items: center;
  

`;

export const TextInput = styled.TextInput`
  flex: 1;
  color:#3C2E54;
  font-size: 13px;
  font-family: 'Montserrat';
  border: none	;
  border-color: #fff;  
`;

export const Icon = styled(FeatherIcon)`
 
  margin-right: 10px;
  font-size: 13px;
  color:#3C2E54;
  margin-left: 5px;
 

`;


// ${({theme, type})=> css`
// font-family: ${theme.FONTS.TEXT};
// border: 1px solid ${theme.COLORS.SHAPE};
// color: ${type === 'primary' ? theme.COLORS.SECONDARY_900: theme.COLORS.TITLE}
// `};

