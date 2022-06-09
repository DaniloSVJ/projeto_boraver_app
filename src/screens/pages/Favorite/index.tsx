import React from 'react'
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
export function Favorite() {

    const styles = StyleSheet.create(   {
       favorite:{
        marginLeft: 5
       },
            
    })
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
                <ScrollView>
                    <ItemList>
                        <TitleItem>
                            <ViewContentTitleItem>
                                <View>
                                    <Image widthprops={"35px"} heightprops={"35px"}  source={Img} />
                                </View>
                                <View>
                                    <TitleService>Provador em loja fitness</TitleService>
                                    <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                                </View>
                            </ViewContentTitleItem>

                            <View style={styles.favorite}>
                                <Fontisto name="favorite" size={20} bordercolor={"black"} color="#000" />
                                
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
                            <ViewContentTitleItem>
                                <View>
                                    <Image widthprops={"35px"} heightprops={"35px"}  source={Img} />
                                </View>
                                <View>
                                    <TitleService>Provador em loja fitness</TitleService>
                                    <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                                </View>
                            </ViewContentTitleItem>

                            <View style={styles.favorite}>
                                <Fontisto name="favorite" size={20} bordercolor={"black"} color="#black" />
                                
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
                            <ViewContentTitleItem>
                                <View>
                                    <Image widthprops={"35px"} heightprops={"35px"}  source={Img} />
                                </View>
                                <View>
                                    <TitleService>Provador em loja fitness</TitleService>
                                    <SubtitleService>Orçamento R$50 - R$150</SubtitleService>
                                </View>
                            </ViewContentTitleItem>

                            <View style={styles.favorite}>
                                <Fontisto name="favorite" size={20} bordercolor={"black"} color="#000" />
                                
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
