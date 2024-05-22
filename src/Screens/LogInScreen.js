import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext, useAuth } from '../Context/AuthContext';


const Login = ({ navigation }) => {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loginSentence, onChangeLoginSentence] = React.useState('');
    const [logFail, setLogFail] = React.useState(false);

    const {login} = useContext(AuthContext);

    const isRightInformation = () => {
        setLogFail(login(emailAddress, password));
    };

    useEffect(() => {
        if (logFail){
            onChangeLoginSentence("Incorrect email or password, login failed.")
        }
        else {
            onChangeLoginSentence("")
        }
    })

    return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full justify-center">
        <View className=" mb-8">
            <Text className="text-h3 text-center font-bold color-light-2">Hey Welcome Back!</Text>
            <Text className="text-body-text text-center font-bold color-light-2">Happy to see you again on Havite</Text>
        </View>
        <View className="space-y-4">
            <View className=" w-[90%] self-center">
            <TextInputButton title="Email Address" placeholder="Enter your email" autoComplete='email'  secureTextEntry={false} value={emailAddress} setText={onChangeEmailAddress}/>
            </View>
            <View className=" w-[90%] self-center">
                <TextInputButton title="Password" placeholder="Enter your password" autoComplete='current-password' secureTextEntry={true} value={password} setText={onChangePassword}/>
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