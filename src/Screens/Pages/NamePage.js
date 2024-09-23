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


export default function NamePage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const { width, height } = Dimensions.get('window');
  const nav = useNavigation();

  const changeEmail = async () => {
    if (authData.isMedia)
    {
      let mediaData = {
        username: authData.username,
        email: authData.email,
        "media": {
          name,
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
        email: authData.email,
        "customer": {
          firstName,
          lastName,
          gender: authData.gender,
          birthday: authData.birthday,
        }
      }
      updtateUser(userData, authData.accessToken, backendURL);
    }
    nav.goBack();
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }
  let inputRef = useRef();

  if (authData.isMedia)
  {
    return (
        <>
          <View className="bg-light-1 h-full">
          <View className={`h-[6%]`}/>
          <Headers color={"#305536"} title={"Name"}/>
            <View className="h-full flex-col w-full space-y-4 pt-4">
                <View className="w-[95%] self-center">
                  <TextInputButton2
                    placeholder={authData.name} 
                    placeholderTextColor="#f9f4ea"
                    color="#305536" 
                    backgroundColor="#305536"
                    TextInputHeight={height*0.05}
                    onChangeText={setName}
                    returnKeyType="done"
                    onSubmitEditing={changeEmail}
                  />
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


  return (
    <>
      <View className="bg-light-1 h-full">
      <View className={`h-[6%]`}/>
      <Headers color={"#305536"} title={"Name"}/>
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
              <TextInputButton2
                title ="First name"
                placeholder={authData.firstName} 
                placeholderTextColor="#f9f4ea"
                color="#305536" 
                backgroundColor="#305536"
                TextInputHeight={height*0.05}
                onChangeText={setFirstName}
                returnKeyType="done"
                onSubmitEditing={changeEmail}
              />
            </View>
            <View className="w-[95%] self-center">
              <TextInputButton2
                title ="Last name"
                isOnLayout={false}
                placeholder={authData.lastName} 
                placeholderTextColor="#f9f4ea"
                color="#305536" 
                backgroundColor="#305536"
                TextInputHeight={height*0.05}
                onChangeText={setLastName}
                returnKeyType="done"
                onSubmitEditing={changeEmail}
              />
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