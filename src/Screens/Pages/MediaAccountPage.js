import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MediaInformationPage from './MediaInformationPage';
import { ArticleList, MediaAccountHeader } from '../../Components';
import { MediaContext } from '../../Context/MediaContext';

const Tab = createMaterialTopTabNavigator();

let logomedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png"

let data = { id: '0', 
name: 'Le Monde',
email: 'lemonde@gmail.com', 
password: 'Ghyftr4678!', 
logo: '', 
bio: "Bienvenue sur la chaîne YouTube du Monde. Chaque jour, des vidéos pour comprendre l'actualité. Sciences, géopolitique, histoire, pop culture... Rejoignez-nous !",
followers: ['272652678252', '14272435627'], 
numberOfFollowers: 123567,
articles: ["272652678252", "14272435627"],
numberOfArticles: 124,
foundationDate: '12/04/1944',
website: 'lemonde.fr',
owner: ['Groupe Le Monde'],
founder: ['Hubert Beuve-Méry'],
managingEditor: ['Caroline Monnot'],
publishingDirector: [' Louis Dreyfus', 'Jérôme Fenoglio'],
editorialAddress: '67, avenue Pierre-Mendès-France, Paris, France',
numberOfJournalist: 76,
primaryColor: "#000000", 
secondaryColor: "#222222", 
complementaryColor: "#ffc700",
textColor: "#ffffff",
}

export default function MediaAccountPage() { 
  const {mediaData} = useContext(MediaContext);
  const { width, height } = Dimensions.get('window');

  return (
      <View className="h-full" style={{ backgroundColor: mediaData.secondaryColor}}>
        <View className="h-full flex-col items-center" style={{ backgroundColor: mediaData.secondaryColor}}>
            <View className="h-[4%] w-full" style={{ backgroundColor: mediaData.primaryColor}}></View>
            <View className="w-full h-[8%] justify-center" style={{ backgroundColor: mediaData.primaryColor}}>
              <View className="w-[70%] h-[70%] self-center">
                <Image source={{ uri: mediaData.logo }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
              </View>
            </View>
            <ScrollView className="h-full w-full">
              <View className=" w-full">
                  <MediaAccountHeader colorData={mediaData} data={data}/>
              </View>
              <View className="h-full w-full">
                  <Tab.Navigator
                      initialRouteName='publication'
                      screenOptions={({ route }) => ({
                          headerShown: false,
                          tabBarIndicatorStyle: {backgroundColor: mediaData.complementaryColor},
                          tabBarActiveTintColor: mediaData.complementaryColor,
                          tabBarInactiveTintColor: mediaData.primaryColor,
                          tabBarShowLabel: true,
                          tabBarStyle: {
                              paddingHorizontal: 5,
                              paddingTop: 0,
                              backgroundColor: "#f9f4ea",
                          },                
                          tabBarLabelStyle: {
                              fontWeight: 'bold',
                              fontSize: 11.5,
                              },
                      })}
                  >
                      <Tab.Screen name="Informations" children={() => (<MediaInformationPage data={data}   style={{height: height*0.58}}/>)} />
                  </Tab.Navigator>
              </View>
            </ScrollView>
        </View>
      </View>
  );
}