import React,{useRef,useCallback,useState} from 'react'
import { useNavigation, } from '@react-navigation/native';
import * as Yup from 'yup';

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import { GiCircle } from "react-icons/gi";
import { useAuth } from '../../hooks/auth';

import {
   KeyboardAvoidingView,
   Platform,  
   Alert,
   TextInput,
   ScrollView
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
   navigate: (value: string, {}) => void;
}
interface SignUpFormData {
   name: string;
   email: string;
   password: string;
 }
export function SignUp(){
   const formRef = useRef<FormHandles>(null);
   const {navigate} = useNavigation<Nav>();
   const navigation = useNavigation();
   const [seePassword,setSeePassword]= useState(true)

   const nameInputRef = useRef<TextInput>(null);
   const emailInputRef = useRef<TextInput>(null);
   const passwordInputRef = useRef<TextInput>(null);
 
   const handleSignUp = useCallback(
     async (data: SignUpFormData) => {
     
         
         formRef.current?.setErrors({});
      
         const schema = Yup.object().shape({
           name: Yup.string()
            .required('Nome é obrigatório'), 
           email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
           password: Yup.string().min(6, 'No mínimo 6 dígitos'),
         }
         
         );
         
       
         await schema.validate(data, {
           abortEarly: false,
         });
       
       
         await api.post('/api/v3/veremail/',{
            'email': data.email,
            'name': data.name
         }).then(function (response) {

            navigate("SignUpStep2",{ 'nome': data.name, 'email': data.email,'password': data.password})
          }).catch(function(error){
            console.error(error)
            if(error.response.status==400){
               console.log(error.response.data.details)
               Alert.alert(error.response.data.details)
            }else if(error.response.status==500){
               console.log('Estamos com problemas técnico. Por favor, tente mais tarde')
               Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
            }else{
               console.log('Problema desconhecido. Por favor, contate o suporte')
               Alert.alert('Problema desconhecido. Por favor, contate o suporte')
            }

         })
         
     },
     [navigate],
   );
   async function alterar(val:boolean){
      setSeePassword(val)
      
     }

   async function backsing(){
      navigate("SignIn",{})
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
                     ref={nameInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     name="name"
                     
                     placeholder="Nome Usuário"
                     returnKeyType="next"
                  />       
                  <Input 
                     ref={emailInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="whatsapp"
                     name="whatsapp"
                     
                     
                     returnKeyType="next"
                  />    
                  <Input 
                     ref={emailInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="Foto de Perfil"
                     name="foto"
                     
                     
                     returnKeyType="next"
                  /> 
                  <Input 
                     ref={emailInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="Gênero"
                     name="genero"
                     
                     
                     returnKeyType="next"
                  />           

                  <Input 
                     ref={emailInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     name="email"
                     
                     placeholder="E-mail"
                     returnKeyType="next"
                  />    
                  <Input 
                     ref={emailInputRef}
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="Cpf ou Cnpj"
                     name="doc"
                     
                     
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
                     
                        <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                          Continuar
                        </Button>
                     </ViewButton>  
                  </Form>   
               </Content>  
                  
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>   
    )
}