import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Article } from '../../Components';
import { BlurView } from 'expo-blur';

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

let dataFrames = [
  { id: '0', 
typeOfFrame:'coverFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
text2: null,
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: null,
illustration3: null,
illustration4: null,
  },
  { id: '1', 
typeOfFrame:'textImageFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
text2: null,
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
illustration3: null,
illustration4: null,
  },
  { id: '2', 
typeOfFrame:'imageTextFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
text2: null,
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
illustration4: null,
  },
  { id: '3', 
typeOfFrame:'textFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars. Dans un arrêté du 19 avril obtenu par l’AFP, que Le Monde a pu consulter, le préfet du Gard a mis en demeure l’entreprise de « suspendre sans délai » l’exploitation de l’un de ses sept captages de Vergèze, ce dernier ayant présenté « un épisode de contamination à partir du 10 mars 2024 et sur plusieurs jours par des germes témoins d’une contamination d’origine fécale (coliformes, Escherichia coli) mais aussi par des germes de l’espèce Pseudomonas aeruginosa ». L’arrêté souligne également que la contamination de l’eau embouteillée « peut faire courir un risque pour la santé des consommateurs ».',
text2: null,
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
illustration4: 'https://www.humanite.fr/wp-content/uploads/2024/04/Perrier.webp',
  },
  { id: '4', 
typeOfFrame:'imageFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
text2: null,
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
illustration4: 'https://www.humanite.fr/wp-content/uploads/2024/04/Perrier.webp',
  },
  { id: '5', 
typeOfFrame:'textImageTextFrame', 
title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
text2: 'Dans un arrêté du 19 avril obtenu par l’AFP, que Le Monde a pu consulter, le préfet du Gard a mis en demeure l’entreprise de « suspendre sans délai » l’exploitation de l’un de ses sept captages de Vergèze, ce dernier ayant présenté « un épisode de contamination à partir du 10 mars 2024 et sur plusieurs jours par des germes témoins d’une contamination d’origine fécale (coliformes, Escherichia coli) mais aussi par des germes de l’espèce Pseudomonas aeruginosa ». L’arrêté souligne également que la contamination de l’eau embouteillée « peut faire courir un risque pour la santé des consommateurs ».',
text3: null,
text4: null,
illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
illustration2: null,
illustration3: null,
illustration4: null,
  },
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
    dataFrames={dataFrames}    
    />
  );

  return (
    <SafeAreaProvider>
      <View className="h-full relative">
        <View className="w-full h-[6%] absolute top-0 left-0 z-10">
          <BlurView intensity={10} style={styles.blurContainer}></BlurView>
        </View>
        <View className="flex h-full flex-col w-full pt-12">
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

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }});