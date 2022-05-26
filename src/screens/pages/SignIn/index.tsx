import React,{useContext, useCallback,useRef,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

import {Alert,View} from 'react-native'
import {
   KeyboardAvoidingView,
   Text,
   Platform,  
   TextInput,
} from 'react-native'

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import getValidationErrors from '../../../utils/getValidationErrors';
import {Container,ContainerBody,ViewArrow, DivViewTop,Content,Brand,ForgotPassordLabel,ForgotPassordButton,TextLink} from './styles'
import  Input  from '../../../components/Input'


import  Button  from '../../../components/Button'
import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon  from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'
import * as Yup from 'yup';
import {useAuth} from '../../../hooks/auth'
interface SignInFormData {
   email: string;
   password: string;
 }
type Nav = {
   navigate: (value: string) => void;
}
 
export function SignIn(){
      const formRef = useRef<FormHandles>(null)
      const passwordInputRef = useRef<TextInput>(null);
      const [seePassword,setSeePassword]= useState(true)
      const [inputName,setInputName]= useState('password')  
      const [verSenha,setVerSenha] =useState(true)
      const {navigate} = useNavigation<Nav>();

      const { signIn } = useAuth();

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
     async function alterar(val:boolean){
      setSeePassword(val)
      
     }
     function resetpassword() {
      navigate('SignUp');
     }
      return (
      <View>
         <KeyboardAvoidingView
                          
                           behavior={
                              Platform.OS === 'ios' 
                              ? 'padding':
                              undefined
                           }
                           enabled
         >  
          <ScrollView>
          <DivViewTop>
              <ViewArrow>
                <Icon   name="close"   size={14} color="#fff"/>
              </ViewArrow>
              <View><Brand source={BrandImg} /></View>
              
          </DivViewTop> 
         <ContainerBody>
               <Content>
                     <Form ref={formRef} onSubmit={handleSignIn}>
                          <Input 
                              
                              autoCorrect={false}
                              autoCapitalize="none"
                              keyboardType="email-address"
                              sendData={alterar}  
                              name={"email"}
                              icon=""
                              placeholder="E-mail"
                              returnKeyType="next"
                           />    
                           <Input 
                              ref={passwordInputRef}
                              name={inputName}
                              sendData={alterar}
                              
                              icon="eye-off-outline"
                              placeholder="Senha"
                              secureTextEntry={seePassword}
                              returnKeyType="send"
                           />
                          
                           <Button
                           onPress={()=>{
                              formRef.current?.submitForm()
                           }}
                           >
                              Entrar
                           </Button>
                          
                            
                     </Form>   
                     <ForgotPassordButton>
                      <ForgotPassordLabel onPress={resetpassword}>
                        Clique Aqui!
                        </ForgotPassordLabel>
                     </ForgotPassordButton>
                     
               </Content>      
            
         </ContainerBody>
         </ScrollView>
         </KeyboardAvoidingView>  
      </View>   
      )
}