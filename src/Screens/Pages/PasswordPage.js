import React, {useContext, useRef} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton, TextInputButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';
import { updtateMedia } from '../../Services/MediaService';
import Headers from '../../Components/Header';
import { TextInputButton2 } from '../../Components/TextInputButton';


export default function PasswordPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [oldPassword, setOldPassword] = React.useState('');
  const [oldPasswordConfirmation, setOldPasswordConfirmation] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const { width, height } = Dimensions.get('window');
  const nav = useNavigation();

  const changePassword = async () => {
    nav.goBack();
  }

  return (
    <>
      <View className="bg-light-1 h-full">
      <View className={`h-[6%]`}/>
      <Headers color={"#305536"} title={"Password"}/>
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
              <TextInputButton2
                title ="Old password"
                placeholderTextColor="#f9f4ea"
                color="#305536" 
                backgroundColor="#305536"
                TextInputHeight={height*0.05}
                onChangeText={setOldPassword}
                returnKeyType="done"
                onSubmitEditing={changePassword}
              />
            </View>
            <View className="w-[95%] self-center">
              <TextInputButton2
                title ="Old password confirmation"
                placeholderTextColor="#f9f4ea"
                color="#305536" 
                backgroundColor="#305536"
                TextInputHeight={height*0.05}
                onChangeText={setOldPasswordConfirmation}
                returnKeyType="done"
                onSubmitEditing={changePassword}
              />
            </View>
            <View className="w-[95%] self-center">
              <TextInputButton2
                title ="New password"
                color="#305536" 
                backgroundColor="#305536"
                TextInputHeight={height*0.05}
                onChangeText={setNewPassword}
                returnKeyType="done"
                onSubmitEditing={changePassword}
              />
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary rounded-lg p-2" onPress={changePassword}>
                <Text className="text-body-text font-bold text-light-1 self-center">Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );  
}