import React, {useContext} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton, TextInputButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';
import { updtateMedia } from '../../Services/MediaService';


export default function ChangeEmailPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [email, setEmail] = React.useState('');
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

  return (
    <>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
                <Text className="text-h5 text-primary text-center">{authData.email}</Text>
            </View>
            <View className="w-[95%] self-center space-y-2">
                <Text className="text-h5 font-bold text-primary">Change your email</Text>
                <View className=" w-full border-2 border-secondary rounded-lg p-2">
                    <TextInput 
                        placeholder="Enter your new email" 
                        value={email}
                        placeholderTextColor={"#ff7d72"} 
                        className="text-body-text color-secondary" 
                        onChangeText={(text) => setEmail(text)}
                        returnKeyType={"done"}
                        keyboardType="email-address"
                        autoComplete='email'
                        onSubmitEditing={changeEmail}
                    />
                </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary border-2 border-secondary rounded-lg p-1 " onPress={changeEmail}>
                <Text className="text-body-text font-bold text-light-1 self-center">Change email</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}