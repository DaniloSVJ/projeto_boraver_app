import React,{useRef,useCallback} from 'react'

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import { GiCircle } from "react-icons/gi";
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody,Viewstep,View,ViewArrow, ViewButton,DivViewTop,Content,Brand,TextStep} from './styles'
import { useNavigation,useRoute } from '@react-navigation/native';

import  Input  from '../../../components/Input'
import  Button  from '../../../components/Button'
import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon  from 'react-native-vector-icons/FontAwesome';
import Icon2  from 'react-native-vector-icons/Ionicons';

import api from '../../../service/api'

type Nav = {
   navigate: (value: string,{}) => void;
}
interface RouteParams {
   email: string;
   password: string
 }
 interface SignUpFormData {
      nome: string;
      celular: string;
      cidade: string;
      estado: string;
 }
export function SignUpStep2(){
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async (data: SignUpFormData) => {
         navigate('SignUpStep3',{
            email:params.email, 
            password: params.password,
            nome:data.nome,
            celular:data.celular,
            cidade:data.cidade,
            estado: data.estado
            
          });
      },
      [])
   
   const {navigate} = useNavigation<Nav>();

     function backsignup() {
         navigate('SignUp',{});
     }
     async function alterar(val:boolean){
      
      
     }
   

    return (
      <Container >
          
         <DivViewTop>
            <TextStep>
               Etapa 2 de 3
            </TextStep>
            <Viewstep>
               <View >
                <Icon  name="circle-o"   size={7} color="#DF8747"/>
               </View>
               <View  >
                <Icon name="circle"  size={7} color="#DF8747"/>
               </View>
               <View  >
                <Icon name="circle-o"  size={7} color="#DF8747"/>
               </View>
            </Viewstep>
            <ViewArrow>
               <Icon2  name="chevron-back"   size={14} color="#fff"  onPress={backsignup} />
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
                <Form ref={formRef} onSubmit={handleSignUpStep3}> 
                  <Input 
                     placeholder='Nome Completo'
                     autoCorrect={false}
                     autoCapitalize="none"
                     
                     sendData={alterar}  
                     name="nome"
                     icon=""
                     
                     returnKeyType="next"
                  />   

                  <Input 
                     placeholder='Celular'
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     sendData={alterar}  
                     name="celular"
                     icon=""
              
                     returnKeyType="next"
                  />  
                  <Input 
                     placeholder='Cidade'
                     autoCorrect={false}
                     autoCapitalize="none"
                    
                     sendData={alterar}  
                     name="cidade"
                     icon=""
                    
                     returnKeyType="next"
                  />  
                  
                  <Input 
                     placeholder='Estado'
                    
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     sendData={alterar}  
                     name="estado"
                     icon=""
                     
                     returnKeyType="next"
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