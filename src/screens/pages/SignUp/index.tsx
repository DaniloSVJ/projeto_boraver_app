import React,{useRef,useCallback,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import { GiCircle } from "react-icons/gi";

import {
   KeyboardAvoidingView,
   Platform,  
   Alert,
   TextInput,
   Text
} from 'react-native'

import {
   Container,
   ContainerBody,
   Viewstep,
   View, 
   ViewArrow,
   ViewButton,
   DivViewTop,
   Content,
   Brand,
   TextStep
} from './styles'



import InputIcon from '../../../components/Input';
import Input from '../../../components/InputGeral';

import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';

import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon  from 'react-native-vector-icons/FontAwesome';
import Icon2  from 'react-native-vector-icons/Ionicons';

import api from '../../../service/api'
type Nav = {
   navigate: (value: string) => void;
}
interface SignUpFormData {
   name: string;
   email: string;
   password: string;
 }
export function SignUp(){
   const formRef = useRef<FormHandles>(null);
   const {navigate} = useNavigation<Nav>();
   const [seePassword,setSeePassword]= useState(true)

   const emailInputRef = useRef<TextInput>(null);
   const passwordInputRef = useRef<TextInput>(null);
 
   const handleSignUp = useCallback(
     async (data: SignUpFormData) => {
       try {
         console.log('veio aqui') 
         formRef.current?.setErrors({});
         console.log('veio aqui2') 
         const schema = Yup.object().shape({
           
           email: Yup.string()
             .required('E-mail obrigatório')
             .email('Digite um e-mail válido'),
           password: Yup.string().min(6, 'No mínimo 6 dígitos'),
         }
         
         );
         console.log('veio aqui3') 
         await schema.validate(data, {
           abortEarly: false,
         });
         console.log(data.email) 
         await api.post('/api/v3/veremail/', data.email);
         
         navigate("SignUpStep2")
         
         console.log('veio aqui5') 
 
         
       } catch (err) {
         console.log('veio aqui6') 
         if (err instanceof Yup.ValidationError) {
           const errors = getValidationErrors(err);
 
           formRef.current?.setErrors(errors);
           console.log('veio aqui7')
           return;
         }
         console.log('veio aqui8')
        
       }
     },
     [navigate],
   );
   async function alterar(val:boolean){
      setSeePassword(val)
      
     }

   async function backsing(){
      navigate("SignIn")
   }  
 
    return (
      <Container >
          
         <DivViewTop>
            <TextStep>
               Etapa 1 de 3
            </TextStep>
            <Viewstep>
               <View >
                <Icon  name="circle"   size={7} color="#DF8747"/>
               </View>
               <View  >
                <Icon name="circle-o"  size={7} color="#DF8747"/>
               </View>
               <View  >
                <Icon name="circle-o"  size={7} color="#DF8747"/>
               </View>
            </Viewstep>
            <ViewArrow>
               <Icon2  name="close"   size={14} color="#fff" onPress={backsing}/>
            </ViewArrow>
            <View><Brand source={BrandImg} /></View>

         </DivViewTop> 
         <ContainerBody>
   

            <KeyboardAvoidingView
               behavior={
                  Platform.OS === 'ios' 
                  ? 'padding':
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

                     
                        <Button onPress={() => formRef.current?.submitForm()}>
                          Continuar
                        </Button>
                     
                  </Form>   
               </Content>      
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>   
    )
}