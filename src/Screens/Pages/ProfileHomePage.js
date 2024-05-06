import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';


export default function ProfilHomePage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4">
            <View className="w-full h-[6%] bg-primary"></View>
            <ScrollView className="space-y-4">
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
              <View>
                <PageButton title="Followed media" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Post Liked" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Message" nextPage="HelpPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">SETTINGS</Text>
              <View>
                <PageButton title="Notifications" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Privacy" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Others" nextPage="OtherPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">ABOUT</Text>
              <View>
                <PageButton title="Share Havite" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Help" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="About" nextPage="AboutPage"/>
              </View>
            </View>
            </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}