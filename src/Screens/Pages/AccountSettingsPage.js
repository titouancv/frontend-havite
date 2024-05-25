import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';


export default function AccountSettingsPage() {
  const {signOut, authData} = useContext(AuthContext)
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4">
            <View className="w-[95%] self-center py-4 space-y-2">
                <View className="rounded-xl w-22 border-4 border-primary flex justify-center self-center">
                  <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }} className="h-20 w-20 rounded-lg self-center" />
                </View>
                <View className="flex-row space-x-2 w-full justify-center">
                    <Text className="text-h4 text-primary">{authData.firstName}</Text>
                    <Text className="text-h4 font-bold text-primary">{authData.lastName}</Text>
                </View>
            </View>
            <View className="w-[95%] self-center space-y-1">
              <Text className="text-caption-text text-primary">SETTINGS</Text>
              <View>
                <PageButton title="Profile Picture" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Email" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Password" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Birthday" nextPage="HelpPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center border-4 border-secondary rounded-lg p-1 " onPress={signOut}>
                <Text className="text-body-text font-bold text-secondary self-center">Sign out</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full justify-center space-x-1 flex-row pt-2">
              <Text className="text-tiny-text text-primary self-center">You joined Havite on</Text>
              <Text className="text-tiny-text text-primary font-bold self-center">14/03/2024</Text>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}