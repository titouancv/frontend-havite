import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SignUp = ({ navigation }) => {

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full justify-center">
        <View className=" mb-8">
            <Text className="text-h4 text-center font-bold color-light-2">Hey Welcome On Havite!</Text>
            <Text className="text-body-text text-center font-bold color-light-2">Are you ready to see the latest news?</Text>
        </View>
        <View className="space-y-4">
        <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">First Name</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                <TextInput placeholder='Enter your first name' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Last Name</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                    <TextInput placeholder='Enter your last name' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Email Address</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                <TextInput placeholder='Enter your email address' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Password</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                    <TextInput placeholder='Enter your password' placeholderTextColor={"#ff7d72"} className="text-body-text color-secondary my-2"/>
                </View>
                <View className="flex-row my-1">
                    <Text className="text-tiny-text color-light-2 mr-1">There must be at least 8 characters including 1 uppercase, 1 lowercase, 1 number and a special character (ex: ?./$)</Text>
                </View>
            </View>
            <View className=" w-[90%] self-center mt-4">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-h5 text-center font-bold color-primary my-2">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="w-[90%] self-center justify-between flex-row my-6">
            <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
            <Text className="text-caption-text color-light-2 mx-2">Or sing up with</Text>
            <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
        </View>
        <View className="w-[90%] self-center justify-between flex-row">
            <View className=" w-[49%] self-center">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-body-text text-center font-bold color-primary my-2">Google</Text>
                </TouchableOpacity>
            </View>
            <View className=" w-[49%] self-center">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-body-text text-center font-bold color-primary my-2">Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="w-[90%] self-center justify-center flex-row my-4">
            <Text className="text-caption-text color-light-2 mr-2">You have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text className="text-caption-text color-light-2 font-bold underline">Login</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default SignUp