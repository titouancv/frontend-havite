import React, {useContext} from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AuthContext } from '../../Context/AuthContext';
import { updtateUser } from '../../Services/UserService';
import Headers from '../../Components/Header';


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
    nav.goBack();
    await setStorageData(authData.accessToken, authData.refreshToken, authData.isMedia);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setBirthday(currentDate);
  };

  return (
    <>
      <View className="bg-light-1 h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#305536"} title={"Birthday"}/>
        <View className="h-full flex-col w-full space-y-4 pt-4">
            <View className="w-[95%] self-center">
                <View className=" w-full items-center">
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={birthdayDate}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    />
                </View>
            </View>
            <View className="w-[95%] self-center">
              <TouchableOpacity className="w-full self-center bg-secondary rounded-lg p-2" onPress={changeBirthday}>
                <Text className="text-body-text font-bold text-light-1 self-center">Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}