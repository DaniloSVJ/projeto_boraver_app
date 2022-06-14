import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
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
    ViewTime,
    Image,
    Content,
    HerderText2,
    Container,
    Header,
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
            marginTop: 11,

        },
        EyeSlash: {
            marginLeft: 12,
            marginTop: 8,
        }
    })
    return (
        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Seu Saldo:
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

                        <View>
                            <Label>Nome Completo</Label>
                            <Text>Gilherme Sampaio</Text>
                        </View>
                    </ViewConteinerData>
                </ScrollView>
            </Content>

        </Container>
    )

}
