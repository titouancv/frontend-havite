import React from 'react';
import { Login, SignUp, InformationsScreen, MainScreen} from './src/Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-reanimated';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Information"
          component={InformationsScreen}
          options={{
            headerShown: true,
            title: "",
            headerBackTitleVisible: false,
            headerStyle: {backgroundColor: '#305536'},
            headerTintColor: "#f9f4ea",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
