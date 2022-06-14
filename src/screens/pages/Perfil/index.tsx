import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { RectButton } from 'react-native-gesture-handler';

import { useFocusEffect } from '@react-navigation/native';
import avatar_user from '../../../assets/avatar_user.png'
import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
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
    Label,
    ViewEdit,
    Content,
    HerderText2,
    Container,
    Header,
    TextDataPerfil,
    WelcomeText
} from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import api from '../../../service/api'
interface SearchFormData {

}

export function Perfil() {
    const { user } = useAuth()
    const formRef = useRef<FormHandles>(null);

    const [seeValue, setSeeValue] = useState(false)
    const [editValue, setEditValue] = useState(0)
    const [displayView, setDisplayView] = useState('flex')
    const [editNome, setEditNome] = useState(false)
    const [editCelula, setEditCelula] = useState(false)
    const [editWhatsapp, setEditWhatsapp] = useState(false)
    const [editTelegram, setEditTelegram] = useState(false)
    const [ediTel_fixo, setEdiTel_fixo] = useState(false)
    const [editSexo, setEditSexo] = useState(false)
    const [editNascimento, setEditNascimento] = useState(false)
    const [editEmail, setEditEmail] = useState(false)

    const [editcpf_cnpj, setEditcpf_cnpj] = useState(false)

    const [editEstado, setEditEstado] = useState(false)
    const [editCidade, setEditCidade] = useState(false)
    const [editInstagram, setEditInstagram] = useState(false)
    const [editQtd_intagram, setEditQtd_intagram] = useState(false)
    const [editYoutube, setEditYoutube] = useState(false)
    const [editQtdYoutube, setEditQtdYoutube] = useState(false)
    const [editTiktok, setEditTiktok] = useState(false)
    const [editAgencia_banco, setEditAgencia_banco] = useState(false)
    const [editConta_banco, setEditConta_banco] = useState(false)




    useFocusEffect(
        useCallback(() => {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
            }
            load()
        }, [user]),
    )

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
            marginTop: 29,
            marginLeft: 12,
            width: 60,
            borderWidth: 1,
            borderStyle:'solid',
            borderRadius: 5,
            textAlign: 'center',
            padding: 3

        },
        AntDesignEyeSlash: {
            display: 'none'
        },
    })
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
                    <NotificationBell qtd={100} />
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
                            <View>
                                <Label>Nome Completo:</Label>
                                <TextDataPerfil>Gilherme Sampaio</TextDataPerfil>
                            </View>
                            <View>
                                <RectButton 
                                    onPress={() => setEditNome(true)}
                                    style={editNome == false 
                                        ?styles.AntDesignEye 
                                        :styles.AntDesignEyeSlash} 
                                >
                                    Editar
                                </RectButton>

                            </View>
                        </ViewEdit>
                    </ViewConteinerData>
                </ScrollView>
            </Content>

        </Container>
    )

}
