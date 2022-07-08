import styled from 'styled-components/native'


interface Display{
    display: string;
}

export const Container = styled.View`
    background-color: #fff;
    height:100%;
    flex:1;
    display: flex;
    height: 100%
    width: 100%;

`
export const InitilContent = styled.View<Display>`
    
`
export const Content = styled.View`
    width: 100%;
    height: 100%
    background-color: #fff;
    border-radius:  10px;
    margin-top: -20px;
        
`
export const ItemList = styled.View`
    width: 100%;
    margin-top: 23px;
    margin-bottom: 17px;
    padding-right: 29;
    padding-left: 29;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const TitleItem = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;

`
export const ViewSubTitle = styled.View<Display>`
    display: ${(props)=>(props.display==""?"flex;":props.display+";")}
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 28px;
`
export const Image = styled.Image`
    width: 13px;
    height: 13px;
    top: 0px;
    left: 0px;
    margin-right: 13px;
    
`
export const TitleService = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 31px;
    color: #373737;
`
export const SubtitleService = styled.Text`
    font-family: 'Montserrat_500Medium';
    color: #DF8747;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
      
`
export const Destaque = styled.View`
    margin-top: 18px;
    padding: 2px;
    background-color: #DF8747;
    width: 75px;
    margin-bottom:10px;
    border-radius:10px;
`
export const TextDestaque = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
    line-height: 22px;
`
export const Description = styled.View``
export const TextDescription = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #373737;
`
export const TextFooter = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #8E7AB0;
`
export const Ofert = styled.View`
    margin-bottom:10px;

`

export const Footer = styled.View`
    margin-top: 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ViewTime = styled.View`

`

export const WelcomeText = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 31px;
    margin-top: 26px;
    margin-left: 28px;
    color: #fff;

`
export const HerderText2 = styled.Text`
    font-family: 'Montserrat_200ExtraLight';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #FFFFFF;
`
export const Header = styled.View`
    background-color:  #3C2E54;
    width: 100%;
    height: 131px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

`
export const ViewIcons = styled.View`
    display:flex;
    flex-direction: row;
`

export const ViewSearch = styled.View`
    margin-top: 27px;
    margin-right: 12px;
`
export const ViewBell = styled.View`
    margin-top: 3px;
    margin-right: 30px;
`

export const ContentForm = styled.View`
    width: 100%;
    padding: 0 32px;
    background-color: #3C2E54;
    color: #fff;
    margin-bottom: 40px;      
`


export const TextClient = styled.Text`
font-family: 'Montserrat_500Medium';

font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 14px;

`

export const SubTitle = styled.Text`
font-family: 'Montserrat_500Medium';

font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 19px;

`
export const TextSolicit = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

`

export const ViewButton = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

`


export const Title = styled.Text`
font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 31px;
    margin-top: 75px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

export const Paragraph = styled.Text`
    font-family: 'Montserrat_200ExtraLight';
    font-size: 13px;
    
    
    margin-top: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

`
