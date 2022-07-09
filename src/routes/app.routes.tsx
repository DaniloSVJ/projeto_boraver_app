import * as React from 'react';
import { View, StyleSheet ,Image} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon2 from 'react-native-vector-icons/Foundation';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconFavorite from 'react-native-vector-icons/Fontisto';

import { Ionicons } from '@expo/vector-icons';

import IconSearch from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons"

import { Home } from '../screens/pages/Home';
import { Noti } from '../screens/pages/Noti';
import { OfferDetail } from '../screens/pages/OfferDetail';
import { Search } from '../screens/pages/Search';
import Favorite from '../screens/pages/Favorite';
import { Profile } from '../screens/pages/Profile';

import {Contact} from '../screens/pages/Contact';
import {Contact2} from '../screens/pages/Contact2';
import {OfferRecuse} from '../screens/pages/OfferRecuse'
import {OfferAceite} from '../screens/pages/OfferAceite'

import PasswordReset from '../screens/pages/PasswordReset';
import { SignUp } from '../screens/pages/SignUp';
import { Perfil } from '../screens/pages/Perfil';
import { SignUpStep2 } from '../screens/pages/SignUpStep2';
import { Splas } from '../screens/pages/Splas';
import { access } from 'fs';

import iHomeR from '../assets/ihomeroxo.svg'
import iHomeO from '../assets/ihomeorange.svg'

import iPerfilR from '../assets/iperfilroxo.svg'
import iPerfilO from '../assets/iperfilorange.svg'

import ifavoriteR from '../assets/ifavoriteroxo.svg'
import ifavoriteO from '../assets/ifavoriteorange.svg'



import styled from 'styled-components';


const navigationRef = createNavigationContainerRef()
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const [activeTab, setActiveTab] = React.useState(false)
  const styles = StyleSheet.create({
    favoriteIcon: {
      width: 18,
      height: 23,
      paddingLeft: 60,
      paddingRight: 75,
      marginTop: 7
    },
    favoriteIconDesactive: {
      width: 18,
      height: 23,

    },
    Icon: {
      marginTop: 8,
      marginLeft: 33,
      marginRight: 33,
      
      width: 18,
      height:23,
     
    },
    IconDesactive: {
      marginTop: 8,
      marginLeft: 33,
      marginRight: 33,
      width: 18,
      height:23,
      marginBottom: 8
    },
    IconPerfilA: {
      marginTop: 5,
      marginLeft: 33,
      marginRight: 33,
      width: 22,
      height:25
    },
    IconPerfilD: {
      marginTop: 7,
      marginLeft: 33,
      marginRight: 33,
      width: 22,
      height:25,
      marginBottom: 8
    },
    borderActive: {
      borderTopColor: "#DF8747",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      borderTopWidth: 5,
      marginTop: -10,
      marginLeft: 10,
      marginRight: 10,
      
      borderRadius: 5,
      
    },
    borderActivePerfil: {
      borderTopColor: "#DF8747",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      borderTopWidth: 5,
      marginTop: -10,
      marginLeft: 10,
      marginRight: 10,
      
      borderRadius: 5,
      
    },
    borderDesactivePerfil: {
      borderTopColor: "#3C2E54",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      // borderTopWidth: 5,
      marginTop: -10,
      borderRadius: 5,
      marginLeft: 33,
      marginRight: 33
      
    },

    borderDesactive: {
      borderTopColor: "#3C2E54",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      // borderTopWidth: 5,
      marginTop: -10,
      borderRadius: 5,
      marginLeft: 33,
      marginRight: 33

    },
  })
  const [colorActivate, setColorActivate] = React.useState("DF8747")
  const isTabBarVisible = (route: any) => {
    const routeName = route.state
      ? route.state.routes[route.state.index]?.name
      : (route.params ? route.params.screens : 'Home')

    return ![
      'Noti'
    ].includes(routeName)


  }

  const HomeStack = createNativeStackNavigator();
  function HomeScreen() {

    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>

        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="OfferDetail" component={OfferDetail} />
        <HomeStack.Screen name="OfferAceite" component={OfferAceite} />
        <HomeStack.Screen name="OfferRecuse" component={OfferRecuse} />
        <PerfilStack.Screen name="Notifications" component={Notifi} />
        <PerfilStack.Screen name="Search" component={Search} />

      </HomeStack.Navigator>
    )
  }
  const Notif =  createNativeStackNavigator();
  function Notifi() {

    return (
      <Notif.Navigator screenOptions={{ headerShown: false }}>
        <Notif.Screen name="Notifications" component={Noti} />
        <PerfilStack.Screen name="Search" component={Search} />
      </Notif.Navigator>
    )
  }
  const PerfilStack = createNativeStackNavigator();
  function PerfilScreen() {

    return (
      <PerfilStack.Navigator screenOptions={{ headerShown: false }}>

        <PerfilStack.Screen name="Perfil" component={Perfil} />
        <PerfilStack.Screen name="Notifications" component={Notifi} />
        <PerfilStack.Screen name="Search" component={Search} />

      </PerfilStack.Navigator>
    )
  }
  const FavoriteStack = createNativeStackNavigator();
  function FavoriteScreen() {

    return (
      <FavoriteStack.Navigator screenOptions={{ headerShown: false }}>

        <FavoriteStack.Screen name="Favorite" component={Favorite} />
        <PerfilStack.Screen name="Notifications" component={Notifi} />
        <PerfilStack.Screen name="Search" component={Search} />

      </FavoriteStack.Navigator>
    )
  }

  const ContactStack = createNativeStackNavigator();
  function ContactScreen() {

    return (
      <ContactStack.Navigator screenOptions={{ headerShown: false }}>

        <ContactStack.Screen  name="Contact" component={Contact} />
        <ContactStack.Screen  name="Contact2" component={Contact2} />
        <ContactStack.Screen name="Notifications" component={Notifi} />
        <ContactStack.Screen name="Search" component={Search} />

      </ContactStack.Navigator>
    )
  }
  const SearchStack = createNativeStackNavigator();
  function SearchScrenn() {

    return (
      <SearchStack.Navigator screenOptions={{ headerShown: false }}>

        <SearchStack.Screen name="Search" component={Search} />
        <PerfilStack.Screen name="Notifications" component={Notifi} />


      </SearchStack.Navigator>
    )
  }
 
  return (

    <Tab.Navigator

      screenOptions={({
        tabBarActiveTintColor: '#DF8747',
        tabBarInactiveTintColor: '#5E448A',

        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#3C2E54',
          backgroundColor: '#3C2E54',
          borderBottomColor: "#3C2E54"
        },
        tabBarIconStyle: {
          borderEndColor: "",
          borderStartColor: "",


        }


      })}


    >

      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>

            {
              focused && <View style={styles.borderActive} >

              </View>
            }
            <Image style={focused ? styles.Icon : styles.IconDesactive} source={focused ? iHomeO: iHomeR} />
          </View>
        ),
      }}
      />
  
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>
            {
              focused && <View style={styles.borderActive} />
            }
            <Image style={focused ? styles.Icon : styles.IconDesactive} source={focused ? ifavoriteO: ifavoriteR} />
          </View>
        ),
      }}
      />
      <Tab.Screen name="PerfilScreen" component={PerfilScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactivePerfil}>
            {
              focused && <View style={styles.borderActivePerfil} />
            }
            <Image style={focused ? styles.IconPerfilA : styles.IconPerfilD} source={focused ? iPerfilO: iPerfilR} />
          </View>
        ),
      }}
      />
    <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>
            {
              focused && <View style={styles.borderActive} />
            }
            <Ionicons style={focused ? styles.Icon : styles.IconDesactive} name="chatbubble-ellipses-sharp" size={24} color={focused? "#DF8747":"#5E448A"}/>
          </View>
        ),
      }}
      />

    </ Tab.Navigator>

  )

}

/*
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

*/
