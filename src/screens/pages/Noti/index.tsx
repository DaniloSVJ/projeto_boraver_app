
import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'

import {
    AutorText,
    ViewContentTitleItem,
    ViewIcons,
    ViewSearch,
    ViewBell,
    ViewContentBody,

    TextWeekBody,
    Image,
    TitleItem,

    ViewIcone,
    TextNoti,
    TextDescription,
    TextTime,
    ItemList,
    Content,
    HerderText2,
    Container,
    Header,
    ViewLeftHerder,
  
} from './styles'
import { useNavigation, } from '@react-navigation/native';

import Img from '../../../assets/avatar_user.png'


import { ScrollView } from 'react-native-gesture-handler';

import api from '../../../service/api'


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
interface teste {
    id: number;
    name: string;

}
type Nav = {
    navigate: (value: string, { }) => void;
}

export function Noti() {
    const { user } = useAuth()

    const { navigate } = useNavigation<Nav>();


    const [bookmark, setBookmark] = useState(false)

    useEffect(() => {
        setService([])
        async function load() {

            const IdInfluencers =
                await
                    api.get(`/api/v3/influenciador/${user.id}/`)
            setIdin(IdInfluencers.data.id)
            api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`,
            ).then((response) => {
                setService([response.data]);
                setBookmark(response.data.favorite)
                console.log(services)
            }).catch(function (error) {
                setService([])
            });

            console.log(user.id)

        }
        load()
    }, [bookmark])
    const [qtdNote, setQtdNote] = useState(0)
    const [render, setrender] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])
    const [idin, setIdin] = useState(0)

    useFocusEffect(
        useCallback(() => {
            setService([])
            async function load() {
                
                // const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                // setIdin(IdInfluencers.data.id)
                // await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`, {

                // }).then((response) => {
                //     setService([response.data]);
                //     setBookmark(response.data.favorite)
                //     console.log(services)
                // }).catch(function (error) {
                //     setService([])
                // });

                // const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)

                // setQtdNote(note.data.count)

            }
            load()
        }, [bookmark]),
    );
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },
    })

    return (

        <Container>

            {/*============== CABE??ALHO*/}
            <Header>
                {/*============== Icone de voltar*/}
                <ViewLeftHerder style={{marginTop:10}}>
                    <RectButton onPress={() => navigate("Home", {})}>
                        <ViewIcone>
                            <FontAwesome name="angle-left" size={24} color="white" />
                        </ViewIcone>
                    </RectButton>
                    <View>
                        <HerderText2>
                            Notifica????es
                        </HerderText2>
                    </View>
                </ViewLeftHerder>
                <ViewIcons style={{marginTop:10}}>
                    {/*============== explorer*/}
                    <RectButton onPress={() => navigate("Notifications", {})}>
                        <ViewSearch>

                            <IconSearch name={'search'} size={22} color={'#fff'} />
                        </ViewSearch>
                    </RectButton>
                    {/*============== sino notica????es*/}
                    <RectButton onPress={() => navigate("Notifications", {})}>
                        <ViewBell >
                            <NotificationBell qtd={qtdNote} />
                        </ViewBell>
                    </RectButton>
                </ViewIcons>
            </Header>

            <Content>
                <ScrollView>

                    {/* {services.length > 0 ? services.map((s, key) => ( */}
                    <ItemList>
                        <TitleItem>

                            <ViewContentBody>
                                <TextWeekBody>Hoje</TextWeekBody>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image
                                            widthprops={"35px"}
                                            heightprops={"35px"}
                                            source={Img}
                                        />
                                    </View>
                                    <TextNoti>

                                        <View style={{ width: '90%', marginLeft: 2, paddingRight: 54 }}>
                                            <TextDescription><AutorText>Trainer</AutorText>enviou uma nova mensagemem Divulga????o de curso presencial.<TextTime>2d</TextTime>
                                            </TextDescription>
                                        </View>
                                    </TextNoti>
                                </ViewContentTitleItem>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image
                                            widthprops={"35px"}
                                            heightprops={"35px"}
                                            source={Img}
                                        />
                                    </View>
                                    <TextNoti>

                                        <View style={{ width: '90%', marginLeft: 2, paddingRight: 54 }}>
                                            <TextDescription><AutorText>S??rgio Henrique </AutorText>Curtiu o seu coment??rio:Tudo bem. Obrigado<TextTime>2d</TextTime>
                                            </TextDescription>
                                        </View>
                                    </TextNoti>
                                </ViewContentTitleItem>
                                <TextWeekBody>Esta semana</TextWeekBody>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image
                                            widthprops={"35px"}
                                            heightprops={"35px"}
                                            source={Img}
                                        />
                                    </View>
                                    <TextNoti>

                                        <View style={{ width: '90%', marginLeft: 2, paddingRight: 54 }}>
                                            <TextDescription><AutorText>Trainer</AutorText>enviou uma nova mensagemem Divulga????o de curso presencial.<TextTime>2d</TextTime>
                                            </TextDescription>
                                        </View>
                                    </TextNoti>
                                </ViewContentTitleItem>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image
                                            widthprops={"35px"}
                                            heightprops={"35px"}
                                            source={Img}
                                        />
                                    </View>
                                    <TextNoti>

                                        <View style={{ width: '90%', marginLeft: 2, paddingRight: 54 }}>
                                            <TextDescription><AutorText>S??rgio Henrique </AutorText>Curtiu o seu coment??rio:Tudo bem. Obrigado<TextTime>2d</TextTime>
                                            </TextDescription>
                                        </View>
                                    </TextNoti>
                                </ViewContentTitleItem>
                            </ViewContentBody>


                        </TitleItem>




                    </ItemList>
                </ScrollView>
            </Content>

        </Container>
    )

}

