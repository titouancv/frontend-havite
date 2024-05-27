import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [rightInformation, setRightInformation] = useState(true);
    const [loginSentence, setLoginSentence] = React.useState('');

    const {setLogInformation} = useContext(AuthContext);

    useEffect(() => {
        if (rightInformation){
            setLoginSentence("")
        }
        else {
            setLoginSentence("Incorrect email or password, login failed.")
        }
    })

    const isRightInformation = () => {
        let rightPswrd = setLogInformation(email, password, passwordConfirm)
        setRightInformation(rightPswrd);
        if(rightPswrd) {
            navigation.navigate("Information");
        }
    };

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full justify-center">
        <View className=" mb-8">
            <Text className="text-h4 text-center font-bold color-light-1">Hey Welcome On Havite!</Text>
            <Text className="text-body-text text-center font-bold color-light-1">Are you ready to see the latest news?</Text>
        </View>
        <View className="space-y-4">
            <View className=" w-[90%] self-center">
                <TextInputButton title="Email Address" placeholder="Enter your email address" autoComplete='email'  secureTextEntry={false} setText={setEmail} keyboardType="email-address"/>
            </View>
            <View className=" w-[90%] self-center space-y-2">
                <View>
                    <TextInputButton title="Password" placeholder="Enter your password" autoComplete='new-password'  secureTextEntry={true} setText={setPassword}/>
                </View>
                <View>
                    <TextInputButton title="Confirm Password" placeholder="Confirm your password" autoComplete='new-password'  secureTextEntry={true} setText={setPasswordConfirm}/>
                </View>
                <View className="flex-row ">
                    <Text className="text-tiny-text color-light-1 mr-1">There must be at least 8 characters including 1 uppercase, 1 lowercase, 1 number and a special character (ex: ?./$)</Text>
                </View>
            </View>
            <View className=" w-[90%] self-center pt-2">
                <TouchableOpacity className="bg-secondary rounded-lg px-2" onPress={isRightInformation}>
                    <Text className="text-h5 text-center font-bold color-light-1 my-2">Next</Text>
                </TouchableOpacity>
                <View className="flex-row my-1">
                    <Text className="text-tiny-text color-secondary mr-1">{loginSentence}</Text>
                </View>
            </View>
        </View>
        <View className="w-[90%] self-center justify-between flex-row my-6 pt-2">
            <View className="h-1 w-1/3 bg-light-2 flex self-center"></View>
            <Text className="text-caption-text color-light-2 mx-2">Or sign up with</Text>
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