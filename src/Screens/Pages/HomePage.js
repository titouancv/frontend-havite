import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {Article } from '../../Components';

import { SafeAreaProvider } from 'react-native-safe-area-context';

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";


const data = [
  { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complimentaryColor: "#ffc700"},
  { id: '1', logoMedia: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/871354/logo_k_monochrome_e6b2vv.png",  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#1e32c8", secondaryColor: "#fa1e14", complimentaryColor: "#ffc800"},
  { id: '2', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '3', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '4', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '5', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '6', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
  { id: '7', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complimentaryColor: "#e8d5ae"},
];

export default function HomePage() {

  const renderItem = ({ item }) => (
    <Article 
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
    title="Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne"
    text="La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars."
      
    />
  );

  return (
    <SafeAreaProvider>
      <View className="bg-primary h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full h-[6%] bg-primary"></View>
            <View className="w-full h-[94%] bg-light-1 flex justify-center">
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}