import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Footer, Article } from '../../Components';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const data = [
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#002654", primaryColor: "#002654", secondaryColor: "#ffffff", complimentaryColor: "#ED2939"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '1', name: 'John Doe', imageUrl: '',  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
];

export default function HomePage() {

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
    <SafeAreaProvider>
      <View className="bg-primary h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full h-[6%] bg-primary"></View>
            <View className="w-full bg-light-1 flex justify-center">
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                pagingEnabled
                />
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}