import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HelpPage from './HelpPage';
import AboutPage from './AboutPage';
import AccountSettingsPage from './AccountSettingsPage';
import HomePage from './HomePage';
import MediaInformationPage from './MediaInformationPage';
import { ArticleList, MediaAccountHeader } from '../../Components';

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
primaryColor: "#002654", 
secondaryColor: "#ffffff", 
complimentaryColor: "#ED2939",
textColor: "#002654",
}

const dataArticle = [
    { id: '0', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#002654", primaryColor: "#002654", secondaryColor: "#ffffff", complimentaryColor: "#ED2939"},
    { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '2', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '3', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '4', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '5', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '6', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
    { id: '7', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
];

export default function MediaAccountPage() {      
  return (
    <SafeAreaProvider>
      <View className="h-full" style={{ backgroundColor: data.secondaryColor}}>
        <View className="h-full flex-col items-center" style={{ backgroundColor: data.secondaryColor}}>
            <View className="h-[4%] w-full" style={{ backgroundColor: data.primaryColor}}></View>
            <View className="w-full h-[8%] justify-center" style={{ backgroundColor: data.primaryColor}}>
                <Image source={{ uri: logomedia }} className="w-[70%] h-full self-center"/>
            </View>
            <View className="h-[22%] w-full">
                <MediaAccountHeader data={data}/>
            </View>
            <View className="h-[55%] w-full">
                <Tab.Navigator
                    initialRouteName='publication'
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIndicatorStyle: {backgroundColor: data.complimentaryColor},
                        tabBarActiveTintColor: data.complimentaryColor,
                        tabBarInactiveTintColor: data.primaryColor,
                        tabBarShowLabel: true,
                        tabBarStyle: {
                            paddingHorizontal: 5,
                            paddingTop: 0,
                            backgroundColor: data.secondaryColor,
                        },                
                        tabBarLabelStyle: {
                            fontWeight: 'bold',
                            fontSize: 11.5,
                            },
                    })}
                >
                    <Tab.Screen name="Publications" children={() => (<ArticleList data={dataArticle} primaryColor={data.primaryColor} secondaryColor={data.secondaryColor} complimentaryColor={data.complimentaryColor} textColor={data.textColor}/>)} />
                    <Tab.Screen name="Informations" children={() => (<MediaInformationPage data={data}/>)} />
                </Tab.Navigator>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}