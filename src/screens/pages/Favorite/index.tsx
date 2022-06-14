
import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

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
    WelcomeText,
    ViewVazio,
    ImagemVazio,
    TextVazioTitle,
    TextVazioSubTitle,

} from './styles'
import { Fontisto } from '@expo/vector-icons';
import Img from '../../../assets/avatar_user.png'

import iconeFavorite from '../../../assets/marca-paginas.png'
import iconeFavoriteTrue from '../../../assets/marca-paginas-true.png'
import pastaVazia from '../../../assets/1-mobile-favoritos2.png'
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { array } from 'yup';
import api from '../../../service/api'
import { string } from 'yup/lib/locale';
import ListFavorite from './ListFavorite'
interface Authprops {
    id: number;
    name: string;
    email: string;
}

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
type addPut = {
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
const Favorite: React.FC = () => {
    const { user, signIn } = useAuth()
    let idInfluencier = ([{
        id: 0,
    }])
    const token = localStorage.getItem('@BoraVer:token')
    //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const [bookmark, setBookmark] = useState(false)
    const [loadingrenderteste, setLoadingRender] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])
    const [idin, setIdin] = useState(0)
    useFocusEffect(
        useCallback(() => {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                await setIdin(IdInfluencers.data.id)

                await api.get(`/api/v3/solicitacao_servico_fa/${IdInfluencers.data.id}/`, {

                }).then((response) => {
                    setService([response.data]);
                    setBookmark(response.data.favorite)
                }).catch(function (error) {
                    console.error(error)
                    if (error.status == 404) {
                        setService([])
                    }
                });

            }
            load()
        }, [user])
    )
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },
    })
    async function addfavorite(data: addPut, favorite: boolean) {

        console.log('veio aqui como ' + favorite)

        //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await api.put(`/api/v3/solicitacao/${data.id}/`, {
            id: data.id,
            cliente: data.cliente,
            influencidor: data.influencidor,
            descricao_servico: data.descricao_servico,
            valor: data.cliente,
            status: data.status,
            pendente: data.pendente,
            link_media: data.link_media,
            favorite: favorite,
            maiorvalor: data.maiorvalor,
            menorvalor: data.menorvalor,
            destaque: data.destaque,
            valorads: data.valorads,
            estado: data.estado,
            cidade: data.cidade,
            carater: data.carater,
            criacao: data.criacao

        }

        )
        await api.get(`/api/v3/solicitacao_servico_fa/${idin}/`,)
            .then((response) => {
                setService([response.data]);

            })
            .catch(function (error) {
                setService([])
            })


    }
    function renderizar() {
        if (loadingrenderteste == true) {
            setLoadingRender(false)
        } else {
            setLoadingRender(true)
        }
    }
    return (
        <Container>
            <Header>

                <View>
                    <WelcomeText>
                        Salvos
                    </WelcomeText>

                </View>
                <ViewBell>
                    <NotificationBell qtd={100} />
                </ViewBell>

            </Header>

            <Content>
                <ScrollView >
                    {
                        services.length > 0 ? services.map((s, key) => (
                            (

                                <ItemList key={s.id}>
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

                                                <RectButton
                                                    onPress={() => {
                                                        async function alterar() {
                                                            async function addf() {
                                                                if (bookmark == false) {
                                                                    await setBookmark(true)
                                                                    await console.log('pra ser true: ' + bookmark)
                                                                    addfavorite(s, true)
                                                                } else {
                                                                    await setBookmark(false)
                                                                    await console.log('pra ser false: ' + bookmark)
                                                                    addfavorite(s, false)
                                                                }

                                                            }
                                                            await addf()
                                                            console.log('e agora é : ' + bookmark)

                                                        }
                                                        alterar()
                                                    }
                                                    }>

                                                    {[

                                                        bookmark == false
                                                            ? <Image key={s.id} widthprops={"17px"} heightprops={"17px"} source={iconeFavorite} />
                                                            : <Image key={s.id} widthprops={"17px"} heightprops={"17px"} source={iconeFavoriteTrue} />

                                                    ]}

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
                                </ItemList>)
                        )) :
                            <ViewVazio>
                                <View>
                                    <ImagemVazio source={pastaVazia} />
                                </View>
                                <View>
                                    <TextVazioTitle>
                                        Ainda não há items salvos
                                    </TextVazioTitle>
                                    <TextVazioSubTitle>
                                        Explore e conquiste novos jobs. Ao tocar na etiqueta, você salva seus jobs favoritos aqui.
                                    </TextVazioSubTitle>
                                </View>
                            </ViewVazio>


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

export default Favorite