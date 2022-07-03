import * as React from 'react';
import { View, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon2 from 'react-native-vector-icons/Foundation';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconFavorite from 'react-native-vector-icons/Fontisto';

import IconSearch from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons"

import { Home } from '../screens/pages/Home';
import { Noti } from '../screens/pages/Noti';

import { Search } from '../screens/pages/Search';
import Favorite from '../screens/pages/Favorite';
import { Profile } from '../screens/pages/Profile';


import PasswordReset from '../screens/pages/PasswordReset';
import { SignUp } from '../screens/pages/SignUp';
import { Perfil } from '../screens/pages/Perfil';
import { SignUpStep2 } from '../screens/pages/SignUpStep2';
import { Splas } from '../screens/pages/Splas';
import { access } from 'fs';

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
      paddingLeft: 60,
      paddingRight: 60,
      marginTop: 7
    },
    IconDesactive: {
      paddingLeft: 60,
      paddingRight: 60
    },
    borderActive: {
      borderTopColor: "#DF8747",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      borderTopWidth: 5,
      marginTop: -15,

      borderRadius: 5,
      marginLeft: 30,
      marginRight: 30




    },
    borderDesactive: {
      borderTopColor: "#3C2E54",
      borderBottomColor: '#3C2E54',
      borderRightColor: '#3C2E54',
      borderLeftColor: '#3C2E54',
      borderTopWidth: 5,
      marginTop: -10,
      borderRadius: 5,
      marginLeft: 30,
      marginRight: 30

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

  const PerfilStack = createNativeStackNavigator();
  function PerfilScreen() {

    return (
      <PerfilStack.Navigator screenOptions={{ headerShown: false }}>

        <PerfilStack.Screen name="Perfil" component={Perfil} />
        <PerfilStack.Screen name="Notifications" component={Noti} />


      </PerfilStack.Navigator>
    )
  }
  const FavoriteStack = createNativeStackNavigator();
  function FavoriteScreen() {

    return (
      <FavoriteStack.Navigator screenOptions={{ headerShown: false }}>

        <FavoriteStack.Screen name="Favorite" component={Favorite} />
        <PerfilStack.Screen name="Notifications" component={Noti} />


      </FavoriteStack.Navigator>
    )
  }
  const SearchStack = createNativeStackNavigator();
  function SearchScrenn() {

    return (
      <SearchStack.Navigator screenOptions={{ headerShown: false }}>

        <SearchStack.Screen name="Search" component={Search} />
        <PerfilStack.Screen name="Notifications" component={Noti} />


      </SearchStack.Navigator>
    )
  }
  function TabNavigation() {
    return (
      <Tab.Navigator

        screenOptions={(


          {
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

        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.borderDesactive}>

              {
                focused && <View style={styles.borderActive} >

                </View>
              }

              <Icon2 style={focused ? styles.Icon : styles.IconDesactive} name={'home'} size={size} color={color} />




            </View>
          ),
        }}
        />
        <Tab.Screen name="SearchScrenn" component={SearchScrenn} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.borderDesactive}>
              {
                focused && <View style={styles.borderActive} />
              }
              <IconSearch style={focused ? styles.Icon : styles.IconDesactive} name={'search'} size={size} color={color} />
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
              <IconFavorite style={focused ? styles.favoriteIcon : styles.favoriteIconDesactive} name={'favorite'} size={size} color={color} />
            </View>
          ),
        }}
        />
        <Tab.Screen name="Perfil" component={PerfilScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.borderDesactive}>
              {
                focused && <View style={styles.borderActive} />
              }
              <IconUser style={focused ? styles.Icon : styles.IconDesactive} name={'user'} size={size} color={color} />
            </View>
          ),
        }}
        />

      </ Tab.Navigator>
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

      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>

            {
              focused && <View style={styles.borderActive} >

              </View>
            }

            <Icon2 style={focused ? styles.Icon : styles.IconDesactive} name={'home'} size={size} color={color} />




          </View>
        ),
      }}
      />
      <Tab.Screen name="SearchScrenn" component={SearchScrenn} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>
            {
              focused && <View style={styles.borderActive} />
            }
            <IconSearch style={focused ? styles.Icon : styles.IconDesactive} name={'search'} size={size} color={color} />
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
            <IconFavorite style={focused ? styles.favoriteIcon : styles.favoriteIconDesactive} name={'favorite'} size={size} color={color} />
          </View>
        ),
      }}
      />
      <Tab.Screen name="PerfilScreen" component={PerfilScreen} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.borderDesactive}>
            {
              focused && <View style={styles.borderActive} />
            }
            <IconUser style={focused ? styles.Icon : styles.IconDesactive} name={'user'} size={size} color={color} />
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
