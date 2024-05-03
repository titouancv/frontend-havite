import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';

export default function AboutPage() {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-2">
              <View>
                <PageButton title="CGU" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Confidentality Policy" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Join Us" nextPage="HelpPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-1 pt-2">
              <Text className="text-caption-text text-primary self-center my-1 font-bold">Version 1.0</Text>
              <Text className="text-tiny-text text-primary self-center">Created in France by</Text>
              <Text className="text-tiny-text text-primary self-center">Titouan Carion Vignaud and Arthur Colinet</Text>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}