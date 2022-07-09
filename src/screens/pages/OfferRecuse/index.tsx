import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet, Image } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Button from '../../../components/Button'
import { useNavigation, } from '@react-navigation/native';
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

import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import iconDate from '../../../assets/iconDateInput.svg'
import IconComboBox from '../../../assets/iconComboBox.svg'
import ipreferredW from '../../../assets/ipreferredW.svg'
import iperfiluser from '../../../assets/avatar_user.png'



import api from '../../../service/api'
interface SearchFormData {

}
type Nav = {
    navigate: (value: string, { }) => void;
}

export function OfferRecuse() {
    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();
    const [dateSelect, setDateSelect] = useState("")
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const [qtdNote, setQtdNote] = useState(0)
    const dataCb = [
        { "id": 1, "name": "Nova Ofereta" },
        { "id": 2, "name": "Em Andamento" },
        { "id": 3, "name": "Recusado" },
    ]
    const [titleHeader, setTitleHeader] = useState("Buscar")
    const [displayView, setDisplayView] = useState('none')
    const [displayViewForm, setDisplayViewForm] = useState('flex')
    const [date, setDate] = useState("")
    const [open, setOpen] = useState(false)
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

                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)
                setQtdNote(note.data.count)
            }
            load()
        }, [])
    )
    const handleSearch = useCallback(
        async (data: SearchFormData) => {
            try {


            } catch (err) {

            }
        },
        [],
    );
    function teste() {
        console.log("realizou o teste")
    }
    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedRedeSocial, setSelectedRedeSocial] = useState();


    const datatttt = ['data1', 'data2', 'data3']

    return (
        <Container>
            <Header>

                <View>

                    <ViewLeftHerder >
                    <RectButton onPress={() => navigate("OfferDetail", {})}>
                        <ViewIcone>
                            <FontAwesome name="angle-left" size={24} color="white" />
                        </ViewIcone>
                    </RectButton>    
                        <View>
                            <HerderText2>
                                Não Aceito
                            </HerderText2>
                        </View>
                    </ViewLeftHerder>
                </View>
                <ViewIcons>
                    <RectButton onPress={() => navigate("OfferDetail", {})}>
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


                        <ViewBody>
                            <SubtitleService>
                                Você não aceitou a proposta
                            </SubtitleService>
                            <TextDescription style={{ marginTop: 10 }}>
                            Utilize o campo abaixo para deixar uma mensagem explicando o motivo da não aceitação para o solicitante.
                            </TextDescription>
                            <TextInput
                                style={{marginTop:30}}
                                underlineColorAndroid="transparent"
                                placeholder="Digite sua mensagem"
                                placeholderTextColor="#373737"
                                numberOfLines={10}
                                multiline={true}
                            />
 
                        </ViewBody>


                        <View style={{ marginTop: 252,  marginRight:36, marginBottom:68 ,marginLeft:36,}}>
                            <Button
                                
                                bordercolor={"#3C2E54"}
                                background={"#3C2E54"}
                                color={"#fff"}
                            >
                                Confirmar e enviar
                            </Button>
                        </View>



                    </ItemList>

                </ScrollView>
            </Content>

        </Container>
    )

}
