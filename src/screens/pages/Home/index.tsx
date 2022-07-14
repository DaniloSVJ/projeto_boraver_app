
import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';
import { Noti } from '../Noti'
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewContentTitleItem,
    ViewBell,
    TextFooter,
    ViewTime,
    Image,
    TitleItem,
    ViewIcons,
    ViewSearch,
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
import { useNavigation, } from '@react-navigation/native';

import Img from '../../../assets/avatar_user.png'

import iconeFavorite from '../../../assets/marca-paginas.png'
import iconeFavoriteTrue from '../../../assets/marca-paginas-true.png'
import JobsVazio from '../../../assets/item-exclamacao.png'

import { ScrollView } from 'react-native-gesture-handler';

import api from '../../../service/api'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { number } from 'yup';


interface solicitationI {
    id: number,
    cliente: number,
    influencidor:number,
    titulo:string,
    descricao_servico:string,
    valor:number,
    status:string,
    pendente :string,
    link_media:string,
    favorite :boolean,
    maiorvalor:number,
    menorvalor:number,
    destaque :boolean,
    valorads :number,
    estado :string,
    cidade :string,
    carater :string,
    criacao :string,
}

type Nav = {
    navigate: (value: string, { }) => void;
}

export function Home() {
    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();

    const [bookmark, setBookmark] = useState(false)

   
    const [qtdNote, setQtdNote] = useState(0)
    const [render, setrender] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])
    const [idin, setIdin] = useState(0)

    useFocusEffect(
    useCallback(() => {
            setService([])
            async function load() {
                
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                setIdin(IdInfluencers.data.id)
                // setService([response.data.results]);
                // setBookmark(response.data.results.favorite)
                const solicitacao = await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`)


                setService(solicitacao.data.results);
                // setService([solicitacao.data]);
                // .then((response) => {
                //     setService([response.data.results]);
                //     setBookmark(response.data.results.favorite)
                //     console.log("============dfdfdfdfdf")
                //     console.log(response.data.results)
                //     console.log("dddddddddd===========dfdfdfdfdf")
                // }).catch(function (error) {
                //     console.log("============dfdfdfdfdf")
                //     setService([])
                // });

                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)

                setQtdNote(note.data.count)

            }
            load()
        }, [bookmark])
   );
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5

        },
    })
    async function addfavorite(idS:number,sfav:boolean) {
        let alter = false
        if(sfav===false){
            alter=true
        }else if(sfav===true){
            alter=false
        }    
        //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     
        await api.patch(`/api/v3/solicitacao/${idS}/`, {
            favorite: alter,
        }

        )
        await api.get(`/api/v3/solicitacao_servico/${idin}/`)
            .then((response) => {
                setService(response.data.results);
                console.log(services)
            }).catch(function (error) {
                console.error(error)
                setService([])
            });
        if (render == true) {
            setrender(false)
        } else { setrender(true) }

    }
  
    return (

        <Container>
{/*============== CABEÇALHO*/}            
            <Header>

                <View>
                    <WelcomeText>
                        Olá, {user.name}
                    </WelcomeText>
                    <HerderText2>
                        Confira os últimos jobs adicionados
                    </HerderText2>
                </View>
                <ViewIcons>
{/*============== Lupa Explorer*/}
                    <RectButton onPress={() => navigate("Search", {})}>
                        <ViewSearch>

                            <IconSearch name={'search'} size={22} color={'#fff'} />
                        </ViewSearch>
                    </RectButton>
{/*============== Sino Notificações*/}
                    <RectButton onPress={() => navigate("Notifications", {})}>
                        <ViewBell >
                            <NotificationBell qtd={qtdNote} />
                        </ViewBell>
                    </RectButton>
                </ViewIcons>
            </Header>

            <Content>
{/*============== CORPO DA MENSAGEM*/}                    
                <ScrollView>
                   

                    {services.length>0 ? services.map((s, key) =>(
                       <TouchableOpacity onPress={()=>navigate('OfferDetail',{})}>
                        <ItemList key={key}>    
                            <TitleItem>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image widthprops={"35px"} heightprops={"35px"} source={Img} />
                                    </View>
                                    <View>
                                        <TitleService>{s.titulo}</TitleService>
                                        <SubtitleService>Orçamento R${String(s.menorvalor)} - R${String(s.maiorvalor)}</SubtitleService>
                                    </View>
                                </ViewContentTitleItem>


                                <View style={styles.favorite}>
                                    {

                                        <RectButton
                                            onPress={() => { addfavorite(s.id, s.favorite)}}>
                                                     <Image  key={key} widthprops={"17px"} heightprops={"17px"} source={s.favorite== false?iconeFavorite:iconeFavoriteTrue} />
                                        </RectButton>

                                    }

                                </View>                               
                            </TitleItem>


                            <Description>
                                <TextDescription>{s.descricao_servico}</TextDescription>
                            </Description>
                            <Footer>
                                <View style={{ marginTop:3}}>
                                    <TextFooter>Treinamento</TextFooter>
                                </View>
                                <ViewTime>
                                    <Destaque background={s.status}>
                                        <TextDestaque>{s.status}</TextDestaque>
                                    </Destaque>
                                </ViewTime>
                            </Footer>
                        </ItemList>
                        </TouchableOpacity> 
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
                    </View>
                </ScrollView>
            </Content>

        </Container>
    )

}

