// @ts-nocheck
import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { FiPower } from 'react-icons/fi';
import IconFavorite from 'react-native-vector-icons/Fontisto';

import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewContentTitleItem,
    ViewBell,
    TextFooter,
    ViewTime,
    Image,
    TitleItem,
    Ofert,
    Footer,
    Destaque,
    TextDestaque,
    Description,
    TextDescription,
    SubtitleService,
    ItemList,
    Content,
    HerderText2,
    Container,
    Header,
    WelcomeText
} from './styles'
import { Fontisto } from '@expo/vector-icons';
import Img from '../../../assets/avatar_user.png'
import IconeFavorite from '../../../assets/icone_favorite.svg'

import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { array } from 'yup';
import api from '../../../service/api'
import { string } from 'yup/lib/locale';
import SolitationComponet from '../Home/SolitationComponet'
interface Authprops {
    id: number;
    name: string;
    email: string;
}
let solicitation = [{
    id: 0,
    cliente: 0,
    influencidor: 0,
    descricao_servico: "",
    valor: 0,
    status: '',
    pendente: true,
    link_media: '',
    favorite: false,
    maiorvalor: 0,
    menorvalor: 0,
    destaque: false,
    valorads: 0,
    estado: '',
    cidade: '',
    carater: '',
    criacao: '',
}]
interface RepositoriesForms {
    idIn: string;
}
interface solicitationI {
    id: number;
    cliente: number;
    influencidor: number;
    descricao_servico: string;
    valor: number;
    status: string;
    pendente: boolean;
    link_media: string;
    favorite: boolean;
    maiorvalor: number;
    menorvalor: number;
    destaque: boolean;
    valorads: number;
    estado: string;
    cidade: string;
    carater: string;
    criacao: string;
}
export function Home() {
    const { user } = useAuth()
    let idInfluencier = ([{
        id: 0,

    }])
    const [idIn, setIdIn] = useState(0)
    const [services, setService] = useState<solicitationI[]>([])
    useEffect(() => {
        api.get(`/api/v3/influenciador/${user.id}/`).then((response) => {
            setIdIn(response.data.id);
        });
        api.get(`/api/v3/solicitacao_servico/${12}/`)
            .then((response) => {
                setService(response.data);

            });
    }, [idIn, user.id])


    console.log("bbbbbbbbbbbbrrrrrrrrrr")
    console.log(services)
    console.log("bbbbbbbbbbbbrrrrrrrrrr")
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },

    })
    return (
        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Olá, {user.name}
                    </WelcomeText>
                    <HerderText2>
                        Confira os últimos jobs adicionados
                    </HerderText2>
                </View>
                <ViewBell>
                    <NotificationBell qtd={100} />
                </ViewBell>

            </Header>

            <Content>
                <ScrollView>
                    {Object.keys(services).map((s, key) => (
                        <ItemList key={key}>
                            <TitleItem>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image widthprops={"35px"} heightprops={"35px"} source={Img} />
                                    </View>
                                    <View>
                                        <TitleService>{'dfdfdfdf'}</TitleService>
                                        <SubtitleService>Orçamento R${String(s.menorvalor)} - R${String(s.maiorvalor)}</SubtitleService>
                                    </View>
                                </ViewContentTitleItem>

                                <View style={styles.favorite}>
                                    <Fontisto name="favorite" size={20} bordercolor={"black"} color="#fff" />

                                </View>
                            </TitleItem>
                            {s.destaque == true ? (
                                <Destaque>
                                    <TextDestaque>Destaque</TextDestaque>
                                </Destaque>)
                                : null
                            }

                            <Description>
                                <TextDescription>{s.descricao_servico}</TextDescription>
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
                    ))

                    }
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
