import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HelpPage from './HelpPage';
import HomePage from './HomePage';

const Tab = createMaterialTopTabNavigator();

export default function MediaAccountPage() {
    const navigation = useNavigation();
    let logomedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png"

  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col items-center bg-light-1">
            <View className="h-[4%] w-full bg-primary"></View>
            <View className="w-full h-[8%] bg-primary justify-center">
                <Image source={{ uri: logomedia }} className="w-[70%] h-full self-center" />
            </View>
            <View className="h-[22%] w-full bg-light-1 flex-col space-y-2 justify-center">
                <View className="w-[90%] self-center flex-row justify-between">
                    <View className="w-[30%] flex-col justify-center items-center bg-primary rounded-lg p-1">
                        <Text className="text-body-text text-light-1 font-bold">123</Text>
                        <Text className="text-caption-text text-light-1 ">Publications</Text>
                    </View>
                    <View className="w-[30%] flex-col justify-center items-center bg-primary rounded-lg p-1">
                        <Text className="text-body-text text-light-1 font-bold">123K</Text>
                        <Text className="text-caption-text text-light-1 ">Followers</Text>
                    </View>
                    <View className="w-[30%] flex-col justify-center items-center bg-primary rounded-lg p-1">
                        <Text className="text-body-text text-light-1 font-bold">65</Text>
                        <Text className="text-caption-text text-light-1 ">Journalists</Text>
                    </View>
                </View>
                <TouchableOpacity className="w-[90%] border-4 border-primary rounded-lg flex self-center items-center p-1">
                    <Text className="text-caption-text text-primary font-bold">Follow</Text>
                </TouchableOpacity>
                <View className="w-[90%] self-center">
                    <Text className="text-caption-text text-primary">Bienvenue sur la chaîne YouTube du Monde. Chaque jour, des vidéos pour comprendre l'actualité. Sciences, géopolitique, histoire, pop culture... Rejoignez-nous !</Text>
                </View>
            </View>
            <View className="h-full w-full">
                <Tab.Navigator
                    initialRouteName='publication'
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIndicatorStyle: {backgroundColor: '#ff7d72'},
                        tabBarActiveTintColor: '#ff7d72',
                        tabBarInactiveTintColor: '#305536',
                        tabBarShowLabel: true,
                        tabBarStyle: {
                            paddingHorizontal: 5,
                            paddingTop: 0,
                            backgroundColor: '#f9f4ea',
                        },                
                        tabBarLabelStyle: {
                            fontWeight: 'bold',
                            fontSize: '11.5px',
                            },
                    })}
                >
                    <Tab.Screen name="Publications" component={HomePage} />
                    <Tab.Screen name="Playlist" component={HelpPage} />
                    <Tab.Screen name="Informations" component={HelpPage} />
                </Tab.Navigator>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}