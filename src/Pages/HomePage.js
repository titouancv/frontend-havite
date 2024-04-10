import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

let logomedia = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Le_monde_logo.svg/1280px-Le_monde_logo.svg.png"

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

const ListItem = ({ name, imageUrl }) => (
    <View className="flex flex-row w-full">
        <TouchableOpacity className="flex w-1/2 items-center bg-white rounded-2xl mx-4 mb-4 space-y-4">
            <View className="w-full h-10 flex justify-center items-center bg-orange-200 rounded-t-xl">
            <Image source={{ uri: logomedia }} className="w-1/2 h-3/4 object-contain" />
            </View>
            <View className="m-3">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies diam non mi rutrum vulputate. Proin nec mi elit. Suspendisse eget faucibus purus, ut egestas sapien. Mauris egestas metus vestibulum, fermentum magna non, dignissim dui. Donec viverra imperdiet libero, non volutpat ante consectetur in. Ut eleifend purus felis. Phasellus quis egestas nunc. Proin fermentum est nec eros iaculis blandit. Nam tempus tellus odio, at vulputate justo tincidunt eu. Nam tortor odio, interdum eget ligula nec, rhoncus gravida risus. Phasellus suscipit ac massa ut cursus. Cras sem odio, porttitor ac nisl id, molestie suscipit urna. Quisque non augue felis.
        Aenean congue metus nec dolor porta, faucibus facilisis magna tincidunt.
            </Text>
            </View>
        </TouchableOpacity>
        <View className="flex w-1/2 items-center bg-white rounded-2xl mx-4 mb-4 space-y-4">
            <Text>Hello</Text>
        </View>
    </View>
);

export default function HomePage() {
  const renderItem = ({ item }) => (
    <ListItem name={item.name} imageUrl={item.imageUrl} />
  );

  return (
    <View className="h-[90%] flex flex-col w-full bg-white">
        <View className="w-full h-[10%] bg-[#002B0F]">
            <Text>azertyuiop</Text>
        </View>
        <View className="w-full bg-blue-200 flex justify-center">
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    </View>
  );
}