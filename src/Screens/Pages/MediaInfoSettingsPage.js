import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';


export default function MediaInfoSettingsPage() {
  const {signOut, authData} = useContext(AuthContext)
  return (
    <SafeAreaProvider>
        <View className="bg-light-1 h-full">
            <View className="h-full flex-col w-full pt-4 space-y-2">
                <View className="w-[95%] self-center space-y-1">
                    <View>
                    <PageButton title="Website" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Editorial Address" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Fundation Date" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Owner(s)" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Founder(s)" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Managing Editor(s)" nextPage="HelpPage"/>
                    </View>
                    <View>
                    <PageButton title="Publishing Director(s)" nextPage="HelpPage"/>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaProvider>
  );
}