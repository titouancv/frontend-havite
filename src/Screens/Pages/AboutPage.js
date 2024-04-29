import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function AboutPage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-2">
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">CGU</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Confidentality Policy</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Join Us</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
            <View className="w-[95%] self-center space-y-1 pt-2">
              <Text className="text-caption-text text-primary self-center mb-2">Version 1.0</Text>
              <Text className="text-tiny-text text-primary self-center">Created in France by</Text>
              <Text className="text-tiny-text text-primary self-center">Titouan Carion Vignaud and Arthur Colinet</Text>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}