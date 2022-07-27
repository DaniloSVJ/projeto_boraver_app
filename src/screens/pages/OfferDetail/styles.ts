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
export const Avaliation  = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    margin-top: -4px;
    margin-left: 8px;
    line-height: 21px;
    color: #373737;
`
export const ViewIcone = styled.View`
    margin-top: 30px;
    margin-left: 33px;

`

export const Content = styled.View`
    width: 100%;
    height: 100%
    background-color: #fff;
    border-radius:  10px;
    margin-top: -20px;
    
    margin-right: 29px;
    
    padding-left: 5px;
    
    
`
export const ItemList = styled.View`
    width: 100%;
    margin-top: 23px;
    margin-bottom: 17px;
    margin-right: 70px;
    padding-right: 29px;
    padding-left: 19px;  
    
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const TitleItem = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 7px;

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
    margin-left: 14px;
    margin-right: 12px;
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 31px;
    color: #373737;
       
`
export const SubtitleService = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    color: #373737;
      
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
export const ViewBody = styled.Text`
    margin-top: 77px;
    
    display: flex;
    flex-direction: column;
    

`
export const ViewBodyPeriod = styled.Text`
    margin-top: 14px;

    display: flex;
    flex-direction: column;
    

`
export const TextSolicit = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #373737;
`
export const ViewFooter = styled.View`
    margin-top: 77px;
    display: flex;
    flex-direction: column;
`




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
export const ViewLeftHerder = styled.View `
    display:flex;
    flex-direction: row;

`

export const HerderText2 = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 31px;
    margin-top: 27px;
    margin-left: 16px;
    color: #fff;
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
    margin-right: 32px;
`
export const ViewSearch = styled.View`
    margin-top: 35px;
    margin-right: 12px;
`
export const ViewBell = styled.View`
    margin-top: 13px;
    
`

export const ContentForm = styled.View`
    width: 100%;
    padding: 0 32px;
    background-color: #3C2E54;
    color: #fff;
    margin-bottom: 40px;      
`



export const ViewButton = styled.View`
    display:flex;
    flex-direction: row;
    
    justify-content: space-between;
    margin-top:22px;
    margin-bottom: 40px;
    padding-right:10vw;
    
    width:100vw;
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

export const ViewConcluded = styled.View`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:22px;
    margin-bottom: 40px;
    padding-right:10vw;
    align-self: center;
    width:100vw;
`
export const TextConcluded = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 20px;
    margin-top: 19px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
    align-self: center;
    color: #000000;


`
export const TextHappy = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 30px;
    margin-top: 19px;
    font-weight: bold;
    display: flex;
    align-self: center;
    align-items: center;
    text-align: center;
    
    color: #000000;

`


export const TextRecAndAndament = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 17px;
    margin-top: 19px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
    align-self: center;
    color: #000000;


`