import React, {useContext, useState} from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import Headers from '../../Components/Header';
import { AuthContext } from '../../Context/AuthContext';
import { Edit } from '../../assets/iconSVG/Icons';
import * as ImagePicker from 'expo-image-picker';
import { updtateUser } from '../../Services/UserService';
import { MediaContext } from '../../Context/MediaContext';
import { getUserProfilePicture } from '../../Services/UserService';


export default function UserEditPage() {
    const navigation = useNavigation();
    const {backendURL, authData, setStorageData} = useContext(AuthContext)
    const { width, height } = Dimensions.get('window');
    const {getImage} = useContext(MediaContext);
    const [logo, setLogo] = useState(authData.profilePicture === "" ? "https://cdn-icons-png.flaticon.com/512/992/992651.png" : authData.profilePicture);
    let birthdayDate = new Date(authData.birthday);


    const handleImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
    
      if (!result.canceled) {
        setLogo(result.assets[0].uri); 
        let res = await uploadImage(result.assets[0]); 
        let userData = {
          "username": authData.username,
          "email": authData.email,
          "customer": {
            "first_name": authData.firstName,
            "last_name": authData.lastName,
            "gender": authData.gender,
            "profile_picture": res.image,
            "birthday": authData.birthday,
          }
        }
        await updtateUser(userData, authData.accessToken, backendURL)
        await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
        console.log("profile picture update done")
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
                        <Text className="text-light-1 text-h5 font-bold text-center">Update profile picture</Text>
                    </View>
                </View>
              </TouchableOpacity>
              <View>
                <PageButton title="Name" currentInfo={authData.firstName+" "+authData.lastName} nextPage="NamePage"/>
              </View>
              <View>
                <PageButton title="Email" currentInfo={authData.email} nextPage="EmailPage"/>
              </View>
              <View>
                <PageButton title="Password" nextPage="PasswordPage"/>
              </View>
              <View>
                <PageButton title="Birthday" currentInfo={birthdayDate.toDateString()} nextPage="ChangeBirthdayPage"/>
              </View>
              <View>
                <PageButton title="Gender" currentInfo={authData.gender} nextPage="ChangeGenderPage"/>
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