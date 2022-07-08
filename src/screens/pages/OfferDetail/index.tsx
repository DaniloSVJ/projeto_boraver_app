import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation, } from '@react-navigation/native';

import IconSearch from 'react-native-vector-icons/FontAwesome';

import { Box, DateInput } from 'grommet';
import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
import Combobox from 'combobox-react-native'

import IconFavorite from 'react-native-vector-icons/Fontisto';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import DatePicker from 'react-native-datepicker';

import DateField from 'react-native-datefield';

import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import { TitleService, TextClient, SubTitle, TextSolicit, ViewLeftHerder, ViewIcons, ViewSearch, ViewBell, TextFooter, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, ViewIcone } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import iconDate from '../../../assets/iconDateInput.svg'
import IconComboBox from '../../../assets/iconComboBox.svg'
import api from '../../../service/api'
import { IconBase, icons } from 'react-icons/lib';

interface SearchFormData {

}
type Nav = {
    navigate: (value: string, { }) => void;
}

export function OfferDetail() {
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

        image: {
            width: 18,
            height: 20,
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
        }

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
                        <ViewIcone>
                            <FontAwesome name="angle-left" size={24} color="white" />
                        </ViewIcone>
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

                            </View>
                            <View>
                                <TitleService>Provador em loja fitness</TitleService>
                                
                            </View>
                            <View>

                            </View>
                        </TitleItem>
                    
                        <Ofert>
                            <TextDescription>69 Ofertas</TextDescription>
                        </Ofert>
                        <Description>
                            <TextDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  leia mais</TextDescription>
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

                </ScrollView>
            </Content>

        </Container>
    )

}
