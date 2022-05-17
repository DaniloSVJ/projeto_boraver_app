import React from 'react'
import BrandImg from '../../assets/boraver_admin_logo.png'
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody, DivViewTop,Content,Brand,ForgotPassordLabel,ForgotPassordButton,} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
export function SignIn(){
    return (
      <Container>
         <DivViewTop>
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
                  
                  <Input 
                     placeholder='E-mail'
                     type='secondary' 
                     autoCorrect={false}
                     autoCapitalize='none'
                  />    
                  <Input 
                     placeholder='Senha'
                     type='secondary' 
                     secureTextEntry
                  />
                 
                  <Button
                  
                     title="Entrar"
                     type='secondary' isLoading={false}   
                     
                  />
                    
                  <ForgotPassordButton>
                     <ForgotPassordLabel>
                     Esqueceu sua senha? Clique Aqui! 
                     </ForgotPassordLabel>
                  </ForgotPassordButton>
               </Content>      
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>   
    )
}