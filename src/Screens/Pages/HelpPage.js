import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';


export default function HelpPage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-2">
              <View>
                <PageButton title="Contact Us" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Help Center" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Join the beta" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Make a suggestion" nextPage="HelpPage"/>
              </View>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}