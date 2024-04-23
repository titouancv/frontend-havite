import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function AccountSettingsPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4">
            <View className="w-[95%] self-center py-4 space-y-2">
                <View className="rounded-xl w-22 border-4 border-secondary flex justify-center self-center">
                  <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }} className="h-20 w-20 rounded-lg self-center" />
                </View>
                <View className="flex-row space-x-2 w-full justify-center">
                    <Text className="text-h4 text-primary">Titouan</Text>
                    <Text className="text-h4 font-bold text-primary">Carion-Vignaud</Text>
                </View>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">SETTINGS</Text>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Profile Picture</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Email</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Password</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Birthday</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <TouchableOpacity className="w-full self-center border-4 border-secondary rounded-lg p-1 mt-2">
                <Text className="text-body-text font-bold text-secondary self-center">Sign out</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}