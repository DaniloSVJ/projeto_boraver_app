import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import IconSearch from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'; 

import CalendarPicker from 'react-native-calendar-picker';

import { Box, DateInput } from 'grommet';
import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
import Combobox from 'combobox-react-native'

import IconFavorite from 'react-native-vector-icons/Fontisto';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import DateField from 'react-native-datefield';
import { RectButton } from 'react-native-gesture-handler';
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import { Icon, ViewIcons, ViewSearch, ContainerInput, SubTitle, TextSolicit, ViewSubTitle, ViewBell, TextFooter, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, WelcomeText } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import iconDate from '../../../assets/iconDateInput.svg'
import IconComboBox from '../../../assets/iconComboBox.svg'
import api from '../../../service/api'
import { IconBase, icons } from 'react-icons/lib';
import { useNavigation, } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

interface IState {
    visible: boolean;
    dateStr?: string;
    date?: Date;
}
type Nav = {
    navigate: (value: string, { }) => void;
}


export function Search() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const inputElementRef = useRef<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    function openCalendar() {
        setIsVisible(true);
    }
    function closeCalendar() {
        setIsVisible(false);
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

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
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Nova Ofereta', value: 'novaoferta' },
        { label: 'Em Andamento', value: 'andamento' },
        { label: 'Recusado', value: 'recusado' }
    ]);
    const [titleHeader, setTitleHeader] = useState("Buscar")
    const [displayView, setDisplayView] = useState('none')
    const [displayViewForm, setDisplayViewForm] = useState('flex')


    const styles = StyleSheet.create({

        image: {
            width: 18,
            height: 20,
            color: "#fff",

        },
        datePicker: {
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: 320,
            height: 260,
            display: 'flex',
        },
        dateinput: {
            width: 100,
            marginLeft: 53,
            marginRight: 53,
        },
        select: {
            width: "100%",

            marginTop: 1500,
            marginLeft: 490,
            marginRight: 100,
            color: "#3C2E54",
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: "rgb(191,191,191)",
            borderRadius: 5,
            padding: 200,
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

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };


    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedRedeSocial, setSelectedRedeSocial] = useState();


    const datatttt = ['data1', 'data2', 'data3']

    function testedddd() {

    }

    const [datePicker, setDatePicker] = useState(false);


    const [timePicker, setTimePicker] = useState(false);
    const [show, setShow] = useState(false);
    const onChange = () => {
        const currentDate = 'selectedDate';
        setShow(false);
        // setDate(currentDate);
    };
    const [time, setTime] = useState(new Date(Date.now()));
    const [valueInput, setValueInput] = useState('')
    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    function seta(){
        return(
            <Entypo name="chevron-small-down" size={24} color="black" />
        )
    }
    return (
        <Container>
            <Header>
                <View>
                    <WelcomeText>
                        {titleHeader}
                    </WelcomeText>
                    <ViewSubTitle display={displayView}>
                        <View>
                            <Image source={Filter} />
                        </View>
                        <View>
                            <HerderText2>
                                Veja os filtros aplicados
                            </HerderText2>
                        </View>
                    </ViewSubTitle>
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
                    <TouchableOpacity onPress={openCalendar}>

                        <ContainerInput>
                            <TextInput
                                value={valueInput}
                                keyboardAppearance="dark"
                                placeholderTextColor="#000"
                            />
                            <Icon source={iconDate} />
                        </ContainerInput>
                    </TouchableOpacity>

                    {isVisible && (
                        <CalendarPicker
                            date={selectedDate}
                            placeholder="Data de Solicitação"
                            onDateChange={(date: Date) => {
                                setSelectedDate(date)
                                setValueInput(String(date))
                                setIsVisible(false)
                            }}
                        />
                    )
                    }
                    <View style={{marginLeft:65, marginRight:65}}>
                    <SelectDropdown
                        defaultButtonText=' '
                        dropdownIconPosition={'right'}
                        selectedRowStyle={styles.select}
                        buttonTextStyle={styles.select}
                        statusBarTranslucent={false}
                        renderDropdownIcon={seta}
                        //renderDropdownIcon={<Entypo name="chevron-small-down" size={24} color="black" />}
                        disabled={false}
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

</View>
                </ScrollView>
            </Content>

        </Container>
    )

}
