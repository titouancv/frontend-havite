import React from 'react';
import { HomePage, MediaAccountPage } from '../Pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const HomeStack = createNativeStackNavigator();

export default function HomeRoute() {

  return (
    <HomeStack.Navigator
      initialRouteName='HomePage'
      screenOptions={() => ({
                style: {
                    height: 90,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#305536',
                    position: 'absolute',
                    borderTopWidth: 0,
                }
            })}
    >
      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          title: "Home"
        }}
      />
      <HomeStack.Screen
        name="MediaAccountPage"
        component={MediaAccountPage}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "",
          headerBackTitleVisible: false,
          headerTintColor: "#f9f4ea",
          headerLargeTitle: false
        }}
      />
    </HomeStack.Navigator>
  );
}
