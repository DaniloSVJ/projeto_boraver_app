import React, { useRef, useCallback } from 'react'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import { Container, ViewButton,  Content, Brand, Title, Paragraph } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import IClose from 'react-native-vector-icons/Ionicons';


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



export function Contact2() {
   const { navigate } = useNavigation<Nav>()
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async () => {
         navigate('SignIn', {});
      },
      [])

   function back() {
      navigate('SignUpStep2', {})
   }
   const styles = StyleSheet.create({
      close: {
         width:17,
         height:17,
         marginTop:42,
         marginLeft:32
       },
   });

   return (
      <Container >   
            <RectButton style={styles.close} onPress={()=>navigate("Contact",{})}>
               <IClose  name="close"   size={14} color="#fff" />
            </RectButton>
         <Content  >
            <Brand source={BrandImg} />

            <Title>Mensagem enviada</Title>
            <Paragraph>Agradecemos a sua participação.Estamos sempre trabalhando para melhorar sua experiência.</Paragraph>


         </Content>

      </Container>
   )

}
