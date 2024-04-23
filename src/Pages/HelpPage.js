import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function HelpPage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-2">
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Contact Us</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Help Center</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Join the beta</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}