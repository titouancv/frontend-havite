import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';
import Headers from '../Components/Header';
import { TextInputButton2 } from '../Components/TextInputButton';
import ScreenIndicator from '../Components/ScreenIndicator';

export const IdentityScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [loginSentence, setLoginSentence] = useState("");
  const [rightInformation, setRightInformation] = useState(true);
  const { width, height } = Dimensions.get('window');
  const {setLogIdentity} = useContext(AuthContext);

  useEffect(() => {
      if (rightInformation){
          setLoginSentence("")
      }
      else {
          setLoginSentence("Incorrect email or password, login failed.")
      }
  })

  const isRightInformation = () => {
      let rightPswrd = setLogIdentity(firstName, lastname)
      if(rightPswrd) {
        navigation.navigate("AboutYou");
      }
  };

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#f9f4ea"} title={"Identity"}/>
        <View className="w-[95%] self-center space-y-2 mt-8">
        <ScreenIndicator pageIndex={1} indicatorNumber={3}/>
          <View>
            <TextInputButton2
              title ="First name" 
              placeholderTextColor="#305536"
              color="#f9f4ea" 
              backgroundColor="#f9f4ea"
              TextInputHeight={height*0.05}
              onChangeText={setFirstName}
              returnKeyType="done"
            />
          </View>
          <View>
            <TextInputButton2
              title ="Last name" 
              placeholderTextColor="#305536"
              color="#f9f4ea" 
              backgroundColor="#f9f4ea"
              TextInputHeight={height*0.05}
              onChangeText={setLastName}
              returnKeyType="done"
            />
          </View>
          {firstName !== "" && lastname !== "" && (<View className=" w-full self-center pt-4">
              <TouchableOpacity 
              onPress={isRightInformation}
              className="bg-secondary rounded-lg px-2">
                  <Text className="text-h5 text-center font-bold color-light-1 my-2">Next</Text>
              </TouchableOpacity>
              <View className="flex-row my-1">
                  <Text className="text-tiny-text color-secondary mr-1">{loginSentence}</Text>
              </View>
          </View>)}
        </View>
      </View>
    </SafeAreaProvider>
  );
}
