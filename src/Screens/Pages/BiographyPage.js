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


export default function BiographyPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [bio, setBio] = React.useState('');
  const { width, height } = Dimensions.get('window');
  const nav = useNavigation();

  const changeBio = async () => {
    if (authData.isMedia)
    {
      let mediaData = {
        username: authData.username,
        email : authData.bio,
        "media": {
          name: authData.name,
          bio: bio,
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
    nav.goBack();
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }

  return (
    <>
      <View className="bg-light-1 h-full">
      <View className={`h-[6%]`}/>
      <Headers color={"#305536"} title={"Biography"}/>
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
              <TextInputButton2
                placeholder={authData.bio} 
                placeholderTextColor="#f9f4ea"
                color="#305536" 
                TextInputHeight={height*0.10}
                backgroundColor="#305536"
                onChangeText={setBio}
                returnKeyType="done"
                onSubmitEditing={changeBio}
              />
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary rounded-lg p-2" onPress={changeBio}>
                <Text className="text-body-text font-bold text-light-1 self-center">Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}