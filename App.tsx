import 'react-native-gesture-handler';

import React,{useEffect,useState,useCallback} from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {AuthProvider} from './src/hooks/auth'
import {Routes} from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Montserrat_400Regular,Montserrat_500Medium, Montserrat_100Thin,Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';


const App: React.FC = () =>{ 
  
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_100Thin,
          Montserrat_200ExtraLight,
          Montserrat_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <StatusBar  translucent backgroundColor="transparent" />
    );
  }
  //backgroundColor="#3C2D55"

  return(

  <NavigationContainer>
    <GestureHandlerRootView
    onLayout={onLayoutRootView}
    style={{ flex: 1 }}
    >

      <StatusBar  translucent backgroundColor="transparent" />
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: '#ffff' }}>     
        <Routes />
      </View>     
    </AuthProvider>
    </GestureHandlerRootView>
  </NavigationContainer>
);
}
export default App;