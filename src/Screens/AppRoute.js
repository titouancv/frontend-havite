import React, { useContext } from 'react';
import MainScreen from './MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './LogInScreen';
import SignUp from './SignUpScreen';
import InformationsScreen from './InformationsScreen';
import 'react-native-reanimated';
import { AuthContext } from '../Context/AuthContext';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import splash from "../.././assets/splash.png";
import { IdentityScreen } from './IdentityScreen';
import { AboutYouScreen } from './AboutYouScreen';

const Stack = createNativeStackNavigator();

export default function AppRoute() {
const {authData, loading} = useContext(AuthContext);

    if (loading){
        return ( 
            <View className="h-full w-full bg-primary flex justify-center items-center">
                <Text>loading</Text>
            </View>
        )
    }
  return (
      <NavigationContainer>
        {authData?.accessToken ? 
        (
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                    headerShown: false,
                    animation: 'fade',
                    gestureEnabled: false,
                    }}
                />
            </Stack.Navigator>
        ) 
        : 
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                    headerShown: false,
                    animation: 'fade',
                    gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignUp}
                    options={{
                    headerShown: false,
                    animation: 'fade',
                    gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="Informations"
                    component={InformationsScreen}
                    options={{
                    headerShown: false,
                    title: "",
                    }}
                />
                <Stack.Screen
                    name="Identity"
                    component={IdentityScreen}
                    options={{
                    headerShown: false,
                    title: "",
                    }}
                />
                <Stack.Screen
                    name="AboutYou"
                    component={AboutYouScreen}
                    options={{
                    headerShown: false,
                    title: "",
                    }}
                />
            </Stack.Navigator>
        }
      </NavigationContainer>
  );
}
