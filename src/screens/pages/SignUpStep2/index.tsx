import React, { useRef, useCallback,useState } from 'react'
import {StyleSheet} from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { KeyboardAvoidingView, Platform ,Alert,ScrollView} from 'react-native'
import { Container, ContainerBody, Viewstep, View, ViewArrow, ViewButton, DivViewTop, Content, Brand, TextStep } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';


import Input from '../../../components/Input'
import Button from '../../../components/Button'
import BrandImg from '../../../assets/boraver_admin_logo.png'




type Nav = {
   navigate: (value: string, { }) => void;
}
interface RouteParams {
   nome: string;
   email: string;
   password: string
}
interface SignUpFormData {
   nomecompleto: string;
   celular: string;
   cidade: string;
   estado: string;
}
interface InputValueReference {
   value: string;
 }

export function SignUpStep2() {
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   
   const [valueMask,setValueMask] = useState("")
   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async (data: SignUpFormData) => {

         formRef.current?.setErrors({});
         console.log(data)
         if(data.nomecompleto==""){
            console.log("O nome é obrigatorio")
            Alert.alert("O nome é obrigatorio")
         }else if(data.celular==""){
            console.log("O Celular é obrigatorio")
            Alert.alert("O Celular é obrigatorio")
         }else if(data.cidade==""){
            console.log("A Cidade é obrigatorio")
            Alert.alert("A Cidade é obrigatorio")
         }else if(data.estado==""){
            console.log("O Estado é obrigatorio")
            Alert.alert("O Estado é obrigatorio")
         }else if(params.email==""){
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         }else if(params.password==""){
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")            
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         }else{
            console.log("chegou aqui")
         navigate('SignUpStep3', {
            email: params.email ,
            password: params.password,
            nome: params.nome,
            nomecompleto: data.nomecompleto,
            celular: data.celular,
            cidade: data.cidade,
            estado: data.estado

         });}
      },
      [])

   const { navigate } = useNavigation<Nav>();

   function backsignup() {
      navigate('SignUp', {});
   }
   async function alterar(val: boolean) {


   }

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         color:"#3C2E54",
         fontSize: 13,
         fontFamily: 'Montserrat_400Regular',
         border: 'none',
         borderColor: "#fff"  
      },

    });

   return (
      <Container >

         <DivViewTop>
            <TextStep>
               Etapa 2 de 3
            </TextStep>
            <Viewstep>
               <View >
                  <Icon name="circle-o" size={7} color="#DF8747" />
               </View>
               <View  >
                  <Icon name="circle" size={7} color="#DF8747" />
               </View>
               <View  >
                  <Icon name="circle-o" size={7} color="#DF8747" />
               </View>
            </Viewstep>
            <ViewArrow>
               <Icon2 name="chevron-back" size={14} color="#fff" onPress={backsignup} />
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
                        placeholder='Link do Istagram'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                      <Input
                        placeholder='Nº Seguidores Instagram'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Link canal Youtube'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                      <Input
                        placeholder='Nº Seguidores Yotube'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                               <Input
                        placeholder='Link canal Tiktok'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Nº Seguidores Tiktok'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"nomecompleto"}
                        icon=""

                        returnKeyType="next"
                     />
                     {/* <TextInputMask 
                        style={styles.container} 
                        placeholder='Celular'
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        type = "cel-phone"
                        returnKeyType="next"
                        onChange={e=>setValueMask(String(e.target.valueOf))}
                        value={valueMask}
                     />   
                      */}
                
                     
                     <Input
                        placeholder={'Estado'}
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name="cidade"
                        icon=""

                        returnKeyType="next"
                     />

                     <Input
                        placeholder='Cidade'

                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        sendData={alterar}
                        name={"estado"}
                        icon=""

                        returnKeyType="next"
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