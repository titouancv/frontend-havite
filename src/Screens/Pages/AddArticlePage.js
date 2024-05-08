import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {NewArticle } from '../../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";
const item = { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complimentaryColor: "#ffc700"};
let dataFrames = [];


export default function AddArticlePage() {
  return (
      <View className="bg-primary h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full h-[6%] bg-primary"></View>
            <View className="w-full h-[84%] bg-light-1 flex-col justify-center items-center space-y-4">
                <View className="h-3/4 w-full flex justify-center">
                    <NewArticle 
                    date={item.date} 
                    logoMedia={item.logoMedia}
                    articleType={item.articleType}
                    authors={item.authors} 
                    sources={item.sources}
                    tags={item.tags} 
                    primaryColor={item.primaryColor}
                    secondaryColor={item.secondaryColor} 
                    complimentaryColor={item.complimentaryColor}
                    textColor={item.textColor}
                    dataFrames={dataFrames}    
                    />       
                </View>
            </View>
        </View>
      </View>
  );
}