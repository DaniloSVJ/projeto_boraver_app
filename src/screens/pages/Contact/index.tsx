
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { View, StyleSheet, TextInput, Text ,Alert} from 'react-native'
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
import Textarea from 'react-native-textarea';


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
import { env } from 'process';


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
    const [messageText, setMessageText] = useState('')
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
    const optContact = ['D??vida', 'Reclama????o', 'Sugest??o']
    async function alterar(val: boolean) {

        if(selectedData=='' && messageText==''){
            Alert.alert('Selecione o tipo de menssagem')
        }else if(messageText==''){
            Alert.alert('Digite uma menssagem')
        }else{
            navigate("Contact2", {})
        }    

       

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
        },
        container: {
            flex: 1,
            // paddingRight:7,
            // paddingLeft:7,
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: "20%"
        },
        textareaContainer: {
            borderRadius: 5,
            height: 180,
            width: "100%",
            padding: 5,
            backgroundColor: '#F5FCFF',
        },
        textarea: {
            textAlignVertical: 'top',  // hack android
            height: 170,
            borderRadius: 5,
            width: "100%",
            fontSize: 14,
            color: '#333',
        },

    });
    return (

        <Container>
            <Header>

                <View style={{ marginTop: 10 }}>
                    <WelcomeText>
                        Contato
                    </WelcomeText>

                </View>
                <ViewIcons style={{ marginTop: 10 }}>
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
                        <SubTitle style={{ marginTop: 8 }}>Como tem sido sua experi??nca com o Boraver App? Tem d??vidas, sugest??es ou elogios? Deixe sua mensagem no campo abaixo. Desde j?? agradecemos o envio de suas ideias, problemas ou agradecimentos.</SubTitle>
                    </ViewTitle>
                    <ViewForm>
                        <SubTitleForm>Seu feedback ?? sobre o qu???</SubTitleForm>
                        <Form ref={formRef} onSubmit={alterar}>
                            <Select
                                options={optContact}
                                onChangeSelect={setSelectedData}
                                marginR={10}
                                marginL={10}
                            />
                            {/* <TextInput
                                style={{ paddingTop: 2, marginTop: 16, backgroundColor: "#F0FFFF", height: 150, justifyContent: "flex-start" }}

                                placeholder="Digite sua mensagem"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            /> */}
                            <View >
                                {/* <Textarea
                                    containerStyle={styled.textareaContainer}
                                    style={styled.textarea}
                                //style={{ paddingTop: 2, marginTop: 16, backgroundColor: "#F0FFFF", height: 150, justifyContent: "flex-start" }}
                               
                                maxLength={1000}
                                placeholder="Digite sua mensagem"
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            /> */}
                                <TextInput
                                    style={{ backgroundColor: '#F0FFFF' }}
                                    underlineColorAndroid="transparent"
                                    placeholder="Digite sua mensagem"
                                    placeholderTextColor="#373737"
                                    numberOfLines={15}
                                    onChangeText={text => setMessageText(text)}
                                    multiline={true}
                                />
                            </View>
                            <View style={{ marginTop: 'auto', marginBottom: '50%' }}>
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

