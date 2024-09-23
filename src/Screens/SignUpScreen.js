import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';

const SignUp = ({ navigation }) => {

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full">
        <View className={`h-[10%]`}/>
        <View className="w-[95%] self-center space-y-2">
            <View className=" mb-8">
                <Text className="text-h3 font-bold color-light-1">Hey welcome!</Text>
                <Text className="text-body-text font-bold color-light-1">Are you ready to see the latest news?</Text>
            </View>
            <View className="w-full self-center space-y-4">
                <View className=" w-full self-center">
                    <TouchableOpacity className="bg-secondary rounded-lg p-2 py-16" onPress={() => navigation.navigate("Informations")}>
                        <Text className="text-body-text text-center font-bold color-light-1 my-2">Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View className=" w-full self-center">
                    <TouchableOpacity className="bg-light-1 rounded-lg p-2">
                        <Text className="text-body-text text-center font-bold color-primary my-2">Google</Text>
                    </TouchableOpacity>
                </View>
                <View className=" w-full self-center">
                    <TouchableOpacity className="bg-light-1 rounded-lg p-2">
                        <Text className="text-body-text text-center font-bold color-primary my-2">Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full self-center justify-center flex-row my-4 pt-8">
                <Text className="text-caption-text color-light-2 mr-2">You have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text className="text-caption-text color-light-2 font-bold underline">Login</Text>
                </Pressable>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default SignUp