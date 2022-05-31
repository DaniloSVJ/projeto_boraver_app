import React, { useRef, useCallback, useState } from 'react'
import { useNavigation, } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { RectButton } from 'react-native-gesture-handler';

import {
   KeyboardAvoidingView,
   Platform,
   Alert,
   TextInput,
   Text,
   StyleSheet
} from 'react-native'

import {
   Container,
   ContainerBody,
   TextPassword,
   View,
   ViewArrow,
   ViewButton,
   DivViewTop,
   Content,
   Brand,
   ForgotPassordButton,
   ForgotPasswordText,
   
} from './styles'



import InputIcon from '../../../components/Input';
import Input from '../../../components/InputGeral';

import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';

import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import api from '../../../service/api'
type Nav = {
   navigate: (value: string, { }) => void;
}
interface SignUpFormData {

   email: string;
   password: string;
}
export function SignIn() {
   const formRef = useRef<FormHandles>(null);
   const { navigate } = useNavigation<Nav>();
   const navigation = useNavigation();
   const [seePassword, setSeePassword] = useState(true)

   const emailInputRef = useRef<TextInput>(null);
   const passwordInputRef = useRef<TextInput>(null);

   const handleSignUp = useCallback(
      async (data: SignUpFormData) => {


         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            email: Yup.string()
               .required('E-mail obrigatório')
               .email('Digite um e-mail válido'),
            password: Yup.string().min(6, 'No mínimo 6 dígitos'),
         }

         );


         await schema.validate(data, {
            abortEarly: false,
         });


         await api.post('/api/v3/veremail/', {
            'email': data.email,
         }).then(function (response) {
            navigate("SignUpStep2", { 'email': data.email, 'password': data.password })
         }).catch(function (error) {

            if (error.response.status == 400) {
               Alert.alert('Você digitou o email ou senha errada. Verifique e tente novamente. ')
            } else if (error.response.status == 500) {
               Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
            } else {
               Alert.alert('Problema desconhecido. Por favor, contate o suporte')
            }

         })

      },
      [navigate],
   );
   async function alterar(val: boolean) {
      setSeePassword(val)

   }

   async function backsing() {
      navigate("HomeAuth",{})
   }
   const styles = StyleSheet.create({
      password: {
         display: 'flex',
         flexDirection: 'row',
         alignSelf: 'flex-start',

      },
      text:{
         fontSize: 12,
      },
      close:{
         height:13,
         width:13,
         marginTop:45,
         marginLeft:32
      }
   });
   return (
      <Container >

         <DivViewTop>
  
          
            <RectButton style={styles.close} onPress={backsing}>
               <Icon2  name="close"   size={14} color="#fff" />
            </RectButton>
            <View><Brand source={BrandImg} /></View>

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
                  <Form ref={formRef} onSubmit={handleSignUp}>
                     <Input
                        ref={emailInputRef}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"

                        placeholder="E-mail"
                        returnKeyType="next"
                     />
                     <InputIcon
                        ref={passwordInputRef}
                        name='password'
                        sendData={alterar}

                        icon="eye-off-outline"
                        placeholder="Senha"
                        secureTextEntry={seePassword}
                        returnKeyType="send"
                     />
                     <ViewButton>
                        <Button background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                           Entrar
                        </Button>
                     </ViewButton>
                     
                         <TextPassword>Esqueceu sua Senha?
                           <ForgotPassordButton>
                              <ForgotPasswordText
                                 onPress={() => navigate("PasswordReset", {})}
                              >
                                Clique Aqui
                              </ForgotPasswordText>
                           </ForgotPassordButton>
                           </TextPassword>
                     
                  </Form>
               </Content>

            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>
   )
}