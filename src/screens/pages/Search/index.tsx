import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import IconSearch from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/Button';
import Select from '../../../components/Select'
import { compareAsc, endOfYesterday, format, parseISO } from 'date-fns'
import Moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

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
import { Icon, ViewIcons, ViewSearch, ContainerInput, ViewLeftHerder, ViewIcone, ViewSubTitle, ViewBell, HerderText, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, WelcomeText } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import IconDate from '../../../assets/iconDateInput.svg'
import IconComboBox from '../../../assets/iconComboBox.svg'
import api from '../../../service/api'
import { IconBase, icons } from 'react-icons/lib';
import { useNavigation, } from '@react-navigation/native';

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

    const [qtdNote, setQtdNote] = useState(0)
    const [opt, setOpt] = useState([{}])
    const [titleHeader, setTitleHeader] = useState("Filtrar Solicitações")
    const [displayView, setDisplayView] = useState('none')
    const [statusIn,setStatusIn]=useState(false)
    const [idin, setIdin] = useState(0)
    const [dateFormatStr,setDateFormatStr]=useState('')
    const handlerFilter =()=>{
        async function filter() {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                setIdin(IdInfluencers.data.id)  
                let status = ''  
                if(selectedStatus=="Em Andamento"){
                    status= 'andamento'
                }
                else if(selectedStatus=="Nova Oferta"){
                    status= 'novaoferta'
                }
                else if(selectedStatus=="Recusado"){
                    status= 'recusado'
                }
                else if(selectedStatus=="Concluído"){
                    status= 'concluido'
                }

                console.log(dateFormatStr+' '+selectedStatus+' '+selectedRedeSociais)
                if(valueInput=="" && selectedStatus=="" && selectedRedeSociais==""){
                    Alert.alert('Selecione um Filtro')
                    console.log('Selecione um Filtro')
                }else{
                    const filter = await api.get(`/api/v3/solicitacaofilter/${IdInfluencers.data.id}/`,
                      { 
                        params: {
                            'dt': dateFormatStr==''?"":dateFormatStr,
                            'status': status==''?"":status,
                            'valores':selectedRedeSociais,
                        }
                      }
                    )
                    console.log(filter)
                }
                

                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)
                setQtdNote(note.data.count)
               
            }
            load()
       
        }
        filter()

    }


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


        }, [])
    )

    const optStatus = ['Nova Oferta', 'Em Andamento', 'Recusado']
    const optRedesSociais = [
        '50---500',
        '500---2000',
        '2000---5000',
        '5000---10000',
        '10000---30000',
        '30000---100000',
        '100000---500000',
        'acima de 500000',
   ]
    const [filter, setFilter] = useState(false)
    const [valueInput, setValueInput] = useState('')

    const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
    const estoptios = ['Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal']
   
    return (
        <Container>
            <Header>
                <View>
                <View>

                    <ViewLeftHerder >
                        <RectButton onPress={() => navigate("Home", {})}>
                            <ViewIcone>
                                <FontAwesome name="angle-left" size={24} color="white" />
                            </ViewIcone>
                        </RectButton>
                        <View>
                            <HerderText>
                             {titleHeader}
                            </HerderText>
                        </View>
                    </ViewLeftHerder>
                    </View>
                    <WelcomeText>
                        
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
                            <IconDate />
                        </ContainerInput>
                    </TouchableOpacity>

                    {isVisible && (
                        <CalendarPicker
                            date={selectedDate}
                            placeholder="Data de Solicitação"
                            onDateChange={(date: Date) => {

                                const firstDate = parseISO(String(date));
                                let dt = Moment(date).format('DD/MM/YYYY')
                                
                                console.log(String(date)+'>>>>')
                                setSelectedDate(date)
                                setValueInput(String(dt))
                                setDateFormatStr(String(dt))
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



                    <View style={{ marginTop: '20%',marginBottom:'10%', marginLeft: 54, marginRight: 54 }}>
                        <Button
                            color={"#FFF"}
                            background={"#3C2E54"}
                            bordercolor={"#3C2E54"}
                            onPress={handlerFilter}
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
