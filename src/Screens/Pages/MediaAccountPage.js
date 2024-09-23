import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Headers from '../../Components/Header';
import MediaInformationPage from './MediaInformationPage';
import { ArticleList, MediaAccountHeader } from '../../Components';
import { MediaContext } from '../../Context/MediaContext';
import MediaHeader from '../../Components/MediaHeader';

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
      <View className="h-full bg-light-1">
        <View className={`h-[6%]`} style={{ backgroundColor: mediaData.primaryColor}}/>
        <Headers color={mediaData.complementaryColor} backgroundColor={mediaData.primaryColor}/>
        <MediaHeader
          articleNb={124} 
          followers={450300} 
          followed={124}
          bio={data.bio}
          primaryColor={mediaData.primaryColor}
          secondaryColor={mediaData.secondaryColor}
          complementaryColor={mediaData.complementaryColor}
          textColor={mediaData.textColor}
          logo={mediaData.logo}
        />
      </View>
  );
}