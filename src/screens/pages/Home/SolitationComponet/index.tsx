import React,{useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import {
    TitleService,
    ViewContentTitleItem,
    ViewBell,
    TextFooter,
    ViewTime,
    Image,
    TitleItem,
    Ofert,
    Footer,
    Destaque,
    TextDestaque,
    Description,
    TextDescription,
    SubtitleService,
    ItemList,
    Content,
    HerderText2,
    Container,
    Header,
    WelcomeText
} from '../styles'
import Img from '../../../../assets/avatar_user.png'




import api from '../../../../service/api'

interface SolitationI {
    items: [];
    
    
}
interface solicitationInt {
    id: number;
    cliente: number;
    influencidor: number;
    descricao_servico: string;
    valor: number;
    status: string;
    pendente: boolean;
    link_media: string;
    favorite: boolean;
    maiorvalor: number;
    menorvalor: number;
    destaque: boolean;
    valorads: number;
    estado: string;
    cidade: string;
    carater: string;
    criacao: string;
}

const SolitationComponet: React.FC<SolitationI> = ({items}) => {
   let test = [{carater: "1",
    cidade: "1",
    cliente: 1,
    criacao: "2022-05-04T17:54:17.465354-03:00",
    descricao_servico: "Faça isso e isso e isso",
    destaque: false,
    estado: "1",
    favorite: true,
    influencidor: 12,
    link_media: "https://drive.google.com/file/d/1ibPEoQcDDHqb4FvOgQs2mNf3vc6SwsVO/view",
    maiorvalor: "1.00",
    menorvalor: "1.00",
    pendente: "Sim",
    status: "Aprovado",
    valor: "10000.00",
    valorads: "1.00"}]
    const [listSolitation, setListSolitation] = useState<solicitationInt[]>([])
    
    useEffect(()=>{
        console.log("lllllllllllllllllllllll>>>>>>>")
        console.log(items)
        console.log("lllllllllllllllllllllll>>>>>>>")

        const alter_link = async () => {
            await setListSolitation(items)
            
         }
         alter_link()

    },[listSolitation])
    async function nomecliente(id:number) {
        let nome = ""
        api.get(`/api/v1/cliente/${id}/`).then((res) => {
            nome = res.data.nome
        })
        return nome
    }
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },

    })
    return(  
      
      <Container >
         {
                    test.map((s,key) => (
                            <ItemList  key={key}>
                                <TitleItem>
                                    <ViewContentTitleItem>
                                        <View>
                                            <Image widthprops={"35px"} heightprops={"35px"} source={Img} />
                                        </View>
                                        <View>
                                            <TitleService>{'dfdfdfdf'}</TitleService>
                                            <SubtitleService>Orçamento R${String(s.menorvalor)} - R${String(s.maiorvalor)}</SubtitleService>
                                        </View>
                                    </ViewContentTitleItem>

                                    <View style={styles.favorite}>
                                        <Fontisto name="favorite" size={20} bordercolor={"black"} color="#fff" />

                                    </View>
                                </TitleItem>
                                {s.destaque == true ? (
                                    <Destaque>
                                        <TextDestaque>Destaque</TextDestaque>
                                    </Destaque>)
                                    : null
                                }

                                <Description>
                                    <TextDescription>{s.descricao_servico}</TextDescription>
                                </Description>
                                <Footer>
                                    <View>
                                        <TextFooter>Fortaleza  •  Serviços  •  2+</TextFooter>
                                    </View>
                                    <ViewTime>
                                        <TextDescription>2 horas atrás</TextDescription>
                                    </ViewTime>
                                </Footer>
                            </ItemList>
                        ))

                    }
      </Container>
      
    );
    
    }
    
    export default SolitationComponet;

