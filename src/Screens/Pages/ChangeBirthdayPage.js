import React, {useContext} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';


export default function ChangeBirthdayPage() {
  const {backendURL, authData, setStorageData} = useContext(AuthContext)
  const [birthday, setBirthday] = React.useState(new Date());
  const nav = useNavigation();
  let birthdayDate = new Date(authData.birthday);

  const changeBirthday = async () => {
    let userData = {
      username: authData.username,
      email: authData.email,
      "customer": {
        first_name: authData.firstName,
        last_name: authData.lastName,
        gender: authData.gender,
        birthday: birthday,
      }
    }
    updtateUser(userData, authData.accessToken, backendURL);
    nav.navigate("AccountSettingsPage");
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setBirthday(currentDate);
  };

  return (
    <>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
                <Text className="text-h5 text-primary text-center">{birthdayDate.toDateString()}</Text>
            </View>
            <View className="w-[95%] self-center space-y-2">
                <Text className="text-h5 font-bold text-primary">Change your birthday</Text>
                <View className=" w-full border-2 border-secondary rounded-lg p-2 items-center">
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={birthday}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    />
                </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary border-2 border-secondary rounded-lg p-1 " onPress={changeBirthday}>
                <Text className="text-body-text font-bold text-light-1 self-center">Change your birthday</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}