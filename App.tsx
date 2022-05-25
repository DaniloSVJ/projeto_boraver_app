import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Home} from './src/screens/pages/Home';
import {Splas} from './src/screens/pages/Splas';
import {Profile} from './src/screens/pages/Profile';
import PasswordReset from './src/screens/pages/PasswordReset';
import {SignUp} from './src/screens/pages/SignUp';
import {SignUpStep2} from './src/screens/pages/SignUpStep2';
import {AuthProvider} from './src/hooks/auth'
import {Routes} from './src/routes';
import {SignIn} from './src/screens/pages/SignIn'
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>     
        <Routes />
      </View>     
    </AuthProvider>
  </NavigationContainer>
);

export default App;