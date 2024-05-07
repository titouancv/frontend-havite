import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { HomeRoute, UsersProfilRoute } from './Routes';
import { AddArticlePage } from './Pages';
import { BottomTabBar } from '../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <SafeAreaProvider className="">
        <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeRoute} 
            />
            <Tab.Screen 
            name="Post" 
            component={AddArticlePage} 
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