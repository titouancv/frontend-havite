import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import Headers from '../../Components/Header';
import { AuthContext } from '../../Context/AuthContext';


export default function HelpPage() {
    const navigation = useNavigation();
    const {authData} = useContext(AuthContext);
  return (
      <View className="bg-light-1 h-full">
        <View className={`h-[6%]`}/>
        <Headers color={"#305536"} title={"Help"}/>
        <View className="h-full flex-col w-full pt-4">
            <View className="w-[95%] self-center space-y-2">
              <View>
                <PageButton title="Contact Us" nextPage=""/>
              </View>
              <View>
                <PageButton title="Help Center" nextPage=""/>
              </View>
              <View>
                <PageButton title="Join the beta" nextPage=""/>
              </View>
              <View>
                <PageButton title="Make a suggestion" nextPage=""/>
              </View>
              {authData.isMedia &&(
              <View className="space-y-2">
              <View>
                <PageButton title="You are a journalist" nextPage=""/>
              </View>
              <View>
                <PageButton title="Join Havite as media" nextPage=""/>
              </View>
              </View>
              )}
            </View>
        </View>
      </View>
  );
}