import React, {useContext} from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { deleteUser } from '../../Services/UserService';
import { AuthContext } from '../../Context/AuthContext';
import Headers from '../../Components/Header';
import Settings from '../../Components/Settings';


export default function SettingsPage() {
  const navigation = useNavigation();
  const {backendURL, authData, setStorageData} = useContext(AuthContext);
  const { width, height } = Dimensions.get('window');

  return (
    <View className="h-full w-full bg-light-1">
        <View className={`h-[6%]`}/>
        <Headers color={"#305536"} title={"Settings"}/>
        <Settings/>
    </View>
  );
}