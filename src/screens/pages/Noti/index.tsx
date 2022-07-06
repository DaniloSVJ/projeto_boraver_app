
import React, {  useState, useCallback, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';

import NotificationBell from '../../../components/NotificationBell'
import {  useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewContentTitleItem,
    ViewBell,
    TextFooter,
    ViewTime,
    Image,
    TitleItem,
    
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
    WelcomeText,
    ViewVazio,
    ImagemVazio,
    TextVazioTitle,
    TextVazioSubTitle,

} from './styles'

import Img from '../../../assets/avatar_user.png'

import iconeFavorite from '../../../assets/marca-paginas.png'
import iconeFavoriteTrue from '../../../assets/marca-paginas-true.png'
import JobsVazio from '../../../assets/item-exclamacao.png'

import { ScrollView } from 'react-native-gesture-handler';

import api from '../../../service/api'

import AsyncStorage from '@react-native-async-storage/async-storage';


interface solicitationI {
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
type addPut = {
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
interface teste{
    id:number;
    name:string;
    
}
export function Noti() {
    const  {user}  = useAuth()
    
    


    // const [bookmark, setBookmark] = useState(false)
  
    // useEffect(() => {
    //     setService([])
    //     async function load() {
            
    //         const IdInfluencers = 
    //         await 
    //         api.get(`/api/v3/influenciador/${user.id}/`)
    //         setIdin(IdInfluencers.data.id)
    //         api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`, 
    //           ).then((response) => {
    //             setService([response.data]);
    //             setBookmark(response.data.favorite)
    //             console.log(services)
    //         }).catch(function (error) {
    //             setService([])
    //         });

    //         console.log(user.id)

    //     }
    //     load()
    // }, [bookmark])
    // const [qtdNote,setQtdNote]=useState(0)    
    // const [render, setrender] = useState(false)
    // const [services, setService] = useState<solicitationI[]>([])
    // const [idin, setIdin] = useState(0)

    // useFocusEffect(
    //     useCallback(() => {
    //         setService([])
    //         async function load() {
    //             const token = localStorage.getItem('@BoraVer:token');
    //             const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
    //             setIdin(IdInfluencers.data.id)
    //             await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`, {

    //             }).then((response) => {
    //                 setService([response.data]);
    //                 setBookmark(response.data.favorite)
    //                 console.log(services)
    //             }).catch(function (error) {
    //                 setService([])
    //             });

    //             const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)
                
    //             setQtdNote(note.data.count)
               
    //         }
    //         load()
    //     }, [bookmark]),
    // );
    // const styles = StyleSheet.create({
    //     favorite: {
    //         marginLeft: 5
    //     },
    // })
    // async function addfavorite(data: addPut, favorite: boolean) {


    //     //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //     await api.put(`/api/v3/solicitacao/${data.id}/`, {
    //         id: data.id,
    //         cliente: data.cliente,
    //         influencidor: data.influencidor,
    //         descricao_servico: data.descricao_servico,
    //         valor: data.cliente,
    //         status: data.status,
    //         pendente: data.pendente,
    //         link_media: data.link_media,
    //         favorite: favorite,
    //         maiorvalor: data.maiorvalor,
    //         menorvalor: data.menorvalor,
    //         destaque: data.destaque,
    //         valorads: data.valorads,
    //         estado: data.estado,
    //         cidade: data.cidade,
    //         carater: data.carater,
    //         criacao: data.criacao

    //     }

    //     )
    //     await api.get(`/api/v3/solicitacao_servico/${idin}/`,)
    //         .then((response) => {
    //             setService([response.data]);
    //             console.log(services)
    //         }).catch(function (error) {
    //             console.error(error)
    //             setService([])
    //         });
    //     if (render == true) {
    //         setrender(false)
    //     } else { setrender(true) }

    // }

    return (

        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        
                    </WelcomeText>
                    <HerderText2>
                        Confira os últimos jobs adicionados
                    </HerderText2>
                </View>
                
                <ViewBell>
                    {/* <NotificationBell qtd={qtdNote}  /> */}
                </ViewBell>

            </Header>

            <Content>
                <ScrollView>

                    {/* {services.length > 0 ? services.map((s, key) => (
                        <ItemList key={s.id}>
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
                                    {

                                        <RectButton
                                            onPress={() => {
                                                async function alterar() {
                                                    function addf() {
                                                        if (bookmark == false) {
                                                            setBookmark(true)
                                                            addfavorite(s, true)
                                                        } else {
                                                            setBookmark(false)
                                                            addfavorite(s, false)
                                                        }

                                                    }
                                                    await addf()

                                                }
                                                alterar()
                                            }
                                            }>

                                            {[

                                                bookmark == false
                                                    ? <Image key={s.id} widthprops={"17px"} heightprops={"17px"} source={iconeFavorite} />
                                                    : <Image key={s.id} widthprops={"17px"} heightprops={"17px"} source={iconeFavoriteTrue} />

                                            ]}

                                        </RectButton>

                                    }

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
                    )) :
                        <ViewVazio>

                            <View>
                                <ImagemVazio source={JobsVazio} />
                            </View>
                            <View>
                                <TextVazioTitle>
                                    Você não tem nenhuma solicitação de serviço

                                </TextVazioTitle>
                                <TextVazioSubTitle>
                                    Verifique se você seguiu a regra de ativação da conta. Ou sua conta ainda está em processo de ativação pela equipe do Boraver Influencer
                                </TextVazioSubTitle>
                            </View>
                        </ViewVazio>


                    }

                    <View>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>
                    </View> */}
                </ScrollView>
            </Content>

        </Container>
    )

}
