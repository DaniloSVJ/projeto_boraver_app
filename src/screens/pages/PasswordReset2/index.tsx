import React, { useRef, useCallback } from 'react'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { StyleSheet } from 'react-native'
import { Container, ViewButton,  Content, Brand, Title, Paragraph } from './styles.ts'
import { useNavigation, useRoute } from '@react-navigation/native';


import BrandImg from '../../../assets/boraver_admin_logo.png'
import Button from '../../../components/Button'

type Nav = {
   navigate: (value: string, { }) => void;
}

interface RouteParams {
   email: string;
   password: string;
   nome: string;
   celular: string;
   estado: string;
   cidade: string;
}
const styles = StyleSheet.create({

   scrollView: {


   },

});


export function PasswordReset2() {
   const { navigate } = useNavigation<Nav>()
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   const params = route.params as RouteParams;
   const backlogin = useCallback(
      async () => {
         navigate('SignIn', {});
      },
      [])

   function backsignup2() {
      navigate('SignUpStep2', {})
   }
   const styles = StyleSheet.create({

      Button: {

         backgroundColor: "#fff",
         color: "#fff",

      },
      View: {
         backgroundColor: "#3C2E54",
      },
      ViewForm: {
         marginBottom: "40px",
         color: "#000"
      }

   });

   return (
      <Container >

         <Content  >
            <Brand source={BrandImg} />

            <Title>Prontinho!</Title>
            <Paragraph>A redefinição da sua senha foi enviada por e-mail. Clique no link e siga as instruçõespara recuperar sua senha.</Paragraph>


            <Form ref={formRef} onSubmit={backlogin}>
               <ViewButton>
                  <Button background={"#fff"} color={"#000"} style={styles.Button} onPress={() => formRef.current?.submitForm()}>
                     Voltar
                  </Button>
               </ViewButton>
            </Form>
         </Content>

      </Container>
   )

}
