
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import Button from '../../../components/Button'
import { useFocusEffect } from '@react-navigation/native';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import { Form } from '@unform/mobile'
import { Picker } from '@react-native-picker/picker';
import { FormHandles } from "@unform/core"
import Select from '../../../components/Select'


import {

    ViewBell,
    ViewIcons,
    ViewSearch,
    Content,
    Container,
    Header,
    WelcomeText,
    Title,
    SubTitle,
    SubTitleForm,
    ViewForm,
    ViewTitle


} from './styles'
import { useNavigation, } from '@react-navigation/native';

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

type Nav = {
    navigate: (value: string, { }) => void;
}
export function Contact() {
    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();
    const formRef = useRef<FormHandles>(null);

    const [bookmark, setBookmark] = useState(false)

    const [selectedData, setSelectedData] = useState('')

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
              
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                setIdin(IdInfluencers.data.id)
                await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`, {

                }).then((response) => {
                    setService([response.data]);
                    setBookmark(response.data.favorite)
                    console.log(services)
                }).catch(function (error) {
                    setService([])
                });

                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)

                setQtdNote(note.data.count)

            }
            load()
        }, [bookmark]),
    );
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },
    })
    async function addfavorite(data: addPut, favorite: boolean) {


        //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await api.put(`/api/v3/solicitacao/${data.id}/`, {
            id: data.id,
            cliente: data.cliente,
            influencidor: data.influencidor,
            descricao_servico: data.descricao_servico,
            valor: data.cliente,
            status: data.status,
            pendente: data.pendente,
            link_media: data.link_media,
            favorite: favorite,
            maiorvalor: data.maiorvalor,
            menorvalor: data.menorvalor,
            destaque: data.destaque,
            valorads: data.valorads,
            estado: data.estado,
            cidade: data.cidade,
            carater: data.carater,
            criacao: data.criacao

        }

        )
        await api.get(`/api/v3/solicitacao_servico/${idin}/`,)
            .then((response) => {
                setService([response.data]);
                console.log(services)
            }).catch(function (error) {
                console.error(error)
                setService([])
            });
        if (render == true) {
            setrender(false)
        } else { setrender(true) }

    }
    const optContact = ['Dúvida', 'Reclamação', 'Sugestão']
    async function alterar(val: boolean) {
        navigate("Contact2", {})

    }
    const styled = StyleSheet.create({


        select: {
            width: "100%",
            marginTop: 9,
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
        }

    });
    return (

        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Contato
                    </WelcomeText>

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

            <Content>
                <ScrollView>
                    <ViewTitle>

                        <Title>Fale com o nosso Time</Title>
                        <SubTitle style={{ marginTop: 8 }}>Como tem sido sua experiênca com o Boraver App? Tem dúvidas, sugestões ou elogios? Deixe sua mensagem no campo abaixo. Desde já agradecemos o envio de suas ideias, problemas ou agradecimentos.</SubTitle>
                    </ViewTitle>
                    <ViewForm>
                        <SubTitleForm>Seu feedback é sobre o quê?</SubTitleForm>
                        <Form ref={formRef} onSubmit={alterar}>
                            <Select
                                options={optContact}
                                onChangeSelect={setSelectedData}
                                marginR={10}
                                marginL={10}
                            />
                            <TextInput
                                style={{ marginTop: 16 }}
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                            <View style={{ marginTop: 'auto',marginBottom: '50%' }}>
                                <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                                    Enviar
                                </Button>
                            </View>
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
                        </Form>
                    </ViewForm>
                </ScrollView>
            </Content>

        </Container>
    )

}

