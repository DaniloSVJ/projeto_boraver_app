import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet, Image } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import IconSearch from 'react-native-vector-icons/FontAwesome';

import { Box, DateInput } from 'grommet';
import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
import Combobox from 'combobox-react-native'

import IconFavorite from 'react-native-vector-icons/Fontisto';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import DatePicker from 'react-native-datepicker';
import { SimpleLineIcons } from '@expo/vector-icons';
import DateField from 'react-native-datefield';
import { IconBase, icons } from 'react-icons/lib';
import StatusConcluido from '../../../assets/Solicitacao_concluida.jpg'
import iTime from '../../../assets/iTime.svg'
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewBody,
    ViewBodyPeriod,
    ViewFooter,
    ViewButton,
    TextSolicit,
    ViewLeftHerder,
    ViewIcons,
    ViewSearch,
    ViewBell,
    Avaliation,
    TitleItem,
    Ofert,
    Footer, Destaque, TextDestaque, Description,
    TextDescription,
    SubtitleService,
    ItemList,
    Content,
    HerderText2,
    Container,
    Header,
    ViewIcone
} from './styles'



import { ScrollView } from 'react-native-gesture-handler';

import ipreferredW from '../../../assets/ipreferredW.svg'
import iperfiluser from '../../../assets/avatar_user.png'



import api from '../../../service/api'
interface SearchFormData {

}
type Nav = {
    navigate: (value: string, { }) => void;

}
interface RouteParams {
    idS: number
}

interface Solicitacao {
    cliente: number,
    influencidor: number,
    titulo: string,
    descricao_servico: string,
    valor: number,
    status: string,
    periodo: string,
    favorite: boolean,
    maiorvalor: number,
    menorvalor: number,
    destaque: string,
    valorads: string,
    estado: string,
    cidade: string,

}

export function OfferDetail() {
    const route = useRoute();
    const { idS } = route.params as RouteParams;
    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();
    const [soliction, setSoliction] = useState<Solicitacao>()

    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const [qtdNote, setQtdNote] = useState(0)


    const styles = StyleSheet.create({

        imageAvatar: {
            width: 38,
            height: 38,
            color: "#fff",

        },
        viewbody: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
        imagebody: {
            marginTop: 7,
            marginRight: 11,

        },
        imageTime: {
            width: 13,
            height: 18

        },


        imagePrefered: {
            marginTop: 12,
            marginLeft: 12,

            width: 14,
            height: 17,
            color: "#fff",

        },
        dateinput: {
            width: 100,
            marginLeft: 53,
            marginRight: 53,
        },
        select: {
            width: "100%",
            marginTop: 15,
            marginLeft: 49,
            marginRight: 49,
            color: "#3C2E54",
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: "rgb(191,191,191)",
            borderRadius: 5,
            padding: 12,
            i: 50

        },
        selectText: {
            textAlign: 'right'
        },
        buttonGreen: {
            paddingRight: 46,
            paddingLeft: 46,
            paddingTop: 12.25,
            paddingBottom: 12.25,
        },
        buttonRed: {
            paddingRight: 31,
            paddingLeft: 31,
            paddingTop: 12.25,
            paddingBottom: 12.25,
        },

    });
    useFocusEffect(
        useCallback(() => {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                const solicitDetail = await api.get(`/api/v3/solicitacao/${idS}/`)
                setSoliction(solicitDetail.data)
                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)
                setQtdNote(note.data.count)
            }
            load()
        }, [])
    )
    const handleAlterStatus = (respost: string) => {
        async function alterstatus() {
            if (respost === 'aceito') {
                await api.patch(`/api/v3/solicitacao/${idS}/`,{
                    status:'andamento'
                })
                navigate('OfferAceite',{})
            }else if (respost === 'recusado') {
                await api.patch(`/api/v3/solicitacao/${idS}/`,{
                    status:'recusado'
                })
                navigate('OfferRecuse',{})
            }else if (respost === 'concluída') {
                await api.patch(`/api/v3/solicitacao/${idS}/`,{
                    status:'concluído'
                })
                navigate('OfferConcluded',{})
            }

        }
    }
    // Colocar botão para alterar status para
    // concluido na oferta em andamento.
    // Criar Tela simples de Comunicação com o cliente

    return (
        <Container>
            <Header>

                <View>

                    <ViewLeftHerder >
                        <RectButton onPress={() => navigate("Home", {})}>
                            <ViewIcone>
                                <FontAwesome name="angle-left" size={24} color="white" />
                            </ViewIcone>
                        </RectButton>
                        <View>
                            <HerderText2>
                                Detalhe
                            </HerderText2>
                        </View>
                    </ViewLeftHerder>
                </View>
                <ViewIcons>
                    <RectButton onPress={() => navigate("Search", {})}>
                        <ViewSearch>

                            <IconSearch name={'search'} size={22} color={'#fff'} />
                        </ViewSearch>
                    </RectButton>
                    <RectButton onPress={() => navigate("Notifications", {})}>
                        <ViewBell >
                            <NotificationBell qtd={qtdNote} />
                        </ViewBell>
                    </RectButton>
                </ViewIcons>

            </Header>

            <Content >
                <ScrollView>

                    <ItemList>
                        <TitleItem>
                            <View>
                                <Image style={styles.imageAvatar} source={iperfiluser} />
                            </View>
                            <View>
                                <TitleService>{soliction?.titulo}</TitleService>

                            </View>
                            <View style={{ marginLeft: 'auto', marginRight: '5vw' }}>
                                <Image style={styles.imagePrefered} source={ipreferredW} />

                            </View>
                        </TitleItem>


                        <Ofert>
                            <View style={{ display: 'flex', flexDirection: 'row' }} >
                                <Foundation name="star" size={12} color="#373737" />
                                <Avaliation>
                                    4.5
                                </Avaliation>
                            </View>

                            <TextDescription>{soliction?.cidade}, {soliction?.estado}, Brasil</TextDescription>

                            <TextDescription>Membro desde 31 de maio de 2021</TextDescription>
                        </Ofert>
                        <ViewBody>
                            <View style={styles.viewbody}>
                                <View style={styles.imagebody}>
                                    <SimpleLineIcons name="diamond" size={19} color="black" />
                                </View>
                                <View>
                                    <SubtitleService>
                                        Orçamento
                                    </SubtitleService>

                                    <TextSolicit>
                                        R$ {soliction?.periodo}
                                    </TextSolicit>
                                </View>
                            </View>
                            <ViewBodyPeriod>
                                <View style={styles.viewbody}>
                                    <View style={styles.imagebody}>
                                        <Image source={iTime} style={styles.imageTime} />
                                    </View>
                                    <View>
                                        <SubtitleService>
                                            Período
                                        </SubtitleService>
                                        <TextSolicit>
                                            {soliction?.status}
                                        </TextSolicit>
                                    </View>
                                </View>
                            </ViewBodyPeriod>
                        </ViewBody>
                        <ViewFooter>
                            <SubtitleService>
                                Detalhe
                            </SubtitleService>
                            <TextDescription style={{ marginTop: 10 }}>{soliction?.descricao_servico}</TextDescription>

                        </ViewFooter>
                        {soliction?.status === 'novaoferta' ? (
                            <ViewButton>
                                <View style={{ marginRight: 18 }}>
                                    <Button
                                        style={styles.buttonGreen}
                                        bordercolor={"#489D31"}
                                        background={"#489D31"}
                                        color={"#fff"}
                                        onPress={() => navigate("OfferAceite", {})}
                                    >
                                        Aceito
                                    </Button>
                                </View>
                                <View style={{ marginLeft: 18, marginRight: 18, paddingRight: 29 }}>
                                    <Button
                                        style={styles.buttonRed}
                                        bordercolor={"#C72D2D"}
                                        background={"#C72D2D"}
                                        color={"#fff"}
                                        onPress={() => navigate("OfferRecuse", {})}
                                    >
                                        Não Aceito
                                    </Button>
                                </View>
                            </ViewButton>
                        ) : soliction?.status === 'andamento' ?
                            (
                                <ViewButton>
                                    <View style={{ marginRight: 18 }}>
                                        <Text>OFERTA ACEITA</Text>
                                        <Button
                                            style={styles.buttonGreen}
                                            bordercolor={"#3C2E54"}
                                            background={"#3C2E54"}
                                            color={"#fff"}
                                            onPress={() => navigate("OfferAceite", {})}
                                        >
                                            Tela de Comunicação
                                        </Button>
                                    </View>

                                </ViewButton>
                            ) :soliction?.status === 'concluido' ?
                            (
                                <ViewButton>
                                    <Text>
                                        Parabêns você concluiu esse Trabalho
                                    </Text>
                                    <Image style={{width:300,height:300}} source={StatusConcluido} />


                                </ViewButton>
                            ):
                            (
                                <ViewButton>
                                    <View style={{ marginRight: 18 }}>
                                        <Text>Você Recusou esta Solicitação</Text>
                                        <Button
                                            style={styles.buttonGreen}
                                            bordercolor={"#489D31"}
                                            background={"#489D31"}
                                            color={"#fff"}
                                            onPress={() => navigate("OfferAceite", {})}
                                        >
                                            Ver a réplica do cliente
                                        </Button>
                                    </View>
                                    <View style={{ marginLeft: 18, marginRight: 18, paddingRight: 29 }}>
                                        <Button
                                            style={styles.buttonRed}
                                            bordercolor={"#489D31"}
                                            background={"#489D31"}
                                            color={"#fff"}
                                            onPress={() => navigate("OfferAceite", {})}
                                        >
                                            Agora Aceito
                                        </Button>
                                    </View>

                                </ViewButton>
                            )
                        }
                    </ItemList>
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
