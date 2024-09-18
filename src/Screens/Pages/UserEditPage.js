import React, {useContext} from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import Headers from '../../Components/Header';
import { AuthContext } from '../../Context/AuthContext';
import { Edit } from '../../assets/iconSVG/Icons';


export default function UserEditPage() {
    const navigation = useNavigation();
    const {signOut, authData} = useContext(AuthContext)
    const { width, height } = Dimensions.get('window');
    let birthdayDate = new Date(authData.birthday);
  return (
      <View className="bg-light-1 h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#305536"} title={"Edit your profile"}/>
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-1">
                <TouchableOpacity className="relative bg-primary rounded-lg mb-2" style={{height: height*0.1}}>
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
                <PageButton title="Password" nextPage=""/>
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