import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 47px;
  background: #3C2E54;
  border-radius: 10px;
  margin-top: 9px;
  justify-content: center;
  align-items: center;
  
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat_400Regular';
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;