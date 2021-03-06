
import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import { RectButton } from 'react-native-gesture-handler';
import { Noti } from '../Noti'
import NotificationBell from '../../../components/NotificationBell'
import { useAuth } from '../../../hooks/auth'
import {
    TitleService,
    ViewContentTitleItem,
    ViewBell,
    TextFooter,
    ViewTime,
    TitleItem,
    Image,
    ViewIcons,
    ViewSearch,
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
import { useNavigation, } from '@react-navigation/native';
import Img from '../../../assets/avatar_user.png'
import iconeFavorite from '../../../assets/marca-paginas.png'
import iconeFavoriteTrue from '../../../assets/marca-paginas-true.png'
import JobsVazio from '../../../assets/Alert.svg'
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../service/api'




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

export function Home() {
    const { user } = useAuth()
    const { navigate } = useNavigation<Nav>();

    const [bookmark, setBookmark] = useState(false)

    const [idCliente,setIdCliente]=useState(0)
    const [statusIn,setStatusIn]=useState(true)
    const [solic,setSoliction]=useState(true)
    const [qtdNote, setQtdNote] = useState(0)
    const [render, setrender] = useState(false)
    const [services, setService] = useState<solicitationI[]>([])
    const [idin, setIdin] = useState(0)
    
    useFocusEffect(
    useCallback(() => {
            setService([])
            async function load() {
                console.log(user.id)
                const IdInfluencers = await api.get(`/api/v3/influenciador/${user.id}/`)
                setIdin(IdInfluencers.data.results[0].id)
                console.log(IdInfluencers.data)
                if(IdInfluencers.data.count==0){
                    setSoliction(false)
                }
                setStatusIn(IdInfluencers.data.results[0].ativo)
                Alert.alert(IdInfluencers.data.results[0].ativo)
                console.log('>>>>>>>'+IdInfluencers.data.results[0].id)
                // setBookmark(response.data.results.favorite)
                const solicitacao = await api.get(`/api/v3/solicitacao_servico/${IdInfluencers.data.results[0].id}/`)
                console.log(IdInfluencers.data.id)
                console.log(solicitacao)    

                setService(solicitacao.data.results);
                
                
                console.log('id cliente ??'+solicitacao.data.results.cliente)
                const note = await api.get(`/api/v3/listanotificacao_influencer/${IdInfluencers.data.results[0].id}/`)

                setQtdNote(note.data.count)

            }
            load()
        }, [bookmark])
   );
    const styles = StyleSheet.create({
        favorite: {
            marginLeft: 5

        },
    })
    async function addfavorite(idS:number,sfav:boolean) {
        let alter = false
        if(sfav===false){
            alter=true
        }else if(sfav===true){
            alter=false
        }    
        //api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     
        await api.patch(`/api/v3/solicitacao/${idS}/`, {
            favorite: alter,
        }

        )
        await api.get(`/api/v3/solicitacao_servico/${idin}/`)
            .then((response) => {
                setService(response.data.results);
                console.log(services)
            }).catch(function (error) {
                console.error(error)
                setService([])
            });
        if (render == true) {
            setrender(false)
        } else { setrender(true) }

    }
  
    return (

        <Container>
{/*============== CABE??ALHO*/}            
            <Header>

                <View style={{marginTop:10}}>
                    <WelcomeText>
                        Ol??, {user.name}
                    </WelcomeText>
                    <HerderText2>
                       Confira os ??ltimos jobs adicionados
                    </HerderText2>
                </View>
                <ViewIcons style={{marginTop:10}}>
{/*============== Lupa Explorer*/}
                    <RectButton onPress={() => navigate("Search", {})}>
                        <ViewSearch>

                            <IconSearch name={'search'} size={22} color={'#fff'} />
                        </ViewSearch>
                    </RectButton>
{/*============== Sino Notifica????es*/}
                    <RectButton onPress={() => navigate("Notifications", {})}>
                        <ViewBell >                                
                             <NotificationBell qtd={qtdNote} /> 
                        </ViewBell>
                    </RectButton>
                </ViewIcons>
            </Header>

            <Content>
{/*============== CORPO DA MENSAGEM*/}                    
                <ScrollView style={{backgroundColor:"#ffffff"}}>
                

                    {solic===true && statusIn===true ? services.map((s, key) =>(
                       
                        <ItemList key={key}>    
                            <TitleItem>
                            <TouchableOpacity onPress={()=>navigate('OfferDetail',{idS:s.id,idCli:s.cliente})}>
                                <ViewContentTitleItem>
                                    <View>
                                        <Image widthprops={"35px"} heightprops={"35px"} source={Img} />
                                    </View>
                                    <View>
                                        <TitleService>{s.titulo}</TitleService>
                                        <SubtitleService>Or??amento R${String(s.menorvalor)} - R${String(s.maiorvalor)}</SubtitleService>
                                    </View>
                                </ViewContentTitleItem>
                            </TouchableOpacity>

                                <View style={styles.favorite}>
                                    {

                                        <RectButton
                                            onPress={() => { addfavorite(s.id, s.favorite)}}>
                                                     <Image  key={key} widthprops={"17px"} heightprops={"17px"} source={s.favorite== false?iconeFavorite:iconeFavoriteTrue} />
                                        </RectButton>

                                    }

                                </View>                               
                            </TitleItem>
                            {/* <Text>O id do cliente ?? '''{s.cliente}'</Text> */}
                            <TouchableOpacity onPress={()=>navigate('OfferDetail',{idS:s.id, idCli:s.cliente})}>        
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
                            </TouchableOpacity>
                        </ItemList>
                        
                    )) : 
                        <ViewVazio>

                            <View>
                                <Image  widthprops={'70px'} heightprops={'80px'} source={JobsVazio}  />
                                {/* <JobsVazio width={70} height={80}/> */}
                            </View>
                            <View>
                                <TextVazioTitle>
                                    Voc?? n??o tem nenhuma solicita????o de servi??o

                                </TextVazioTitle>
                                <TextVazioSubTitle>
                                    Verifique se voc?? seguiu a regra de ativa????o da conta. Ou sua conta ainda est?? em processo de ativa????o pela equipe do Boraver Influencer
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

