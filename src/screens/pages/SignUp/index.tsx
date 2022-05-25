import React,{useRef} from 'react'
import { useNavigation } from '@react-navigation/native';

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import { GiCircle } from "react-icons/gi";
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody,Viewstep,View, ViewArrow,ViewButton,DivViewTop,Content,Brand,TextStep} from './styles'
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon  from 'react-native-vector-icons/FontAwesome';
import Icon2  from 'react-native-vector-icons/Ionicons';
type Nav = {
   navigate: (value: string) => void;
}
export function SignUp(){
   const formRef = useRef<FormHandles>(null)

   const {navigate} = useNavigation<Nav>();
   function backsing() {
      navigate('SignIn');
     }
    function alterar(){

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
                 <Form ref={formRef} onSubmit={alterar}>
                  <Input 
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     name="email"
                     icon=""
                     sendData={alterar}
                     placeholder="E-mail"
                     returnKeyType="next"
                  />    
                  <Input 
                     name="password"
                     icon="eye-outline"
                     placeholder="Senha"
                     secureTextEntry
                     returnKeyType="send"
                     sendData={alterar}
                  />

                     <ViewButton>
                        <Button>
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