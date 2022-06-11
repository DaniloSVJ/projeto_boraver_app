import 'react-native-gesture-handler';

import React,{useEffect,useState,useCallback,useRef} from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import  * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications';

import {AuthProvider} from './src/hooks/auth'
import {Routes} from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Montserrat_400Regular,Montserrat_500Medium, Montserrat_100Thin,Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const App: React.FC = () =>{ 
 
  const [appIsReady, setAppIsReady] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat_100Thin,
          Montserrat_200ExtraLight,
          Montserrat_400Regular,
          Montserrat_500Medium

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
    
      <View style={{ flex: 1, backgroundColor: '#ffff' }}>   
      <AuthProvider>
        <Routes />
      </AuthProvider>  
      </View>     
 
    </GestureHandlerRootView>
  </NavigationContainer>
);
}

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }
export default App;