import React, { useRef, useCallback, useState } from 'react'
import { useNavigation, } from '@react-navigation/native';
import * as Yup from 'yup';
import { TextInputMask } from 'react-native-masked-text'

import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { GiCircle } from "react-icons/gi";
import { useAuth } from '../../hooks/auth';
import Select from '../../../components/Select'
import {
   KeyboardAvoidingView,
   Platform,
   Alert,
   TextInput,
   ScrollView,
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
   TextStep,
   ContainerMask,


} from './styles'



import InputIcon from '../../../components/Input';
import Input from '../../../components/InputGeral';
import MaskInput from '../../../components/MaskInput';

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
   name: string;
   email: string;
   password: string;
   
   foto: string;
   

}
export function SignUp() {
   const formRef = useRef<FormHandles>(null);
   const { navigate } = useNavigation<Nav>();
   const navigation = useNavigation();
   const [seePassword, setSeePassword] = useState(true)
   const [generoV, setGeneroV] = useState('')
   const nameInputRef = useRef<TextInput>(null);
   const emailInputRef = useRef<TextInput>(null);
   const passwordInputRef = useRef<TextInput>(null);
   const [textMaskCelular, setTextMaskCelular] = useState('')
   const [textMaskCPF, setTextMaskCPF] = useState('sss')
   const [textMaskCNPJ, setTextMaskCNPJ] = useState('')



   const handleSignUp =(data: SignUpFormData)=>{

            

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


         schema.validate(data, {
            abortEarly: false,
         });
         console.log('>>>>'+generoV)
         console.log('>>>>'+textMaskCPF)
         console.log('>>>>'+textMaskCNPJ)
         console.log('>>>>'+textMaskCelular)
         console.log('>>>>'+data.email)
         api.post('/api/v3/veremail/', {
            'email': data.email,
            'name': data.name
         }).then(function (response) {
        
            navigate("SignUpStep2",
               {
                  'nome': data.name,
                  'password': data.password,
                  'whatsapp': textMaskCelular ,
                  'foto': data.foto,
                  'genero': generoV,
                  'email': data.email,
                  'cpf': textMaskCPF,
                  'cnpj': textMaskCNPJ

               })
         }).catch(function (error) {
            console.error(error)
            if (error.response.status == 400) {
               console.log(error.response.data.details)
               Alert.alert(error.response.data.details)
            } else if (error.response.status == 500) {
               console.log('Estamos com problemas técnico. Por favor, tente mais tarde')
               Alert.alert('Estamos com problemas técnico. Por favor, tente mais tarde')
            } else {
               console.log('Problema desconhecido. Por favor, contate o suporte')
               Alert.alert('Problema desconhecido. Por favor, contate o suporte')
            }

         })

      
   }
     
   async function alterar(val: boolean) {
      setSeePassword(val)

   }

   async function backsing() {
      navigate("SignIn", {})
   }
   const optObj =
   {
      maskType: 'BRL',
      withDDD: true,
      dddMask: '(99) '
   }

   const generoOpt = ['Masculino', 'Feminino', 'Não Informar']
   return (
      <Container >
         <ScrollView>
            <DivViewTop>
               <TextStep>
                  Etapa 1 de 3
               </TextStep>
               <Viewstep>
                  <View >
                     <Icon name="circle" size={7} color="#DF8747" />
                  </View>
                  <View  >
                     <Icon name="circle-o" size={7} color="#DF8747" />
                  </View>
                  <View  >
                     <Icon name="circle-o" size={7} color="#DF8747" />
                  </View>
               </Viewstep>
               <ViewArrow>
                  <Icon2 name="close" size={14} color="#fff" onPress={backsing} />
               </ViewArrow>
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

                        <View>
                           <Input
                              ref={nameInputRef}
                              autoCorrect={false}
                              autoCapitalize="none"
                              name="name"

                              placeholder="Nome Usuário"
                              returnKeyType="next"
                           />
                           <ContainerMask >
                              <TextInputMask
                                 
                                 type={'cel-phone'}
                                 style={{ width: '100%' }}
                                 options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                 }}
                                 
                                 placeholder='Seu Whatsapp'
                                 value={textMaskCelular}
                                 onChangeText={text => {
                                    setTextMaskCelular(text)
                                    console.log(textMaskCelular)
                                 }}
                                 returnKeyType="next"
                              />
                           </ContainerMask>
                           <Input
                              ref={emailInputRef}
                              autoCorrect={false}
                              autoCapitalize="none"
                              placeholder="Foto de Perfil"
                              name="foto"


                              returnKeyType="next"
                           />
                           <Select
                              options={generoOpt}
                              onChangeSelect={setGeneroV}
                              marginR={5}
                              marginL={9}
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
                           <ContainerMask >
                              <TextInputMask
                                 style={{ width: '100%' }}
                                 type={'cpf'}
                                 placeholder='Seu CPF'
                                 value={textMaskCPF}
                                 onChangeText={text => {
                                    setTextMaskCPF(text)
                                    
                                 }}
                               
                                 returnKeyType="next"
                              />
                           </ContainerMask>
                           <ContainerMask >
                              <TextInputMask
                                 type={'cnpj'}
                                 style={{ width: '100%' }}
                                 placeholder='Seu CNPJ'
                                 value={textMaskCNPJ}
                                 onChangeText={text => {
                                    setTextMaskCNPJ(text)

                                 }}
                                 returnKeyType="next"
                              />
                           </ContainerMask>
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
                        </View>
                        <View>
                           <Text> </Text>

                        </View>

                     </Form>


                  </Content>

               </KeyboardAvoidingView>
            </ContainerBody>
         </ScrollView>
      </Container>
   )
}