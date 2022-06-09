import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Color{
  color: string;
}
interface Background{
  background: string;
  bordercolor: string;

}


export const Container = styled(RectButton)<Background>`
  width: 100%;
  height: 47px;
  background:  ${(props) => (props.background )};
  border-radius: 10px;
  margin-top: 9px;
  justify-content: center;
  align-items: center;

  border-style:"solid";
  border-width: 10px;

  
`;

export const ButtonText = styled.Text<Color>`
  font-family: 'Montserrat_400Regular';
  color:  ${(props) => (props.color )};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  

`;