import React from 'react'
import {View} from 'react-native'
import {useAuth} from '../../../hooks/auth'
import { FiPower} from 'react-icons/fi';
import Button from '../../../components/Button'
export function Home(){
    const { signOut } = useAuth();

  
    
    return (
        <View>
          <Button onPress={signOut} >
            Sair
          </Button>
        </View>
    )

}
