import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInputButton } from '../Components';
import { AuthContext } from '../Context/AuthContext';
import Headers from '../Components/Header';
import { TextInputButton2 } from '../Components/TextInputButton';
import ScreenIndicator from '../Components/ScreenIndicator';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

export const AboutYouScreen = ({ navigation }) => {
  const [loginSentence, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [gender, setGender] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { width, height } = Dimensions.get('window');
  const {signInUser, loading} = useContext(AuthContext);

  const signIn = () => {
    signInUser(birthday, gender);
  }

  const onChangeBirthday = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setBirthday(currentDate);
  };

  const data = [
    { label: 'Female', value: 'F' },
    { label: 'Male', value: 'M' },
    { label: 'Other', value: 'O' },
  ];


  return (
    <SafeAreaProvider>
      <View className="flex-col bg-primary h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#f9f4ea"} title={"About you"}/>
        <View className="w-[95%] self-center space-y-2 mt-8">
        <ScreenIndicator pageIndex={2} indicatorNumber={3}/>
          <View>
            <Text className="text-h5 font-bold color-light-1 mb-1">Birthday</Text>
            <View className=" w-full items-center">
                <DateTimePicker
                    testID="dateTimePicker"
                    value={birthday}
                    mode="date"
                    display="default"
                    onChange={onChangeBirthday}
                    />
            </View>
          </View>
          <View>
            <Text className="text-h5 font-bold color-light-1 mb-1">Gender</Text>
            <Dropdown
                style={[styles.dropdown, isFocus]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setGender(item.value);
                setIsFocus(false);
                }}
            />
          </View>
          {gender && (<View className=" w-full self-center pt-4">
              <TouchableOpacity 
              onPress={signIn}
              className="bg-secondary rounded-lg px-2">
                  <Text className="text-h5 text-center font-bold color-light-1 my-2">Sign in</Text>
              </TouchableOpacity>
              <View className="flex-row my-1">
                  <Text className="text-tiny-text color-secondary mr-1">{loginSentence}</Text>
              </View>
          </View>)}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    label: {
      marginBottom: 10,
      fontSize: 16,
    },
    dropdown: {
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor: "#f9f4ea"
    },
    placeholderStyle: {
      fontSize: 16,
      color: '#305536',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: '#305536',
      fontWeight: "bold",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });