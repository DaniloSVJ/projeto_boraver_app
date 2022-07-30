import styled from 'styled-components/native'
interface Status{
    background: string;
}
export const Container = styled.View`
    background-color: #fff;
    height:100%;
    flex:1;
    display: flex;
    height: 100%
    width: 100%;

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
export const ViewContentTitleItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left:

`
interface propsImage {
    widthprops: string;
    heightprops: string;
}
export const Image = styled.Image<propsImage>`
    width: ${(props)=>props.widthprops};
    height: ${(props)=>props.heightprops};
    background-color: #fff;
    top: 0px;
    left: 0px;
    margin-right: 13px;
    
`
export const TitleService = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
       
`
export const SubtitleService = styled.Text`
    font-family: 'Montserrat_500Medium';
    color: #DF8747;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
      
`
export const Destaque = styled.View<Status>`
    margin-top: 0px;
    padding: 2px;
    background-color: ${props=>{
        if(props.background=='novaoferta'){
            return "#DF8747"
        }
        else if(props.background=='andamento'){
            return "#5EAA31"
        }else if(props.background=='concluido'){
            return "#3c2e54"
        }else {
            return "#D53939"
        }
    }};
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
    margin-top: 2px;
    margin-left: 28px;
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
    margin-top: 35px;
    margin-right: 12px;
`
export const ViewBell = styled.View`
    margin-top: 13px;
    margin-right: 30px;
`

export const ContentForm = styled.View`
    width: 100%;
    padding: 0 32px;
    background-color: #3C2E54;
    color: #fff;
    margin-bottom: 40px;      
`



export const ViewButton = styled.View`
    diplay:flex;
    margin-top:22px;
    margin-bottom: 40px;
    width:100%;
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
export const ViewVazio = styled.View`
    display: flex;
    flex-direction:column;
    margin-top: 165px;
    margin-left: 77px;
    margin-right: 77px;
    justify-content:center;
    align-items: center;
    text-align: center;
`

export const ImagemVazio = styled.Image`
    width: 77px;
    height: 72px;

`

export const TextVazioTitle = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
`
export const TextVazioSubTitle = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
`
