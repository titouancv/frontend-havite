import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {Article } from '../../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function AddArticlePage() {

  const renderItem = ({ item }) => (
    <Article 
    date={item.date} 
    articleType={item.articleType}
    authors={item.authors} 
    sources={item.sources}
    tags={item.tags} 
    primaryColor={item.primaryColor}
    secondaryColor={item.secondaryColor} 
    complimentaryColor={item.complimentaryColor}
    textColor={item.textColor}
    text="La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars."
      
    />
  );

  return (
      <View className="bg-primary h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full h-[6%] bg-primary"></View>
            <View className="w-full h-[84%] bg-light-1 flex-col justify-center space-y-4">
                <View className="h-3/4 flex justify-center items-center">
                    <TouchableOpacity className="w-[90%] h-full border-4 border-primary rounded-lg p-1 flex-col justify-center items-center space-y-2">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" }} className="h-20 w-20"/>
                        <Text className="text-h5 text-primary font-bold self-center">Add a Frame</Text>
                    </TouchableOpacity>
                </View>
                <View className="items-center">
                    <TouchableOpacity className="w-[90%] border-4 border-secondary rounded-lg p-1">
                        <Text className="text-h5 text-secondary font-bold self-center">Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
  );
}