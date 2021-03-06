import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';
import { useNavigation, } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../service/api';
interface DataUSer {
  id: number;
  name:string;
}
interface AuthState {
  token: string;
  user: DataUSer;
}


interface SignInCredentials {
  email: string;
  password: string;

}

interface AuthContextData {
  user: DataUSer;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
 
  
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Nav = {
  navigate: (value: string, { }) => void;
}

export const AuthProvider: React.FC = ({ children }) => {
  const { navigate } = useNavigation<Nav>();
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@BoraVer:token',
        '@BoraVer:user',
      ]);

      if (token[1] && user[1]){
        api.defaults.headers.common['Authorization'] = `Bearer ${token[1]}`;
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const reponse = await api.post('token/', { email, password });

    const { token, user } = reponse.data;

    await AsyncStorage.multiSet([
      ['@BoraVer:token', token],
      ['@BoraVer:user', JSON.stringify(user)],
    ]);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setData({ token, user });
  }, []);


  const signOut = useCallback(() => {
    localStorage.removeItem('@BoraVer:token');
    localStorage.removeItem('@BoraVer:user');

    setData({} as AuthState);
    navigate('SignIn',{})
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
 
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}
export {useAuth}
