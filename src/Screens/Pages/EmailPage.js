import React, {useContext, useRef} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton, TextInputButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';
import { updtateMedia } from '../../Services/MediaService';
import Headers from '../../Components/Header';


export default function EmailPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [email, setEmail] = React.useState('');
  const { width, height } = Dimensions.get('window');
  const nav = useNavigation();

  const changeEmail = async () => {
    if (authData.isMedia)
    {
      let mediaData = {
        username: authData.username,
        email,
        "media": {
          name: authData.name,
          bio: authData.bio,
          website: authData.website,
          editorial_address: authData.editorial_address,
          primary_color: authData.primaryColor,
          secondary_color: authData.secondaryColor,
          complementary_color: authData.complementary,
          text_color: authData.textColor,
          foundation_date: authData.foundationDate,
          owner: authData.owners,
          founder: authData.founders,
          managing_editor: authData.managingEditor,
          publishing_editor: authData.publishingEditor
        }
      }
      updtateMedia(mediaData, authData.accessToken, backendURL);
    }
    else {
      let userData = {
        username: authData.username,
        email,
        "customer": {
          first_name: authData.firstName,
          last_name: authData.lastName,
          gender: authData.gender,
          birthday: authData.birthday,
        }
      }
      updtateUser(userData, authData.accessToken, backendURL);
    }
    nav.navigate("AccountSettingsPage");
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }
  let inputRef = useRef();

  return (
    <>
      <View className="bg-light-1 h-full">
      <View className={`h-[6%]`}/>
      <Headers color={"#305536"} title={"Email"}/>
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="relative w-[95%] self-center" style={{height: height*0.05}}>
              <View className="absolute z-8 top-0 left-0 w-full h-full bg-primary opacity-70 rounded-lg p-2"></View>
              <View className="absolute z-10 top-0 left-0 w-full h-full rounded-lg p-2">
                  <TextInput 
                      ref={inputRef}
                      onLayout={() => inputRef.current.focus()}
                      placeholder={authData.email} 
                      value={email}
                      placeholderTextColor={"#f9f4ea"} 
                      className="text-body-text color-light-1" 
                      onChangeText={(text) => setEmail(text)}
                      returnKeyType={"done"}
                      keyboardType="email-address"
                      autoComplete='email'
                      onSubmitEditing={changeEmail}
                  />
              </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary rounded-lg p-2" onPress={changeEmail}>
                <Text className="text-body-text font-bold text-light-1 self-center">Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}