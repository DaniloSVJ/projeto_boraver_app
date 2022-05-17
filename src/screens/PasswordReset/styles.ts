import styled, {css} from 'styled-components/native'
import {LinearGradient} from 'expo-linear-gradient'
import {getBottomSpace} from  'react-native-iphone-x-helper'


export const Container =styled.View`
    background-color: #FFF;

`
export const ContainerBody =styled.View`
    background-color: #FFF;
    padding: 0px;
   

`
export const ContainerRascunho = styled(LinearGradient).attrs(({theme})=>({
    colors: theme.COLORS.GRADIENT
}))`
    flex:1;
    justify-content: center;
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

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
})`
    align-self: center;
    width: 95px;
    height: 90px;
    top: 5px;
    margin-top: 100px;
    margin-bottom: 145px;
    
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

export const ForgotPassordLabel = styled.Text`
     
    font-size: 14px;

    ${({theme})=> css`
        font-family:Montserrat;
        color: ${theme.COLORS.TITLE};
        font-size: 12px;
    `}

`
// font-family: ${theme.FONTS.TITLE};
