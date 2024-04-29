import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function ProfilHomePage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4">
            <View className="w-full h-[6%] bg-primary"></View>
            <View className="w-[95%] self-center">
              <View className="w-full bg-primary flex-col justify-center items-center rounded-lg p-4 py-6 space-y-4">
                <View className="rounded-lg w-[25%] flex justify-center">
                  <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }} className="h-20 w-20 rounded-lg self-center" />
                </View>
                <View className="w-full space-y-2">
                  <View className="flex-row space-x-2 w-full justify-center">
                    <Text className="text-h5 text-light-1">Titouan</Text>
                    <Text className="text-h5 font-bold text-light-1">Carion-Vignaud</Text>
                  </View>
                  <TouchableOpacity className="border-2 border-secondary rounded-lg p-1" onPress={() => navigation.navigate("AccountSettingsPage") }>
                    <Text className="text-caption-text text-secondary self-center">Account settings</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">FONCTIONALITY</Text>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Followed media</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Messages</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">SETTINGS</Text>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Notifications</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Privacy</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("OtherPage") }>
                <Text className="text-body-text font-bold text-light-1">Others</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">ABOUT</Text>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") }>
                <Text className="text-body-text font-bold text-light-1">Share Havite</Text>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("HelpPage") } >
                <Text className="text-body-text font-bold text-light-1">Help</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center"/>
              </TouchableOpacity>
              <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => navigation.navigate("AboutPage") }>
                <Text className="text-body-text font-bold text-light-1">About</Text>                
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}