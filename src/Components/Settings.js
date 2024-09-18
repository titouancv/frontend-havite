import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageButton from './PageButton';
import { AuthContext } from '../Context/AuthContext';


export default function Settings() {
    const navigation = useNavigation();
    const {signOut} = useContext(AuthContext);
  return (
      <View className="w-full h-full">
        <View className="h-full flex-col w-full">
            <View className="w-[95%] self-center space-y-2 mt-2">
                <Text className="text-h5 text-primary">Functionality</Text>
              <View>
                <PageButton title="Article liked" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Color theme" nextPage="HelpPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-2 mt-4">
                <Text className="text-h5 text-primary">Adjustments</Text>
              <View>
                <PageButton title="Notifications" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Other" nextPage="OtherPage"/>
              </View>
            </View>
            <View className="w-[95%] self-center space-y-2 mt-4">
                <Text className="text-h5 text-primary">About</Text>
              <View>
                <PageButton title="Share Havite" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="Help" nextPage="HelpPage"/>
              </View>
              <View>
                <PageButton title="About us" nextPage="AboutPage"/>
              </View>
            </View>
            <TouchableOpacity className="w-[95%] self-center space-y-2 mt-4 bg-secondary rounded-lg" onPress={signOut}>
                <Text className="text-h5  text-light-1 text-center font-bold p-2">Sign out</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}