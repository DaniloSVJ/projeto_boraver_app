import React from 'react'
import {Image} from 'react-native'
import {useAuth} from '../../../hooks/auth'
import { FiPower} from 'react-icons/fi';
import BrandImg from '../../../assets/1-mobile-explorar1.png'
import {Brand,View} from './styles'
import Button from '../../../components/Button'
export function Home(){
      
    
    return (
        <View>
            <Brand source={BrandImg} />
        </View>
    )

}
