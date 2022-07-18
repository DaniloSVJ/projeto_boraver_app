import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import IconSearch from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/Button';
import Select from '../../../components/Select'
import { compareAsc, endOfYesterday, format, parseISO } from 'date-fns'
import Moment from 'moment';

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
import axios from 'axios'
interface IState {
    visible: boolean;
    dateStr?: string;
    date?: Date;
}
type Nav = {
    navigate: (value: string, { }) => void;
}



export function Search() {


    
    const [cities, setCities] = useState('');
    const [listUFs, setListUFs] = useState([]);
    const [listCities, setListCities] = useState([]);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const inputElementRef = useRef<any>(null);
    const [isVisible, setIsVisible] = useState(false);
   
    function openCalendar() {
        setIsVisible(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };


    const [selectedStatus, setSelectedStatus] = React.useState("");
    const [selectedRedeSociais, setSelectedRedeSociais] = React.useState("");


    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();

    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const [qtdNote, setQtdNote] = useState(0)
    const [opt, setOpt] = useState([{}])
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

    const optStatus = ['Nova Oferta', 'Em Andamento', 'Recusado']
    const optRedesSociais = ['Instagram', 'Youtube', 'Tiktok']
    const [filter, setFilter] = useState(false)
    const [valueInput, setValueInput] = useState('')

    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
    const estoptios = ['Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal']
   
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

                            <IconSearch name={'search'} size={22} color={'#5E448A'} />
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

                                const firstDate = parseISO(String(date));
                                let dt = Moment(date).format('DD/MM/YYYY')

                                setSelectedDate(date)
                                setValueInput(String(dt))
                                setIsVisible(false)
                            }}
                        />
                    )
                    }
                    <Select
                        options={optStatus}
                        onChangeSelect={setSelectedStatus}
                        marginR={54}
                        marginL={58}
                    />
                    <Select
                        options={optRedesSociais}
                        onChangeSelect={setSelectedRedeSociais}
                        marginR={54}
                        marginL={58}
                    />
                           
                    

                    <TouchableOpacity
                        style={{ marginLeft: 54 }}
                        onPress={() => ''}>
                        <Text>Filtrar por ordem alfabética</Text>
                    </TouchableOpacity>



                    <View style={{ marginTop: '20vh',marginBottom:'10vh', marginLeft: 54, marginRight: 54 }}>
                        <Button
                            color={"#FFF"}
                            background={"#3C2E54"}
                            bordercolor={"#3C2E54"}
                        >
                            Fltrar
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

                </ScrollView>
            </Content>

        </Container>
    )

}
