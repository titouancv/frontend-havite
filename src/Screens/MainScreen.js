import React from 'react';
import { HomeRoute, UsersProfilRoute } from './Routes';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainScreen() {
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
                    borderTopWidth: 4,
                    borderBlockColor: '#ff7d72',
                }
            })}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeRoute} 
            />
            <Tab.Screen 
            name="Profil" 
            component={UsersProfilRoute} 
            />
        </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default MainScreen