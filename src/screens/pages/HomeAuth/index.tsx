import React, { useRef, useCallback } from 'react'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { StyleSheet,View } from 'react-native'
import { Container, ViewButton,  Content, Brand, Title, Paragraph } from './styles'
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


export function HomeAuth() {
   const { navigate } = useNavigation<Nav>()
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async () => {
         navigate('SignIn', {});
      },
      [])

   function route_direct(route:string) {
      navigate(route, {})
   }
   const styles = StyleSheet.create({

      Button: {
         borderColor: "#fff",
         borderStyle:"solid",
         borderWidth: 1

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
            <View>
            <Title>Várias empresas procuram por você</Title>
            <Paragraph>Acesse sua conta e escolha com quais marcas você quer trabalhar.</Paragraph>
            </View>

            <Form ref={formRef} onSubmit={handleSignUpStep3}>
               <ViewButton>
                  <Button background={"#fff"} color={"#000"}  onPress={() => route_direct("SignUp")}>
                   Criar conta
                  </Button>
                  <Button background={"#3C2E54"} color={"#fff"} style={styles.Button} onPress={() => route_direct("SignIn")}>
                   Entrar
                  </Button>
               </ViewButton>
            </Form>
         </Content>

      </Container>
   )

}
