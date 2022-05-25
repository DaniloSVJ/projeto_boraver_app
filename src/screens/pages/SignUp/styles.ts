import styled, {css} from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import {getBottomSpace} from  'react-native-iphone-x-helper'


export const Container =styled.View`
    background-color: #FFF;

`
export const ContainerBody =styled.View`
    background-color: #FFF;
    padding: 0px;
    justify-content: center;
    margin-left:20px;
    margin-right:20px;

`

export const DivViewTop =styled.View`
    display:flex;
    top: 0;
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
    margin-top: -29px
  
   
    
`
export const Viewstep = styled.View`

    align-self: center;
    margin-top: 2px;
    display: inline-block;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;


`
export const View = styled.View`
    align-self: center;
    margin-top: 5px;
    margin-left: 5px;

`
export const ViewArrow = styled.View`
    position:absolute;
    margin-top: 45px;
    margin-left: 32px;
`
export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`
align-self: center;
width: 195px;
height: 195px;
top: 5px;
margin-top: 29px;
margin-bottom: 155px;
    
`
export const ForgotPassordButton = styled.TouchableOpacity`
    margin-top: 18px;
    align-self: center;
    margin-bottom: 2px;
` 
export const ViewButton = styled.View`
    diplay:flex;
    margin-top:261px;



`

export const TextStep = styled.Text`
    margin-top: 37px;
    font-family: 'Montserrat';
    align-self: center;
    font-style: normal;
    color: #fff;
    font-weight: 500;
    font-size: 10px;
    line-height: 20px;

`

// font-family: ${theme.FONTS.TITLE};
