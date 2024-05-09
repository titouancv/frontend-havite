import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';

const InformationsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full pt-8">
        <View className=" mb-8">
            <Text className="text-h5 text-center font-bold color-light-2">Let's get to know each other first!</Text>
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