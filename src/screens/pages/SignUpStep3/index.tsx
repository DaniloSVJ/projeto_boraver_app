import React from 'react'
import {Image} from 'react-native'
import {useAuth} from '../../../hooks/auth'
import { FiPower} from 'react-icons/fi';
import BrandImg from '../../../assets/4-mobile-cadastro3.png'
import {Brand,View} from './styles'
import Button from '../../../components/Button'
export function SignUpStep3(){
      
    
    return (
        <View>
            <Brand source={BrandImg} />
        </View>
    )

}
