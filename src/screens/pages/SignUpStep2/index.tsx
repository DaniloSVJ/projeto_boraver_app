import React,{useRef} from 'react'

import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import { GiCircle } from "react-icons/gi";
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody,Viewstep,View,ViewArrow, ViewButton,DivViewTop,Content,Brand,TextStep} from './styles'
import { useNavigation } from '@react-navigation/native';

import  Input  from '../../../components/Input'
import  Button  from '../../../components/Button'
import BrandImg from '../../../assets/boraver_admin_logo.png'
import Icon  from 'react-native-vector-icons/FontAwesome';
import Icon2  from 'react-native-vector-icons/Ionicons';

type Nav = {
   navigate: (value: string) => void;
}

export function SignUpStep2(){
   const formRef = useRef<FormHandles>(null)
    
   const {navigate} = useNavigation<Nav>();

     function backsignup() {
         navigate('SignUp');
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
                <Form ref={formRef} onSubmit={alterar}> 
                  <Input 
                     placeholder='E-mail cadastrado'
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     sendData={alterar}  
                     name={"text"}
                     icon=""
                     
                     returnKeyType="next"
                  />   

                  <Input 
                     placeholder='Celular'
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     sendData={alterar}  
                     name={"text"}
                     icon=""
              
                     returnKeyType="next"
                  />  
                  <Input 
                     placeholder='Cidade'
                     autoCorrect={false}
                     autoCapitalize="none"
                    
                     sendData={alterar}  
                     name={"text"}
                     icon=""
                    
                     returnKeyType="next"
                  />  
                  
                  <Input 
                     placeholder='Estado'
                    
                     autoCorrect={false}
                     autoCapitalize="none"
                     keyboardType="email-address"
                     sendData={alterar}  
                     name={"test"}
                     icon=""
                     
                     returnKeyType="next"
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