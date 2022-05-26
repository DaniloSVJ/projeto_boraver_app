import styled, {css} from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import {getBottomSpace} from  'react-native-iphone-x-helper'
import { Button } from '../../components/Button'


export const Container =styled.View`
    background-color: #FFF;

`
export const TextLink = styled.TouchableOpacity``;

export const ContainerBody =styled.View`
    background-color: #FFF;
    padding: 0px;
    margin-left:20px;
    margin-right:20px;
   

`
export const ViewArrow = styled.View`
    position:absolute;
    margin-top: 45px;
    margin-left: 32px;
`

export const DivViewTop =styled.View`
    display:flex;
    top: 0;
    height: 100%;
    margin-top: 0px
    height: 344px;
    weigth: 100%;
    background-color: #3C2E54;

`


export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        paddingBottom: getBottomSpace() + 48
    },
    

})`
    width: 100%;
    padding: 0 32px;
    margin-top: -29px;
    &:hover #teste {
        background-color: #fff;
      }
    
  
`

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`
    align-self: center;
    width: 195px;
    height: 195px;
    top: 5px;
    margin-top: 100px;
    margin-bottom: 145px;
    
`
export const ForgotPassordButton = styled.TouchableOpacity`
    margin-top: 18px;
    align-self: center;
    margin-bottom: 2px;
` 

export const ForgotPassordLabel = styled.Text`
     
    font-size: 14px;
    font-family:Montserrat-Regular;
    color:#4A4A4A;
    font-size: 12px;
  

   

`
