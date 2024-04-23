import React from 'react';
import { HomeScreen, UsersProfilScreen } from './Screens';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <SafeAreaProvider className="">
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarActiveTintColor: '#ff7d72',
                tabBarInactiveTintColor: '#eedfc2',
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 90,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#305536',
                    position: 'absolute',
                    borderTopWidth: 0,
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profil" component={UsersProfilScreen} />
        </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default Main