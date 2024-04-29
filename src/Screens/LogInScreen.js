import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Login = ({ navigation }) => {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loginSentence, onChangeLoginSentence] = React.useState('');

    const isRightInformation = () => {
        if (emailAddress == "test@test.com" && password == "test"){
            navigation.navigate("Home") 
        }
        else{
            onChangeLoginSentence("Incorrect email or password, login failed.")
        }
    };

    return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full justify-center">
        <View className=" mb-8">
            <Text className="text-h3 text-center font-bold color-light-2">Hey Welcome Back!</Text>
            <Text className="text-body-text text-center font-bold color-light-2">Happy to see you again on Havite</Text>
        </View>
        <View className="space-y-4">
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Email Address</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                <TextInput 
                placeholder='Enter your email address' 
                placeholderTextColor={"#ff7d72"} 
                onChangeText={email => onChangeEmailAddress(email)}
                autoComplete='email'
                className="text-body-text color-secondary my-2"/>
                </View>
            </View>
            <View className=" w-[90%] self-center">
                <Text className="text-h5 font-bold color-light-2 mb-1">Password</Text>
                <View className="border-2 border-light-3 rounded-lg px-2">
                    <TextInput 
                    placeholder='Enter your password' 
                    placeholderTextColor={"#ff7d72"}
                    secureTextEntry={true} 
                    onChangeText={password => onChangePassword(password)}
                    autoComplete='current-password'
                    className="text-body-text color-secondary my-2"/>
                </View>
                <View className="flex-row my-1">
                    <Text className="text-tiny-text color-light-2 mr-1">You don't remember your password?</Text>
                    <Pressable>
                        <Text className="text-tiny-text color-light-2 font-bold underline">Clic Here</Text>
                    </Pressable>
                </View>
            </View>
            <View className=" w-[90%] self-center mt-4">
                <TouchableOpacity 
                onPress={isRightInformation}
                className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-h5 text-center font-bold color-primary my-2">Login</Text>
                </TouchableOpacity>
                <View className="flex-row my-1">
                    <Text className="text-tiny-text color-secondary mr-1">{loginSentence}</Text>
                </View>
            </View>
        </View>
        <View className="w-[90%] self-center justify-between flex-row my-6">
            <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
            <Text className="text-caption-text color-light-2 mx-2">Or login with</Text>
            <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
        </View>
        <View className="space-y-4">
            <View className=" w-[90%] self-center">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-body-text text-center font-bold color-primary my-2">Google</Text>
                </TouchableOpacity>
            </View>
            <View className=" w-[90%] self-center">
                <TouchableOpacity className="bg-light-2 border-2 border-light-3 rounded-lg px-2">
                    <Text className="text-body-text text-center font-bold color-primary my-2">Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="w-[90%] self-center justify-center flex-row my-4">
            <Text className="text-caption-text color-light-2 mr-2">You don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
                <Text className="text-caption-text color-light-2 font-bold underline">Register</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default Login