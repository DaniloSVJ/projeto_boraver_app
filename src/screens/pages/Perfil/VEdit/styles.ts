import styled from 'styled-components/native'
import { TextInput as TextInputRN } from 'react-native';


interface Display{
    display: string;
}
interface enabled{
    enabled: boolean;
    weight: string;
    ref:any;
    
}

export const ViewEdit = styled.View`
    margin-top:5px;
    margin-right:10px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`   
export const Label = styled.Text`
    margin-top: 7px;
    font-family: 'Montserrat_500Medium';
    font-weight: 700;
    font-size: 17px;
`
export const TextDataPerfil = styled(TextInputRN)<enabled>`
    margin-top: 5px;
    margin-bottom: 7px;
    font-family: 'Calibri';
    font-weight: 500;
    font-size: 20px;
    weight: ${props=> props.weight!=""? props.weight: "100%"	};
    border-width: ${props=>props.enabled== false?'0px':'1px'};
    border-style:  ${props=>props.enabled== false?'none':'solid'};
    border-radius: 5px;
    padding:5px;
    border-color: rgb(78,90,82);
    background-color:  ${props=>props.enabled== false?'#FFF':'#FFF'};
`