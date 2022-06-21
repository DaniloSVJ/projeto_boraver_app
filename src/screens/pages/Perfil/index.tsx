import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, StyleSheet, TextInput, RefreshControlBase } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../../components/Button';

import { useFocusEffect } from '@react-navigation/native';
import avatar_user from '../../../assets/avatar_user.png'

import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"

import CheckBox from '@react-native-community/checkbox';
import Eye from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/FontAwesome';


import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import {
    ViewImagePerfil,
    ViewSaldo,
    ImagePerfil,
    ViewConteinerData,
    ViewBell,
    ViewForm,
    ViewEdit,
    Content,
    HerderText2,
    Container,
    Header,
    TextDataPerfil,
    WelcomeText
} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import api from '../../../service/api'
import VEdit from './VEdit'
import { StringSchema } from 'yup';
interface EditDatas {
    nome: {
        label: string;
        text: string;
        function_State: Function;
        var_state: boolean;
    }

}

interface InfluencyData {
    id: number;
    nome: string;
    nomecompleto: string;
    celular: string;
    whatsapp: string;
    telegram: string;
    tel_fixo: string;
    sexo: string;
    email: string;
    cpf_cnpj: string;
    estado: string;
    cidade: string;
    instagram: string;
    qtd_intagram: string;
    youtube: string;
    qtd_youtube: string;
    tiktok: string;
    qtd_tiktok: string;
    agencia_banco: string;
    conta_banco: string;
    criacao: string;
    atualizacao: string;
    ativo: boolean;
}

export function Perfil() {
    const { user ,signOut } = useAuth()
    
   
    const formRef = useRef<FormHandles>(null);
    const emailInput0Ref = useRef<TextInput>(null);
    const [influencerInfo, setInfluencerInfo] = useState<InfluencyData>()
    const [qtdNote,setQtdNote]=useState(0) 
    const [nomeData, setNomeData] = useState("")
    const [celularData, setCelularData] = useState("")
    const [whatsappData, setWhatsappData] = useState("")
    const [telegramData, setTelegramData] = useState("")
    const [tel_fixomData, setTel_fixoData] = useState("")
    const [sexoData, setSexoData] = useState("")
    const [emailData, setEmailData] = useState("")
    const [cpf_cnpjData, setCpf_cnpjData] = useState("")
    const [estadoData, setEstadoData] = useState("")
    const [cidadeData, setCidadeData] = useState("")
    const [instagramData, setInstagramData] = useState("")
    const [qtd_intagramData, setQtd_intagramData] = useState("")
    const [youtubeData, setYoutubeData] = useState("")
    const [qtd_youtubeData, setQtd_youtubeData] = useState("")
    const [tiktokData, setTiktokData] = useState("")
    const [qtd_tiktokData, setQtd_tiktokData] = useState("")
    const [agencia_bancoData, setAgencia_bancoData] = useState("")
    const [conta_bancoData, setConta_bancoData] = useState("")
    
    useFocusEffect(
        useCallback(() => {
            async function load() {
               const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
               await api.get(`/api/v3/influenciador/${user.id}/`).then(
                    (res) => {
                        setInfluencerInfo(res.data)
                    }
                )
                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)
                setQtdNote(note.data.count)
            }
            load()
        }, [])
    )

    const [seeValue, setSeeValue] = useState(false)
    const [displayView, setDisplayView] = useState('flex')
    const nomeInputRef = useRef<TextInput>(null);
    const emailInputRef = useRef<TextInput>(null);
    const celullarInputRef = useRef<TextInput>(null);
    const documentoInputRef = useRef<TextInput>(null);
    const whatappInputRef = useRef<TextInput>(null);
    const telegramInputRef = useRef<TextInput>(null);
    const fixoInputRef = useRef<TextInput>(null);
    const estadoInputRef = useRef<TextInput>(null);
    const cidadeInputRef = useRef<TextInput>(null);
    const sexoInputRef = useRef<TextInput>(null);
    const intagramInputRef = useRef<TextInput>(null);
    const qtdintagramInputRef = useRef<TextInput>(null);
    const youtubeInputRef = useRef<TextInput>(null);
    const qtdyoutubeInputRef = useRef<TextInput>(null);
    const tiktokInputRef = useRef<TextInput>(null);
    const qtdtiktokInputRef = useRef<TextInput>(null);
    const agenciaInputRef = useRef<TextInput>(null);
    const contabancoInputRef = useRef<TextInput>(null);


    const styles = StyleSheet.create({
        Eye: {
            marginLeft: 12,
            marginTop: 7,

        },
        EyeSlash: {
            marginLeft: 12,
            marginTop: 4,
        },
        AntDesignEye: {
            display: 'flex',
            marginTop: 31,
            marginLeft: 12,
            width: 60,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            textAlign: 'center',
            padding: 6

        },
        AntDesignEyeSlash: {
            display: 'flex',
            marginTop: 31,
            marginLeft: 12,
            width: 60,
            backgroundColor: 'rgb(185,253,234)',

            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'green',
            borderRadius: 5,
            textAlign: 'center',
            padding: 6
        },
    })


    const handlePerfil = useCallback(
        async (id: number) => {

            await api.put(`/api/v1/influencers/${id}/`, {
                nome: user.name,
                nomecompleto: nomeData,
                celular: celularData,
                whatsapp: whatsappData,
                telegram: telegramData,
                tel_fixo: tel_fixomData,
                sexo: sexoData,
                email: emailData,
                cpf_cnpj: cpf_cnpjData,
                estado: estadoData,
                cidade: cidadeData,
                instagram: instagramData,
                qtd_intagram: qtd_intagramData,
                youtube: youtubeData,
                qtd_youtube: qtd_youtubeData,
                tiktok: tiktokData,
                qtd_tiktok: qtd_tiktokData,
                agencia_banco: agencia_bancoData,
                conta_banco: conta_bancoData
            })

        },
        [
            nomeData, celularData, whatsappData, telegramData,
            tel_fixomData, sexoData, emailData, cpf_cnpjData,
            estadoData, cidadeData, instagramData, qtd_intagramData,
            youtubeData, qtd_youtubeData, tiktokData, qtd_tiktokData,
            agencia_bancoData, conta_bancoData
        ],
    );

    return (
        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Saldo:
                    </WelcomeText>
                    <ViewSaldo>

                        <View>
                            <HerderText2>
                                {seeValue == true
                                    ? "0,00"
                                    : "*******"
                                }
                            </HerderText2>
                        </View>
                        <View>
                            {seeValue == true
                                ? <Eye onPress={() => setSeeValue(false)} style={styles.Eye} name={"eye"} color={"#fff"} size={15} />
                                : <Eye onPress={() => setSeeValue(true)} style={styles.EyeSlash} name={"eye-slash"} color={"#fff"} size={15} />
                            }
                        </View>
                    </ViewSaldo>
                </View>
                <ViewBell>
                    <NotificationBell qtd={qtdNote} />
                </ViewBell>

            </Header>

            <Content display={displayView}>
                <ScrollView>

                    <ViewConteinerData>
                        <ViewImagePerfil>
                            <View>
                                <ImagePerfil source={avatar_user} />
                            </View>


                        </ViewImagePerfil>
                        <ViewEdit>
                            {influencerInfo ?
                                <Form ref={formRef}
                                    onSubmit={() => handlePerfil(influencerInfo.id)}>

                                    <VEdit
                                        ref={nomeInputRef}
                                        sendData={setNomeData}
                                        name="nome"
                                        weight=''
                                        label='Nome Completo'
                                        valid={true}
                                        text={String(influencerInfo.nomecompleto)}

                                    />
                                    <VEdit
                                        ref={documentoInputRef}
                                        sendData={setCpf_cnpjData}
                                        name="cpf_cnpj"
                                        label='CPF ou CNPJ'
                                        valid={true}
                                        text={String(influencerInfo.cpf_cnpj)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={sexoInputRef}
                                        sendData={setSexoData}
                                        name="sexo"
                                        label='Gênero'
                                        valid={true}
                                        text={String(influencerInfo.sexo)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={emailInput0Ref}
                                        sendData={setEmailData}
                                        name="email"
                                        label='Email'
                                        valid={true}
                                        text={String(influencerInfo.email)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={celullarInputRef}
                                        sendData={setCelularData}
                                        weight={'50px'}
                                        name="celular"
                                        label='Celular'
                                        valid={true}
                                        text={String(influencerInfo.celular)}

                                    />

                                    <VEdit
                                        ref={whatappInputRef}
                                        sendData={setWhatsappData}
                                        name="whatsapp"
                                        label='Whatsapp'
                                        valid={true}
                                        text={String(influencerInfo.whatsapp)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={telegramInputRef}
                                        sendData={setTelegramData}
                                        name="telegram"
                                        label='Telegram'
                                        valid={true}
                                        text={String(influencerInfo.telegram)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={fixoInputRef}
                                        sendData={setTel_fixoData}
                                        name="tel_fixo"
                                        label='Telefone Fixo'
                                        valid={true}
                                        text={String(influencerInfo.tel_fixo)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={estadoInputRef}
                                        sendData={setEstadoData}
                                        name="estado"
                                        label='Estado'
                                        valid={true}
                                        text={String(influencerInfo.estado)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={cidadeInputRef}
                                        sendData={setCidadeData}
                                        name="cidade"
                                        label='Cidade'
                                        valid={true}
                                        text={String(influencerInfo.cidade)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={intagramInputRef}
                                        sendData={setInstagramData}
                                        name="instagram"
                                        label='Instagram'
                                        valid={true}
                                        text={String(influencerInfo.instagram)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={qtdintagramInputRef}
                                        sendData={setQtd_intagramData}
                                        name="qtd_intagram"
                                        label='Quantidade Seguidores'
                                        valid={true}
                                        text={String(influencerInfo.qtd_intagram)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={youtubeInputRef}
                                        sendData={setYoutubeData}
                                        name="youtube"
                                        label='Youtube'
                                        valid={true}
                                        text={String(influencerInfo.youtube)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={qtdyoutubeInputRef}
                                        sendData={setQtd_youtubeData} name="qtd_youtube"
                                        label='Quantidade Seguidores'
                                        valid={true}
                                        text={String(influencerInfo.qtd_youtube)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={tiktokInputRef}
                                        sendData={setTiktokData} name="tiktok"
                                        label='Tiktok'
                                        valid={true}
                                        text={String(influencerInfo.tiktok)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={qtdtiktokInputRef}
                                        sendData={setQtd_tiktokData}
                                        name="qtd_tiktok"
                                        label='Quantidade Seguidores'
                                        valid={true}
                                        text={String(influencerInfo.qtd_tiktok)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={agenciaInputRef}
                                        sendData={setAgencia_bancoData}
                                        name="agencia_banco"
                                        label='AgenciaBanco'
                                        valid={true}
                                        text={String(influencerInfo.agencia_banco)}
                                        weight=''
                                    />

                                    <VEdit
                                        ref={contabancoInputRef}
                                        sendData={setConta_bancoData}
                                        name="conta_banco"
                                        label='Conta Bancaria'
                                        valid={true}
                                        text={String(influencerInfo.conta_banco)}
                                        weight=''
                                    />

                                    <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                                        Salvar
                                    </Button>
                                    <Button bordercolor={"#DC143C"} background={"#DC143C"} color={"#fff"} onPress={signOut }>
                                        Sair
                                    </Button>

                                    <Text> </Text>
                                    <Text> </Text>
                                    <Text> </Text>
                                    <Text> </Text>
                                    <Text> </Text>
                                    <Text> </Text>
                                    <Text> </Text>
                                 
                                </Form>
                                : <Text></Text>

                            }

                        </ViewEdit>
                    </ViewConteinerData>



                </ScrollView>
            </Content>

        </Container>
    )

}

