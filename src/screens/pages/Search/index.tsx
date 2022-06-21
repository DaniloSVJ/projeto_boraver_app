import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
import CheckBox from '@react-native-community/checkbox';
import IconFavorite from 'react-native-vector-icons/Fontisto';
import { useFocusEffect } from '@react-navigation/native';


import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import { TitleService, InitilContent, ViewSubTitle, ViewBell, TextFooter, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, WelcomeText } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import api from '../../../service/api'
interface SearchFormData {

}

export function Search() {
    const { user } = useAuth()

    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const [qtdNote, setQtdNote] = useState(0)

    const [titleHeader, setTitleHeader] = useState("Buscar")
    const [displayView, setDisplayView] = useState('none')
    const [displayViewForm, setDisplayViewForm] = useState('flex')
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

                    <Input
                        ref={emailInputRef}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        onSubmitEditing={teste}
                        placeholder="Digite o menor orçamento e aperte o ENTER"
                        returnKeyType="next"
                    />

                    <Input
                        ref={emailInputRef}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        placeholder="E-mail"
                        returnKeyType="next"
                    />

                    <Input
                        ref={emailInputRef}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        placeholder="E-mail"
                        returnKeyType="next"
                    />

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
