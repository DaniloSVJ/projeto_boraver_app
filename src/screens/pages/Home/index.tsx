
import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { FiPower } from 'react-icons/fi';
import IconFavorite from 'react-native-vector-icons/Fontisto';
import { RectButton } from 'react-native-gesture-handler';

import NotificationBell from '../../../components/NotificationBell'
import { AuthProvider, useAuth } from '../../../hooks/auth'
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

import iconeFavorite from '../../../assets/marca-paginas.png'
import iconeFavoriteTrue from '../../../assets/marca-paginas-true.png'
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
    const { user, signIn } = useAuth()

    let idInfluencier = ([{
        id: 0,
    }])
    

    const [bookmark, setBookmark] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])

    useEffect(() => {
        async function load() {
            const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)

            await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.id}/`,{

            }).then((response) => {
                    setService([response.data]);

                });
               
        }
        load()
    }, [])

    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },
    })
    async function addfavorite(id: number) {
        const token = localStorage.getItem('@BoraVer:token')
        console.log(token)
        await api.put(`/api/v3/solicitacao/${id}/`, {
            headers: {Authorization: `Basic ${token}`},
            
            
            favorite: bookmark,
        },
        
        )
    }
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
                    {services.map((s, key) => (
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
                                    {
                                        s.favorite == false
                                            ?
                                            <RectButton
                                                onPress={() => {
                                                    async function addf() {
                                                        await setBookmark(true)
                                                    }
                                                    addf()
                                                    addfavorite(s.id)
                                                }
                                                }>
                                                <Image widthprops={"17px"} heightprops={"17px"} source={iconeFavorite} />
                                            </RectButton>
                                            :
                                            <RectButton
                                                onPress={() => {
                                                    async function removef() {
                                                        await setBookmark(false)
                                                    }
                                                    removef()
                                                    addfavorite(1)
                                                }
                                                }>
                                                <Image widthprops={"17px"} heightprops={"17px"} source={iconeFavoriteTrue} />
                                            </RectButton>
                                    }

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
