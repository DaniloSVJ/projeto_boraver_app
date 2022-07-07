import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { Picker } from '@react-native-picker/picker';

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
import { TitleService, InitilContent, ViewSubTitle, ViewBell, TextFooter, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, WelcomeText } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import iconDate from '../../../assets/iconDateInput.svg'
import IconComboBox from '../../../assets/iconComboBox.svg'
import api from '../../../service/api'
import { IconBase, icons } from 'react-icons/lib';

interface SearchFormData {

}

export function Search() {
    const { user } = useAuth()
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
    const MenuIcon = (props) => (
        <svg path='../../../assets/iconDateInput.svg' fill={props.fill} stroke={props.stroke}></svg>
    )
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
                <ViewBell>
                    <NotificationBell qtd={qtdNote} />
                </ViewBell>

            </Header>
            <InitilContent display={displayViewForm}>
                <Form ref={formRef} onSubmit={handleSearch}>
                    <Box style={styles.dateinput} fill align="center" justify="start" pad="large">
                        <Box width="100%" >
                            <DateInput style={styles.dateinput} format="dd/mm/yyyy" icon={<Image style={styles.image} source={iconDate} />} value={date} onChange={e => setDate(String(e.value))} />
                        </Box>
                    </Box>

                    <Picker
                        style={styles.select}
                        placeholder="Status do serviço"
                        selectedValue={selectedStatus}
                        itemStyle={styles.select}

                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedStatus(itemValue)

                        }>

                        <Picker.Item label="NOVA OFERTA" value="novaoferta" />
                        <Picker.Item label="Em Andamento" value="andamento" />
                        <Picker.Item label="Recusado" value="recusado" />
                    </Picker>

                    <Picker
                        style={styles.select}
                        placeholder="Status do serviço"
                        selectedValue={selectedRedeSocial}
                        itemStyle={styles.select}

                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedRedeSocial(itemValue)

                        }>

                        <Picker.Item label="Instagram" value="instagram" />
                        <Picker.Item label="Youtube" value="youtube" />
                        <Picker.Item label="Tiktok" value="tiktok" />
                    </Picker>



                </Form>
            </InitilContent>
            <Content display={displayView}>
                <ScrollView>
                    <ItemList>
                        <TitleItem>
                            <View>

                            </View>
                            <View>
                                <TitleService>Provador em loja fitness</TitleService>
                                <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                            </View>
                        </TitleItem>
                        <Destaque>
                            <TextDestaque>Destaque</TextDestaque>
                        </Destaque>
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
                    <ItemList>
                        <TitleItem>
                            <TitleService>Provador em loja fitness</TitleService>
                            <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                        </TitleItem>
                        <Destaque>
                            <TextDestaque>Destaque</TextDestaque>
                        </Destaque>
                        <Ofert>
                            <TextDescription>69 Ofertas</TextDescription>
                        </Ofert>
                        <Description>
                            <TextDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  leia mais</TextDescription>
                        </Description>
                    </ItemList>
                    <ItemList>
                        <TitleItem>
                            <TitleService>Provador em loja fitness</TitleService>
                            <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                        </TitleItem>
                        <Destaque>
                            <TextDestaque>Destaque</TextDestaque>
                        </Destaque>
                        <Ofert>
                            <TextDescription>69 Ofertas</TextDescription>
                        </Ofert>
                        <Description>
                            <TextDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  leia mais</TextDescription>
                        </Description>
                    </ItemList>
                </ScrollView>
            </Content>

        </Container>
    )

}
