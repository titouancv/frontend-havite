import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Footer, Article } from '../../Components';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const data = [
  { id: '1', name: 'John Doe', imageUrl: '' },
  { id: '2', name: 'Jane Smith', imageUrl: '' },
  { id: '3', name: 'Mike Johnson', imageUrl: '' },
  { id: '4', name: 'John Doe', imageUrl: '' },
  { id: '5', name: 'Jane Smith', imageUrl: '' },
  { id: '6', name: 'Mike Johnson', imageUrl: '' },
  { id: '7', name: 'John Doe', imageUrl: '' },
  { id: '8', name: 'Jane Smith', imageUrl: '' },
  { id: '9', name: 'Mike Johnson', imageUrl: '' },
  { id: '10', name: 'John Doe', imageUrl: '' },
  { id: '11', name: 'Jane Smith', imageUrl: '' },
  { id: '12', name: 'Mike Johnson', imageUrl: '' },
];

export default function HomePage() {
  const renderItem = ({ item }) => (
    <Article name={item.name} imageUrl={item.imageUrl} text="La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars."/>
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
                />
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}