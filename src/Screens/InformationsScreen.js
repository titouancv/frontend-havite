import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';

const InformationsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  const {signInUser} = useContext(AuthContext);

  const signIn = () => {
    signInUser(firstName, lastname, birthday);
  }

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full pt-8">
        <View className=" mb-8">
            <Text className="text-h5 text-center font-bold color-light-1">Let's get to know each other first!</Text>
        </View>
        <View className="space-y-4">
          <View className=" w-[90%] self-center">
            <TextInputButton title="First Name" placeholder="Enter your first name" autoComplete=''  secureTextEntry={false} setText={setFirstName}/>
          </View>
          <View className=" w-[90%] self-center">
            <TextInputButton title="Last Name" placeholder="Enter your last name" autoComplete='' secureTextEntry={false} setText={setLastName}/>
          </View>
          <View className=" w-[90%] self-center">
            <TextInputButton title="Birthday" placeholder="Enter your birthday" autoComplete='birthday' secureTextEntry={false} setText={setBirthday}/>
          </View>
          <View className=" w-[90%] self-center pt-2">
              <TouchableOpacity className="bg-secondary rounded-lg px-2" onPress={signIn}>
                  <Text className="text-h5 text-center font-bold color-light-1 my-2">Sign Up</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default InformationsScreen