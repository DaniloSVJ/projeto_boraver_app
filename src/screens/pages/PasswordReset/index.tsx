import React, { useRef, useCallback } from 'react'
import { KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { Container, ContainerBody, ViewArrow, ViewButton, DivViewTop, Content, Brand, ForgotPassordLabel, ForgotPassordButton } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import Input from '../../../components/InputGeral'
import Button from '../../../components/Button'
import BrandImg from '../../../assets/boraver_admin_logo.png'

import api from '../../../service/api'

type Nav = {
   navigate: (value: string, { }) => void;
}

interface SignUpFormData {
   email: string;
}

const PasswordReset: React.FC = () => {
   const formRef = useRef<FormHandles>(null)
   const { navigate } = useNavigation<Nav>();

   const handleResetPassword = useCallback(
      async (data: SignUpFormData) => {


         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            email: Yup.string()
               .required('E-mail obrigatório')
               .email('Digite um e-mail válido')
         });

         await schema.validate(data, {
            abortEarly: false,
         });

         await api.post('/api/v3/request-reset-email/', data)
         .then(function (response) {
            navigate("PasswordReset2", {})
         }).catch(function (error) {
            console.log('o email é '+ data.email)
            console.error(error)
            if (error.response.status == 400) {
               Alert.alert('Você digitou um email não cadastrado. Verifique e tente novamente.')
               console.log('Você digitou um email não cadastrado. Verifique e tente novamente.')
            } else if (error.response.status == 500) {
               Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
               console.log('Estamos com problemas técnico. Por favor, tente mais tarde')
            } else {
               Alert.alert('Problema desconhecido. Por favor, contate o suporte')
               console.log('Problema desconhecido. Por favor, contate o suporte')
            }

         })

      },
      [navigate],
   );

   return (
      <Container >
         <DivViewTop>
            <ViewArrow>
               <Icon name="close" size={14} color="#fff" onPress={() => navigate("SignIn", {})} />
            </ViewArrow>
            <Brand source={BrandImg} />
         </DivViewTop>
         <ContainerBody>


            <KeyboardAvoidingView
               behavior={
                  Platform.OS === 'ios'
                     ? 'padding' :
                     undefined
               }
            >

               <Content>
                  <Form ref={formRef} onSubmit={handleResetPassword}>
                     <Input
                        placeholder='E-mail cadastrado'
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        returnKeyType="next"
                     />
                     <Button
                        bordercolor={"#3C2E54"} 
                        background={"#3C2E54"}
                        color={"#fff"}
                        onPress={() => formRef.current?.submitForm()}
                     >
                        Redefinir Senha
                     </Button>

                  </Form>
               </Content>
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>
   )
}

export default PasswordReset;