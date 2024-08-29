import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';


export default function ChangeGenderPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [gender, setGender] = React.useState(authData.gender);
  const nav = useNavigation();

  const changeEmail = async () => {
    let userData = {
      username: authData.username,
      email: authData.email,
      "customer": {
        first_name: authData.firstName,
        last_name: authData.lastName,
        gender: gender,
        birthday: authData.birthday,
      }
    }
    updtateUser(userData, authData.accessToken, backendURL);
    nav.navigate("AccountSettingsPage");
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }

  return (
    <>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
                <Text className="text-h5 text-primary text-center">{authData.gender}</Text>
            </View>
            <View className="w-[95%] self-center space-y-2">
                <Text className="text-h5 font-bold text-primary">Change your gender</Text>
                <View className=" w-full border-2 border-secondary rounded-lg p-2">
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Female" value="F" />
                        <Picker.Item label="Male" value="M" />
                        <Picker.Item label="Other" value="O" />
                    </Picker>
                </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary border-2 border-secondary rounded-lg p-1 " onPress={changeEmail}>
                <Text className="text-body-text font-bold text-light-1 self-center">Change gender</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}