import React, { useRef, useCallback } from 'react'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { FlatList, SafeAreaView, Alert, StyleSheet } from 'react-native'
import { Container, ContainerBody, Viewstep, View, ViewArrow, ViewButton, DivViewTop, Content, Brand, TextStep, TermText, Title, Paragraph } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button'

import api from '../../../service/api'
import Term from './Term'

type Nav = {
   navigate: (value: string, { }) => void;
}

interface RouteParams {
   email: string,
   password: string,
   nome: string,
   whatsapp: string,
   genero: string,
   foto: string,
   cpf: string,
   cnpj:string,

   instagram: string,
   qtd_instagram: string,
   youtube: string,
   qtd_youtube: string,
   tiktok:string,
   qtd_tiktok:string,

   estados:string,
   cidades:string
}



export function SignUpStep3() {
   const { navigate } = useNavigation<Nav>()
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();

   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async () => {
         formRef.current?.setErrors({});
         console.log(params.email)
         console.log(params.password)
         console.log(params.nome)
         console.log(params.whatsapp)
         console.log(params.genero)
         console.log(params.foto)
         console.log(params.cpf)
         console.log(params.cnpj)
         
         console.log(params.instagram)
         console.log(params.qtd_instagram)
         console.log(params.youtube)
         console.log(params.qtd_youtube)
         console.log(params.tiktok)
         console.log(params.qtd_tiktok)

         console.log(params.estados)
         console.log(params.cidades)
       
         if (params.nome == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.whatsapp == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.cidades == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.estados == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.email == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.password == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else {

            await api.post('/api/v1/influencers/', {
            
              profile_picture: params.foto,
              nome: params.nome,
              nomecompleto: '',
              celular: '',

              cpf: params.cpf,
              cnpj: params.cnpj,

              whatsapp: params.whatsapp,
              telegram: '',
              tel_fixo: '',
              sexo: params.genero,
              nascimento:  '',
              email: params.email,
        
              password: params.password,
              estado: params.estados,
              cidade: params.cidades,
              instagram: params.instagram,
              qtd_intagram: params.qtd_instagram,
              youtube:  params.youtube,
              qtd_youtube: params.qtd_youtube,
              tiktok: params.tiktok,
              qtd_tiktok: params.qtd_tiktok,
              agencia_banco: '',
              conta_banco: '',
              saldo: 0,
              ativo: false


            }).then(function (response) {
               navigate("SignUpStep4", {})
            }).catch(function (error) {
               
               if (error.response.status == 400) {
                  console.error(error.response.data.details)
                  Alert.alert('Erro ao cadastrar, verifique seus dados e tente novamente. Se o problema persistir contate o suporte técnico')
               } else if (error.response.status == 500) {
                  console.log('>>>'+error.response.data.details+'<<<<<')
                  Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
               } else {
                  console.error(error.response.data.details)
                  Alert.alert('Problema desconhecido. Por favor, contate o suporte')
               }
            })
         }
      },
      [])

   function backsignup2() {
      navigate('SignUpStep2', {})
   }
   const styles = StyleSheet.create({

      scrollView: {


      },

   });

   return (
      <Container >

         <DivViewTop>
            <TextStep>
               Etapa 3 de 3
            </TextStep>
            <Viewstep>
               <View >
                  <Icon name="circle-o" size={7} color="#DF8747" />
               </View>
               <View  >
                  <Icon name="circle-o" size={7} color="#DF8747" />
               </View>
               <View  >
                  <Icon name="circle" size={7} color="#DF8747" />
               </View>
            </Viewstep>
            <ViewArrow>
               <Icon2 name="chevron-back" size={14} color="#fff" onPress={backsignup2} />
            </ViewArrow>


         </DivViewTop>

         <ContainerBody>

            <Content>
               <SafeAreaView>


                  <Form ref={formRef} onSubmit={handleSignUpStep3}>

                     <TermText>Termos de uso</TermText>
                     <Paragraph>{Term.Paragraph_0}</Paragraph>
                     <Title>{Term.Title_1}</Title>
                     <Paragraph>{Term.Paragraph_1}</Paragraph>
                     <Title>{Term.Title_2}</Title>
                     <Paragraph>{Term.Paragraph_2}</Paragraph>
                     <Title>{Term.Title_3}</Title>
                     <Paragraph>{Term.Paragraph_3}</Paragraph>
                     <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                        Aceitar e criar conta
                     </Button>
                     <TermText></TermText>
                     <TermText></TermText>
                     <TermText></TermText>
                  </Form>

               </SafeAreaView>
            </Content>


         </ContainerBody>

      </Container>
   )

}



