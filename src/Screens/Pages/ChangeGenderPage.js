import React, {useContext} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';


export default function ChangeGenderPage() {
  const {backendURL, authData, setStorageInformation} = useContext(AuthContext)
  const [gender, setGender] = React.useState(authData.sexe);
  const nav = useNavigation();

  const changeEmail = async () => {
    let userData = {
        "username": "test",
        "email": "",
        "customer": {
          "first_name": "string",
          "last_name": "string",
          "sexe": {gender},
          "birthday": "2024-06-10",
          "followed_medias": [
            "string"
          ],
          "liked_articles": {},
          "groups": [
            0
          ],
          "user_permissions": [
            0
          ]
        }
      }
    updtateUser(userData, authData.accessToken, backendURL);
    await setStorageInformation(authData.accessToken, authData.refreshToken, authData.isMedia);
    nav.navigate("AccountSettingsPage");
  }

  return (
    <>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
                <Text className="text-h5 text-primary text-center">{authData.sexe}</Text>
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