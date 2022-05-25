import React from 'react'
import {Image} from 'react-native'
import {useAuth} from '../../../hooks/auth'
import { FiPower} from 'react-icons/fi';
import BrandImg from '../../../assets/Tela_splas.png'
import {Brand,View} from './styles'
import Button from '../../../components/Button'
export function Splas(){
      
    
    return (
        <View>
            <Brand source={BrandImg} />
        </View>
    )

}
