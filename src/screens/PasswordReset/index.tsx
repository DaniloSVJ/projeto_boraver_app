import React from 'react'
import BrandImg from '../../assets/boraver_admin_logo.png'
import {KeyboardAvoidingView,Platform} from 'react-native'
import {Container,ContainerBody, ViewButton,DivViewTop,Content,Brand,ForgotPassordLabel,ForgotPassordButton} from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function PasswordReset(){
    return (
      <Container >
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
                     placeholder='E-mail cadastrado'
                     type='secondary' 
                     autoCorrect={false}
                     autoCapitalize='none'
                  />    
                  <ViewButton>
                     <Button
                        
                        title="Redefinir Senha"
                        type='secondary' isLoading={false}  
                     
                     />
                  </ViewButton>
               </Content>      
            </KeyboardAvoidingView>
         </ContainerBody>
      </Container>   
    )
}