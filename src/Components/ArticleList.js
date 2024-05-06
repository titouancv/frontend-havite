import React from 'react';
import { View, ScrollView, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Article from './Article';

import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function ArticleList(props) {

  let data = props.data;

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
      <View className="h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full flex justify-center" style={{ backgroundColor: props.secondaryColor}}>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
      </View>
  );
}