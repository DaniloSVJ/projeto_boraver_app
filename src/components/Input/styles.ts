import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Ionicons';
import { TextInput as TextInputRN } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}
interface TextInputProps {
  ref:any;
  keyboardAppearance:string;
  placeholderTextColor:string;
  defaultValue:any;
  onFocus:boolean;
  onBlur:boolean;
  onChangeText:string;
  
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
  padding-right: 20px; 
  margin-bottom: 16px;
  border-color: #fff;
  flex-direction: row;
  align-items: center;
  

`;


export const TextInput = styled(TextInputRN)`
  flex: 1;
  color:#3C2E54;
  font-size: 13px;
  font-family: 'Montserrat_400Regular';
  border: none	;
  border-color: #fff;  
`;

export const Icon = styled(FeatherIcon)`
 
  margin-right: 10px;
  font-size: 13px;
  color:#3C2E54;
  margin-left: 5px;
 

`;



