import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext, useAuth } from '../Context/AuthContext';
import { TextInputButton2 } from '../Components/TextInputButton';


const Login = ({ navigation }) => {
    const [emailAddress, onChangeEmailAddress] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loginSentence, onChangeLoginSentence] = React.useState('');
    const [logFail, setLogFail] = React.useState(false);
    const { width, height } = Dimensions.get('window');

    const {login, loading} = useContext(AuthContext);

    if (loading){
        return ( 
            <View className="h-full w-full bg-primary flex justify-center items-center">
                <Text>loading</Text>
            </View>
        )
    }

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
      <View className="flex-col bg-primary h-full">
      <View className={`h-[10%]`}/>
        <View className="w-[95%] self-center">
            <View className="mb-8">
                <Text className="text-h3 font-bold color-light-1">Hey welcome back!</Text>
                <Text className="text-body-text font-bold color-light-1">Happy to see you again on Havite</Text>
            </View>
            <TextInputButton2
                title ="Email" 
                placeholderTextColor="#305536"
                color="#f9f4ea" 
                backgroundColor="#f9f4ea"
                TextInputHeight={height*0.05}
                onChangeText={onChangeEmailAddress}
                returnKeyType="done"
                keyboardType="email-address"
                autoComplete='email'
              />
            <TextInputButton2
                title ="Password" 
                placeholderTextColor="#305536"
                color="#f9f4ea" 
                backgroundColor="#f9f4ea"
                TextInputHeight={height*0.05}
                onChangeText={onChangePassword}
                returnKeyType="done"
                secureTextEntry={true}
              />
            <View className="flex-row my-1">
                <Text className="text-tiny-text color-light-2 mr-1">You don't remember your password?</Text>
                <Pressable>
                    <Text className="text-tiny-text color-light-2 font-bold underline">Clic Here</Text>
                </Pressable>
            </View>
            <View className=" w-full self-center mt-4">
                <TouchableOpacity 
                onPress={isRightInformation}
                className="bg-secondary rounded-lg px-2">
                    <Text className="text-h5 text-center font-bold color-light-1 my-2">Login</Text>
                </TouchableOpacity>
                <View className="flex-row my-1">
                    <Text className="text-tiny-text color-secondary mr-1">{loginSentence}</Text>
                </View>
            </View>
            <View className="w-full self-center justify-between flex-row my-6">
                <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
                <Text className="text-caption-text color-light-2 mx-2">Or login with</Text>
                <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
            </View>
            <View className=" w-full space-x-2 flex-row">
                <View className=" w-[49%] self-center">
                    <TouchableOpacity className="bg-light-1 rounded-lg px-2">
                        <Text className="text-body-text text-center font-bold color-primary my-2">Google</Text>
                    </TouchableOpacity>
                </View>
                <View className=" w-[49%] self-center">
                    <TouchableOpacity className="bg-light-1 rounded-lg px-2">
                        <Text className="text-body-text text-center font-bold color-primary my-2">Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-[90%] self-center justify-center flex-row my-4">
                <Text className="text-caption-text color-light-2 mr-2">You don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text className="text-caption-text color-light-2 font-bold underline">Sign up</Text>
                </Pressable>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default Login