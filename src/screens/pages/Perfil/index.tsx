import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, TextInput } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useFocusEffect } from '@react-navigation/native';
import avatar_user from '../../../assets/avatar_user.png'
import { FormHandles } from "@unform/core"
import { Form } from '@unform/mobile'
import CheckBox from '@react-native-community/checkbox';
import IconFavorite from 'react-native-vector-icons/Fontisto';


import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import { TitleService, ViewImagePerfil,ViewSaldo, ImagePerfil, ViewConteinerData, InitilContent, ViewSubTitle, ViewBell, TextFooter, ViewTime, Image, TitleItem, Ofert, Footer, Destaque, TextDestaque, Description, TextDescription, SubtitleService, ItemList, Content, HerderText2, Container, Header, WelcomeText } from './styles'
import Filter from '../../../assets/controler.png'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../components/InputGeral'
import api from '../../../service/api'
interface SearchFormData {

}

export function Perfil() {
    const { user } = useAuth()
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [titleHeader, setTitleHeader] = useState("Buscar")
    const [displayView, setDisplayView] = useState('flex')
    const [displayViewForm, setDisplayViewForm] = useState('flex')
    useEffect(() => { }, [])
    const handleSearch = useCallback(
        async (data: SearchFormData) => {
            try {


            } catch (err) {

            }
        },
        [],
    );
    useFocusEffect(
        useCallback(() => {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                // setIdin(IdInfluencers.data.id)
                // api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`, {

                // }).then((response) => {
                //     setService([response.data]);
                //     setBookmark(response.data.favorite)
                // }).catch(function (error) {
                //     setService([])
                // });

            }
            load()
        }, [user]),
    )
    function teste() {
        console.log("realizou o teste")
    }
    return (
        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Seu Saldo:
                    </WelcomeText>
                    <View>
                    </View>
                    <HerderText2>
                         0,00
                   </HerderText2>
                </View>
                <ViewBell>
                    <NotificationBell qtd={100} />
                </ViewBell>

            </Header>
            {/* <InitilContent display={displayViewForm}>
                
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
            </InitilContent> */}
            <Content display={displayView}>
                <ScrollView>
                    <ViewConteinerData>
                        <ViewImagePerfil>
                            <View>
                                <ImagePerfil source={avatar_user} />
                            </View>
                           
                        </ViewImagePerfil>
                        <Text>Gilherme Sampaio</Text>
                        <Text>Gilherme Sampaio</Text>
                    </ViewConteinerData>
                </ScrollView>
            </Content>

        </Container>
    )

}
