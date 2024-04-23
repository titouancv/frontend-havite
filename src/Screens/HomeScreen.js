import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Footer, Article } from '../Components';

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

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <Article name={item.name} imageUrl={item.imageUrl} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies diam non mi rutrum vulputate. Proin nec mi elit. Suspendisse eget faucibus purus, ut egestas sapien. Mauris egestas metus vestibulum, fermentum magna non, dignissim dui. Donec viverra imperdiet libero, non volutpat ante consectetur in. Ut eleifend purus felis. Phasellus quis egestas nunc. Proin fermentum est nec eros iaculis blandit. Nam tempus tellus odio, at vulputate justo tincidunt eu. Nam tortor odio, interdum eget ligula nec, rhoncus gravida risus. Phasellus suscipit ac massa ut cursus. Cras sem odio, porttitor ac nisl id, molestie suscipit urna. Quisque non augue felis.
    Aenean congue metus nec dolor porta, faucibus facilisis magna tincidunt.
  "/>
  );

  return (
    <SafeAreaProvider>
      <View className="bg-primary h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full h-[6%] bg-primary border-b-2 border-secondary"></View>
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