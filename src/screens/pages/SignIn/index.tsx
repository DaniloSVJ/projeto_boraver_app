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
import { useAuth } from '../../../hooks/auth';

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


type Nav = {
   navigate: (value: string, { }) => void;
}
interface SignInFormData {

   email: string;
   password: string;
}
export function SignIn() {
   const formRef = useRef<FormHandles>(null);
   const { navigate } = useNavigation<Nav>();
   const navigation = useNavigation();
   const [seePassword, setSeePassword] = useState(true)
   const { signIn } = useAuth();

   const emailInputRef = useRef<TextInput>(null);
   const passwordInputRef = useRef<TextInput>(null);

   const handleSignIn = useCallback(
      async (data: SignInFormData) => {
        try {
          formRef.current?.setErrors({});
  
          const schema = Yup.object().shape({
            email: Yup.string()
              .required('E-mail obrigatório')
              .email('Digite um e-mail válido'),
            password: Yup.string().required('Senha obrigatória'),
          });
  
          await schema.validate(data, {
            abortEarly: false,
          });
  
          await signIn({
            email: data.email,
            password: data.password,
          });

        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
  
            console.log(errors);
  
            formRef.current?.setErrors(errors);
  
            return;
          }
  
          Alert.alert(
            'Erro na autenticação',
            'Ocorreu um erro ao fazer login, cheque as credenciais.',
          );
        }
      },
      [signIn],
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
                  <Form ref={formRef} onSubmit={handleSignIn}>
                     <Input
                        ref={emailInputRef}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        onSubmitEditing={() => passwordInputRef.current?.focus}
                     
                        placeholder="E-mail"
                        returnKeyType="next"
                        />
                     <InputIcon
                        ref={passwordInputRef}
            
                        

                        name='password'
                        sendData={alterar}
                        
                        onSubmitEditing={()=>handleSignIn}
                        icon="eye-off-outline"
                        placeholder="Senha"
                        secureTextEntry={seePassword}
                        returnKeyType="send"
                       
                     />
                     <ViewButton>
                        <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
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