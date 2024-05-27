import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';


export default function ProfilHomePage() {
    const navigation = useNavigation();
    const {authData} = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4">
            <View className="w-full h-[6%] bg-primary"></View>
            <ScrollView className="space-y-4">
            <View className="w-[95%] self-center">
              <View className="w-full bg-primary flex-col justify-center items-center rounded-lg p-4 py-6 space-y-4">
                <View className="rounded-lg w-[25%] border-4 border-light-1 flex justify-center self-center" style={{backgroundColor: authData.primaryColor}}>
                  <View className="h-20 w-20 rounded-lg self-center">
                    <Image source={{ uri: authData.logo }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
                  </View>
                </View>
                <View className="w-full space-y-2">
                  <View className="flex-row space-x-2 w-full justify-center">
                    <Text className="text-h5 text-light-1">{authData.firstName}</Text>
                    <Text className="text-h5 font-bold text-light-1">{authData.lastName}</Text>
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
            <View className="h-24"></View>
            </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}