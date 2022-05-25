import * as React from 'react';

import { NavigationContainer,createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home} from '../screens/pages/Home';
import {Profile} from '../screens/pages/Profile';
import PasswordReset from '../screens/pages/PasswordReset';
import {SignUp} from '../screens/pages/SignUp';
import {SignUpStep2} from '../screens/pages/SignUpStep2';
import {Splas} from '../screens/pages/Splas';

const { Navigator, Screen, Group } = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef()

export function AppRoutes(){
 
    return(
  
      <Navigator screenOptions={{
        headerShown: false,
        
      }}  >
        <Group>
          <Screen name="Home" component={Home}  options={{ headerShown: true }}/>
          <Screen name="Profile" component={Profile} />
          
      
        </Group>
      </Navigator>
    
  )
  
}
