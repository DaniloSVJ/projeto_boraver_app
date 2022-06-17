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
export const ViewConteinerData = styled.View`
    margin-left: 15px;
    margin-right: 15px;
`
export const ViewImagePerfil = styled.View`
    margin-bottom: 15px;
` 
export const ViewSaldo = styled.View`
    margin-top:5px;
    margin-right:10px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`   
export const ViewEdit = styled.View`
    margin-top:5px;
    margin-right:10px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const ViewForm = styled.View`
    margin-top:5px;
    margin-right:10px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`
   

export const ImagePerfil = styled.Image`
    margin-top:50px;
    align-self: center;
    margin-letf:10px;
    width: 110px;
    height: 110px;
    background-color: #fff;
    top: 0px;
    left: 0px;
    margin-right: 13px;
    
`
export const InitilContent = styled.View<Display>`
    
`
export const Content = styled.View<Display>`
    ${(props) => (props.display==""?"":"display: "+props.display )};
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

export const Label = styled.Text`
    margin-top: 7px;
    font-family: 'Montserrat_500Medium';
    font-weight: bold;
    font-size: 17px;
`
export const TextDataPerfil = styled.Text`
    margin-top: 5px;
    font-family: 'Montserrat_500Medium';
    font-weight: normal;
    font-size: 20px;
`

export const ButtonEdit = styled.Button<Display>`
    display: ${props=> props.display}
    wight: 100px;
    border-radius: 5px;
    backgroud-color: #fff;
    border-width: 1px;
    border-style: solid;

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
    margin-left:100px;
    font-family: 'Montserrat_500Medium';
    font-style: normal;
   
    font-size: 25px;
  
    color: #FFFFFF;
    margin-left: 28px;
`
export const Header = styled.View`
    background-color:  #3C2E54;
    width: 100%;
    height: 131px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

`
export const ViewBell = styled.View`
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

