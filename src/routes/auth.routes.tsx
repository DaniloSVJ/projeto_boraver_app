import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,createNavigationContainerRef } from '@react-navigation/native';

import {SignIn} from '../screens/pages/SignIn';
import {SignUp} from '../screens/pages/SignUp';
import {SignUpStep2} from '../screens/pages/SignUpStep2';
import {SignUpStep3} from '../screens/pages/SignUpStep3';
import PasswordReset from '../screens/pages/PasswordReset';
const { Navigator, Screen, Group } = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef()

export function AuthRoutes(){ 
 
  return (
  <Navigator screenOptions={{ headerShown: false }}>
   <Group>
      <Screen name="SignUpStep3" component={SignUpStep3}   />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="PasswordReset" component={PasswordReset}/>
      <Screen name="SignUpStep2" component={SignUpStep2}   />
     
    </Group>
  </Navigator>
)
}



