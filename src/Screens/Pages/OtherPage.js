import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { deleteUser } from '../../Services/UserService';
import { AuthContext } from '../../Context/AuthContext';


export default function OtherPage() {
  const navigation = useNavigation();
  const {backendURL, authData, setStorageData} = useContext(AuthContext);

  const deleteCustomer = () => {
    deleteUser(authData.accessToken, backendURL);
  }
  return (
    <SafeAreaProvider>
      <View className="bg-light-1 h-full">
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-4">
              <View>
                <PageButton title="Empty the cache" nextPage="HelpPage"/>
              </View>
              <TouchableOpacity className="w-full border-4 border-secondary flex rounded-lg p-2" onPress={deleteCustomer}>
                <Text className="text-body-text font-bold text-secondary self-center">Delete your account</Text>                
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}