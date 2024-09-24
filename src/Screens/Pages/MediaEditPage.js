import React, {useContext, useState} from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import Headers from '../../Components/Header';
import { AuthContext } from '../../Context/AuthContext';
import { NewPublicationContext } from '../../Context/NewPublicationContext';
import { Edit } from '../../assets/iconSVG/Icons';
import * as ImagePicker from 'expo-image-picker';
import { updtateMedia } from '../../Services/MediaService';

export default function MediaEditPage() {
    const navigation = useNavigation();
    const {authData, backendURL} = useContext(AuthContext);
    const {uploadImage} = useContext(NewPublicationContext);
    const { width, height } = Dimensions.get('window');
    const [logo, setLogo] = useState(authData.logoURL || "https://cdn-icons-png.flaticon.com/512/992/992651.png");

    const handleImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    
      if (!result.canceled) {
        setLogo(result.assets[0].uri); 
        let res = await uploadImage(result.assets[0]); 
        let mediaData = {
          username: authData.username,
          email: authData.email,
          "media": {
            name: authData.name,
            bio: authData.bio,
            logo: res.id,
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
        await updtateMedia(mediaData, authData.accessToken, backendURL)
        await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
      }
  }

  return (
      <View className="bg-light-1 h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#305536"} title={"Edit your profile"}/>
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-1">
              <TouchableOpacity className="relative bg-primary rounded-lg mb-2" style={{height: height*0.1}} onPress={handleImage}>
                <Image source={{ uri: logo }} className="h-full w-full rounded-lg" />
                <View className="absolute h-full w-full z-8 bg-black opacity-50 rounded-lg"/>
                <View className="absolute h-full w-full z-10 flex-col justify-center">
                    <View className="flex-row space-x-2 justify-center">
                        <Edit color={'#f9f4ea'}/>
                        <Text className="text-light-1 text-h5 font-bold text-center">Update logo</Text>
                    </View>
                </View>
              </TouchableOpacity>
              <View>
                <PageButton title="Name" currentInfo={authData.name} nextPage="NamePage"/>
              </View>
              <View>
                <PageButton title="Email" currentInfo={authData.email} nextPage="EmailPage"/>
              </View>
              <View>
                <PageButton title="Password" nextPage="PasswordPage"/>
              </View>
              <View>
                <PageButton title="Colors" nextPage=""/>
              </View>
              <View>
                <PageButton title="Bio" currentInfo={authData.bio} nextPage="BiographyPage"/>
              </View>
            </View>
            <View className="w-full justify-center space-x-1 flex-row pt-2 mt-6">
              <Text className="text-tiny-text text-primary self-center">You joined Havite on</Text>
              <Text className="text-tiny-text text-primary font-bold self-center">14/03/2024</Text>
            </View>
        </View>
      </View>
  );
}