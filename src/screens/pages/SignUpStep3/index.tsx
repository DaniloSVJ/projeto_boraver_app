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
   email: string;
   password: string;
   nome: string;
   sobrenome: string;
   celular: string;
   estado: string;
   cidade: string;
}



export function SignUpStep3() {
   const { navigate } = useNavigation<Nav>()
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();

   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async () => {
         formRef.current?.setErrors({});

         if (params.nome == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.celular == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.cidade == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.estado == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.email == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.password == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else {

            console.log(params.email)
            console.log(params.password)
            console.log(params.nome)
            console.log(params.celular)
               console.log(params.cidade)
                  console.log(params.estado)
            await api.post('/api/v1/influencers/', {
               nome: params.nome,
               sobrenome : params.sobrenome,
               celular: params.celular,
               cpf_cnpj: "",
               whatsapp :params.celular,
               telegram : params.celular,
               tel_fixo : "",
               nascimento :"",
               sexo: "",
               email: params.email,
               password: params.password,
               
               estado: params.estado,
               cidade:params.cidade,
           
              
               instagram: "",   
               qtd_intagram: "", 
               youtube:  "",  
               qtd_youtube: "", 
               tiktok:  "",  
               qtd_tiktok: "", 
              
               agencia_banco :"",
               saldo:0,
               conta_banco :"",
               ativo: false
							

            }).then(function (response) {
               navigate("SignUpStep4", {})
            }).catch(function (error) {
               console.error(error)
               if (error.response.status == 400) {
                  Alert.alert('Erro ao cadastrar, verifique seus dados e tente novamente. Se o problema persistir contate o suporte técnico')
               } else if (error.response.status == 500) {
                  Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
               } else {
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
