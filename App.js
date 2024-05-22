import React from 'react';
import { Login, SignUp, InformationsScreen, MainScreen} from './src/Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from './src/Context/AuthContext';
import 'react-native-reanimated';
import AppRoute from './src/Screens/AppRoute';

export default function App() {

  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}
