import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
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

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";

const dataArticle = [
  { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complementaryColor: "#ffc700", likes: 0, dislikes: 0},
  { id: '1', logoMedia: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/871354/logo_k_monochrome_e6b2vv.png",  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#1e32c8", secondaryColor: "#fa1e14", complementaryColor: "#ffc800", likes: 0, dislikes: 0},
  { id: '2', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
  { id: '3', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
  { id: '4', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
  { id: '5', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
  { id: '6', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
  { id: '7', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#305536", primaryColor: "#305536", secondaryColor: "#f9f4ea", complementaryColor: "#e8d5ae", likes: 0, dislikes: 0},
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

export default function MediaAccountPage() { 
  const {mediaData} = useContext(MediaContext);
  return (
    <SafeAreaProvider>
      <View className="h-full" style={{ backgroundColor: mediaData.secondaryColor}}>
        <View className="h-full flex-col items-center" style={{ backgroundColor: mediaData.secondaryColor}}>
            <View className="h-[4%] w-full" style={{ backgroundColor: mediaData.primaryColor}}></View>
            <View className="w-full h-[8%] justify-center" style={{ backgroundColor: mediaData.primaryColor}}>
              <View className="w-[70%] h-[70%] self-center">
                <Image source={{ uri: mediaData.logo }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
              </View>
            </View>
            <View className="h-[22%] w-full">
                <MediaAccountHeader colorData={mediaData} data={data}/>
            </View>
            <View className="h-[63%] w-full">
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
                    <Tab.Screen name="Publications" children={() => (<ArticleList data={dataArticle} dataFrames={dataFrames} primaryColor={mediaData.primaryColor} secondaryColor={mediaData.secondaryColor} complementaryColor={mediaData.complementaryColor} textColor={mediaData.textColor}/>)} />
                    <Tab.Screen name="Informations" children={() => (<MediaInformationPage data={data}/>)} />
                </Tab.Navigator>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}