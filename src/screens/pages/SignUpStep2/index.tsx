import React, { useRef, useCallback, useState ,useEffect} from 'react'
import { StyleSheet } from 'react-native'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core"
import { KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native'
import { Container, ContainerBody, Viewstep, View, ViewArrow, ViewButton, DivViewTop, Content, Brand, TextStep } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import Select from '../../../components/Select'
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
   whatsapp: string,
   genero: string,
   foto: string,
   cpf:string,
   cnpj:string


}
interface SignUpFormData {
   nome: string;
   celular: string;
   cidade: string;
   estado: string;
   instagram: string
   qtd_instagram: string,
   youtube: string,
   qtd_youtube: string,
   tiktok:string,
   qtd_tiktok:string
}
interface InputValueReference {
   value: string;
}

interface Icidades {

    id: number,
    nome: string,
    microrregiao: {
        id: number,
        nome: string,
        mesorregiao: {
            id: number,
            nome: string,
            UF: {
                id: number,
                sigla: string,
                nome: string,
                regiao: {
                    id: number,
                    sigla: string,
                    nome: string
                }
            }
        }
    }
}
export function SignUpStep2() {
   const formRef = useRef<FormHandles>(null)
   const route = useRoute();
   const [uf, setUFs] = useState('');
   const [valueCidade, setValueCidade] = useState('')
   const [valueMask, setValueMask] = useState("")
   const { navigate } = useNavigation<Nav>();
   const params = route.params as RouteParams;
   const handleSignUpStep3 = useCallback(
      async (data: SignUpFormData) => {

         formRef.current?.setErrors({});
         console.log(data)
         if (data.instagram == "") {
            console.log("A Cidade é obrigatorio")
            Alert.alert("A Cidade é obrigatorio")
         } else if (data.qtd_instagram == "") {
            console.log("O Estado é obrigatorio")
            Alert.alert("O Estado é obrigatorio")

         } else if (data.youtube == "") {
            console.log("A Cidade é obrigatorio")
            Alert.alert("A Cidade é obrigatorio")
         } else if (data.qtd_youtube == "") {
            console.log("O Estado é obrigatorio")
            Alert.alert("O Estado é obrigatorio")   
            
         } else if (data.tiktok == "") {
            console.log("A Cidade é obrigatorio")
            Alert.alert("A Cidade é obrigatorio")
         } else if (data.qtd_tiktok == "") {
            console.log("O Estado é obrigatorio")
            Alert.alert("O Estado é obrigatorio")
            
            
         } else if (params.email == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else if (params.password == "") {
            console.log("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
            Alert.alert("A sessão anterior expirou volte e cadastre novamente o Email e Senha")
         } else {
           navigate('SignUpStep3', {
               email: params.email,
               password: params.password,
               nome: params.nome,
               whatsapp: params.whatsapp,
               genero: params.genero,
               foto: params.foto,
               cpf: params.cpf,
               cnpj: params.cnpj,

               instagram: data.instagram,
               qtd_instagram: data.qtd_instagram,
               youtube: data.youtube,
               qtd_youtube: data.qtd_youtube,
               tiktok:data.tiktok,
               qtd_tiktok:data.qtd_tiktok,

               estados:uf,
               cidades:valueCidade
            });
         }
      },
      [])



   function backsignup() {
      navigate('SignUp', {});
   }
   async function alterar(val: boolean) {


   }

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         color: "#3C2E54",
         fontSize: 13,
         fontFamily: 'Montserrat_400Regular',
         border: 'none',
         borderColor: "#fff"
      },

   });
   const estoptios = ['Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal']
    const [cidades, setCidades] = useState<Icidades[]>([])
    useEffect(() => {
        async function load() {
            let U = ''
            if (uf === 'Rondônia') {
                U = 'RO'
            } else if (uf === 'Acre') {
                U = 'AC'
            } else if (uf === 'Amazonas') {
                U = 'AM'
            }
            else if (uf === 'Roraima') {
                U = 'RR'
            }
            else if (uf === 'Pará') {
                U = 'PA'
            }
            else if (uf === 'Amapá') {
                U = 'AP'
            }
            else if (uf === 'Tocantins') {
                U = 'TO'
            }
            else if (uf === 'Maranhão') {
                U = 'MA'
            }
            else if (uf === 'Piauí') {
                U = 'PI'
            }
            else if (uf === 'Ceará') {
                U = 'CE'
            }
            else if (uf === 'Rio Grande do Norte') {
                U = 'RN'
            }
            else if (uf === 'Paraíba') {
                U = 'PB'
            }
            else if (uf === 'Pernambuco') {
                U = 'PE'
            }
            else if (uf === 'Alagoas') {
                U = 'AL'
            }
            else if (uf === 'Sergipe') {
                U = 'SE'
            }
            else if (uf === 'Bahia') {
                U = 'BA'
            }
            else if (uf === 'Minas Gerais') {
                U = 'MG'
            }
            else if (uf === 'Espírito Santo') {
                U = 'ES'
            }
            else if (uf === 'Rio de Janeiro') {
                U = 'RJ'
            }
            else if (uf === 'São Paulo') {
                U = 'SP'
            }
            else if (uf === 'Paraná') {
                U = 'PR'
            }
            else if (uf === 'Santa Catarina') {
                U = 'SC'
            }
            else if (uf === 'Rio Grande do Sul') {
                U = 'RS'
            }
            else if (uf === 'Mato Grosso do Sul') {
                U = 'MS'
            }
            else if (uf === 'Mato Grosso') {
                U = 'MT'
            }
            else if (uf === 'Goiás') {
                U = 'GO'
            }
            else if (uf === 'Distrito Federal') {
                U = 'DF'
            }
            let arcity = ['']
            await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${U}/municipios`)
                .then((response) => {
                    //response.data
                    setCidades(response.data)
                    // response.data.map((e: Icidades) =>
                    //     setCidades({ ...[e.nome] })

                    // )

                })


        }
        load()
    }, [uf])
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
                     ? 'padding' :
                     undefined
               }
            >


               <Content>
               <ScrollView>
                  <Form ref={formRef} onSubmit={handleSignUpStep3}>
                     <Input
                        placeholder='Link do Istagram'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"instagram"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Nº Seguidores Instagram'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"qtd_instagram"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Link canal Youtube'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"youtube"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Nº Seguidores Yotube'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"qtd_youtube"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Link canal Tiktok'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"tiktok"}
                        icon=""

                        returnKeyType="next"
                     />
                     <Input
                        placeholder='Nº Seguidores Tiktok'
                        autoCorrect={false}
                        autoCapitalize="none"

                        sendData={alterar}
                        name={"qtd_tiktok"}
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
                     <Select
                        options={estoptios}
                        onChangeSelect={setUFs}
                        marginR={5}
                        marginL={9}
                     />
                     <Select
                        options={cidades.map(e => e.nome)}
                        onChangeSelect={setValueCidade}
                        marginR={5}
                        marginL={9}
                     />
                     

                     <ViewButton>
                        <Button bordercolor={"#3C2E54"} background={"#3C2E54"} color={"#fff"} onPress={() => formRef.current?.submitForm()}>
                           Continuar
                        </Button>
                     </ViewButton>
                  </Form>
                  </ScrollView>
               </Content>
               
            </KeyboardAvoidingView>
            
         </ContainerBody>
      </Container>
   )
}