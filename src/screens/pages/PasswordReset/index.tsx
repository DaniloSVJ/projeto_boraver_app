import React, {useRef} from 'react'
import BrandImg from '../../../assets/boraver_admin_logo.png'
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody, ViewArrow,ViewButton,DivViewTop,Content,Brand,ForgotPassordLabel,ForgotPassordButton} from './styles'
import  Input  from '../../../components/InputGeral'
import  Button  from '../../../components/Button'
import Icon  from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"


const PasswordReset: React.FC = () =>

{ 
      
   async function alterar(val:boolean){

   }
   const formRef = useRef<FormHandles>(null)
    return (
      <Container >
         <DivViewTop>
             <ViewArrow>
                  <Icon  name="close"   size={14} color="#fff"/>
            </ViewArrow>  
            <Brand source={BrandImg} />
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
                     name="email"
                   
                    
                     returnKeyType="next"
                  />    
                  
                     <Button>
                     Redefinir Senha
                     </Button>
                  
                  </Form>   
               </Content>      
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>   
    )
}

export default PasswordReset;