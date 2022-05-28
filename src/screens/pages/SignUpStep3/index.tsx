import React,{useRef,useCallback} from 'react'
import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import {KeyboardAvoidingView,Platform,ScrollView} from 'react-native'
import {Container,ContainerBody,Viewstep,View,ViewArrow, ViewButton,DivViewTop,Content,Brand,TextStep,TermText,Title, Paragraph} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';

import  Input  from '../../../components/Input'
import Icon  from 'react-native-vector-icons/FontAwesome';
import Icon2  from 'react-native-vector-icons/Ionicons';
import BrandImg from '../../../assets/4-mobile-cadastro3.png'
import Button from '../../../components/Button'

import api from '../../../service/api'
import Term from './Term'

type Nav = {
    navigate: (value: string,{}) => void;
 }

 interface RouteParams {
    email: string;
    password: string;
    nome: string;
    celular: string;
    estado: string;
    cidade: string;
  }



export function SignUpStep3(){
    const {navigate} = useNavigation<Nav>()
    const formRef = useRef<FormHandles>(null)
    const route = useRoute();
    const params = route.params as RouteParams;
    const handleSignUpStep3 = useCallback(
       async () => {
          navigate('SignUpStep3',{
             email:params.email, 
             password: params.password,
             nome:params.nome,
             celular:params.celular,
             cidade:params.cidade,
             estado: params.estado
             
           });
       },
       [])  

      function backsignup2 (){
          navigate('SignUpStep2',{})
      }   

    
    return (
        <Container >
          
        <DivViewTop>
           <TextStep>
              Etapa 3 de 3
           </TextStep>
           <Viewstep>
              <View >
               <Icon  name="circle-o"   size={7} color="#DF8747"/>
              </View>
              <View  >
               <Icon name="circle-o"  size={7} color="#DF8747"/>
              </View>
              <View  >
               <Icon name="circle"  size={7} color="#DF8747"/>
              </View>
           </Viewstep>
           <ViewArrow>
              <Icon2  name="chevron-back"   size={14} color="#fff"  onPress={backsignup2} />
           </ViewArrow>
          

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
              <ScrollView>
               <Form ref={formRef} onSubmit={handleSignUpStep3}> 
                  
                    <TermText>Termos de uso</TermText>
                    <Paragraph>{Term.Paragraph_0}</Paragraph>
                    <Title>{Term.Title_1}</Title> 
                    <Paragraph>{Term.Paragraph_1}</Paragraph>
                    <Title>{Term.Title_2}</Title> 
                    <Paragraph>{Term.Paragraph_2}</Paragraph>
                    <Title>{Term.Title_3}</Title> 
                    <Paragraph>{Term.Paragraph_3}</Paragraph>
                    <Button onPress={() => formRef.current?.submitForm()}>
                        Aceitar e criar conta  
                    </Button>
                   
                </Form> 
                </ScrollView> 
              </Content>      
           </KeyboardAvoidingView>
        </ContainerBody>
     </Container>   
    )

}
