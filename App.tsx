import React from 'react';
import {StatusBar} from 'expo-status-bar'
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display'
import { DMSans_400Regular, useFonts } from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme';
import {PasswordReset} from './src/screens/PasswordReset';
import {AuthProvider} from './src/hooks/auth'
export default function App() {
  const[fontsLoaded]=useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })
  if(!fontsLoaded){
    return < AppLoading/>
  }
  return (
    <ThemeProvider theme={theme} >
     <StatusBar style='light' translucent
      backgroundColor='#000'/> 
     <AuthProvider>
      <PasswordReset/>
     </AuthProvider>
    </ThemeProvider >
  );
}


