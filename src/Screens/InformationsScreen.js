import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';
import Headers from '../Components/Header';
import { TextInputButton2 } from '../Components/TextInputButton';
import ScreenIndicator from '../Components/ScreenIndicator';

const InformationsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [rightInformation, setRightInformation] = useState(true);
  const [loginSentence, setLoginSentence] = React.useState('');
  const { width, height } = Dimensions.get('window');
  const {signInUser} = useContext(AuthContext);

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
        navigation.navigate("Identity");
      }
  };

  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#f9f4ea"} title={"Informations"}/>
        <View className="w-[95%] self-center space-y-2 mt-8">
          <ScreenIndicator pageIndex={0} indicatorNumber={3}/>
          <View>
            <TextInputButton2
              title ="Email" 
              placeholderTextColor="#305536"
              color="#f9f4ea" 
              backgroundColor="#f9f4ea"
              TextInputHeight={height*0.05}
              onChangeText={setEmail}
              returnKeyType="done"
              keyboardType="email-address"
              autoComplete='email'
            />
          </View>
          <View>
            <TextInputButton2
              title ="Password" 
              placeholderTextColor="#305536"
              color="#f9f4ea" 
              backgroundColor="#f9f4ea"
              TextInputHeight={height*0.05}
              onChangeText={setPassword}
              returnKeyType="done"
              secureTextEntry={true}
            />
          </View>
          <View>
            <TextInputButton2
              title ="Confirm password" 
              placeholderTextColor="#305536"
              color="#f9f4ea" 
              backgroundColor="#f9f4ea"
              TextInputHeight={height*0.05}
              onChangeText={setPasswordConfirm}
              returnKeyType="done"
              secureTextEntry={true}
            />
              <View className="flex-row my-1">
                  <Text className="text-tiny-text color-light-1 mr-1">There must be at least 8 characters including 1 uppercase, 1 lowercase, 1 number and a special character (ex: ?./$)</Text>
              </View>
          </View>
          {email !== "" && password !== "" && passwordConfirm !== "" &&(<View className=" w-full self-center pt-4">
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

export default InformationsScreen