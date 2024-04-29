import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const InformationsScreen = ({ navigation }) => {

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full pt-8">
        <View className=" mb-8">
            <Text className="text-h5 text-center font-bold color-light-2">Let's get to know each other first!</Text>
        </View>
        <View className="space-y-4">
        <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">First Name</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                <TextInput placeholder='Enter your first name' autoComplete='given-name' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Last Name</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                    <TextInput placeholder='Enter your last name' autoComplete='family-name' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Birthday</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                    <TextInput placeholder='Enter your last name' autoComplete='birthdate-full' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center pt-2">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2" onPress={() => navigation.navigate("Main")}>
                    <Text className="text-h5 text-center font-bold color-primary my-2">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default InformationsScreen