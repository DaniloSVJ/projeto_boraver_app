
import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, } from '@react-navigation/native';


import { FiPower } from 'react-icons/fi';
import IconFavorite from 'react-native-vector-icons/Fontisto';
import { RectButton } from 'react-native-gesture-handler';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import NotificationBell from '../../../components/NotificationBell'
import { AuthProvider, useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewContentTitleItem,
    ViewIcons,
    ViewSearch,
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
    id: number,
    cliente: number,
    influencidor:number,
    titulo:string,
    descricao_servico:string,
    valor:number,
    status:string,
    pendente :string,
    link_media:string,
    favorite :boolean,
    maiorvalor:number,
    menorvalor:number,
    destaque :boolean,
    valorads :number,
    estado :string,
    cidade :string,
    carater :string,
    criacao :string,
}
type Nav = {
    navigate: (value: string, { }) => void;
}
const Favorite: React.FC = () => {
    const { user, signIn } = useAuth()
    let idInfluencier = ([{
        id: 0,
    }])
    const { navigate } = useNavigation<Nav>();
    const [render, setrender] = useState(false)
    const token = localStorage.getItem('@BoraVer:token')
    const [qtdNote, setQtdNote] = useState(0)
    const [bookmark, setBookmark] = useState(false)
    const [loadingrenderteste, setLoadingRender] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])
    const [idin, setIdin] = useState(0)
    useFocusEffect(
        useCallback(() => {
            async function load() {
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                await setIdin(IdInfluencers.data.id)
                const solicitacao = await api.get(`/api/v3/solicitacao_servico_fa/${IdInfluencers.data.id}/`)
                console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddd')

                console.log(solicitacao)
                console.log('pppppppppppppppppppppppppp')

                setService([solicitacao.data]);
        
                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.id}/`)

                setQtdNote(note.data.count)

            }
            load()
        }, [user])
    )
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5
        },
    })
    async function addfavorite(idS: number, sfav: boolean) {
        let alter = false
        if (sfav === false) {
            alter = true
        } else if (sfav === true) {
            alter = false
        }
        //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await api.patch(`/api/v3/solicitacao/${idS}/`, {
            favorite: alter,
        }

        )
        await api.get(`/api/v3/solicitacao_servico_fa/${idin}/`)
            .then((response) => {
                setService(response.data.results);
               
            }).catch(function (error) {
                console.error(error)
                setService([])
            });
        if (render == true) {
            setrender(false)
        } else { setrender(true) }

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

            <Content>
                <ScrollView >
                {services.length >0 ? services.map((s, key) =>(
                       
                       <ItemList key={key}>    
                           <TitleItem>
                               <ViewContentTitleItem>
                                   <View>
                                       <Image widthprops={"35px"} heightprops={"35px"} source={Img} />
                                   </View>
                                   <View>
                                       <TitleService>{s.titulo}</TitleService>
                                       <SubtitleService>Orçamento R${String(s.menorvalor)} - R${String(s.maiorvalor)}</SubtitleService>
                                   </View>
                               </ViewContentTitleItem>


                               <View style={styles.favorite}>
                                   {

                                       <RectButton
                                           onPress={() => { addfavorite(s.id, s.favorite)}}>
                                                    <Image  key={key} widthprops={"17px"} heightprops={"17px"} source={s.favorite== false?iconeFavorite:iconeFavoriteTrue} />
                                       </RectButton>

                                   }

                               </View>                               
                           </TitleItem>


                           <Description>
                               <TextDescription>{s.descricao_servico}</TextDescription>
                           </Description>
                           <Footer>
                               <View style={{ marginTop:3}}>
                                   <TextFooter>Treinamento</TextFooter>
                               </View>
                               <ViewTime>
                                   <Destaque background={s.status}>
                                       <TextDestaque>{s.status}</TextDestaque>
                                   </Destaque>
                               </ViewTime>
                           </Footer>
                       </ItemList>
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