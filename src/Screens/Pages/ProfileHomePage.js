import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PageButton } from '../../Components';
import { AuthContext } from '../../Context/AuthContext';
import Settings from '../../Components/Settings';
import UserHeader from '../../Components/UserHeader';
import MediaHeader from '../../Components/MediaHeader';

export default function ProfilHomePage() {
    const navigation = useNavigation();
    const {authData} = useContext(AuthContext);
    const { width, height } = Dimensions.get('window');
  return (
    <View className="h-full w-full">
      {authData.isMedia ? (
        <View className={`h-[5%]`} style={{backgroundColor: authData.primaryColor}}/>
      ) : (
        <View className={`h-[5%]`}/>
      )}
      <ScrollView>
        {authData.isMedia ? (
          <>
            <View>
              <MediaHeader 
              articleNb={124} 
              followers={450300} 
              followed={124}
              bio={authData.bio}
              primaryColor={authData.primaryColor}
              secondaryColor={authData.secondaryColor}
              complementaryColor={authData.complementaryColor}
              textColor={authData.textColor}

              />
            </View>
          </>
        ):( 
          <>
            <View  style={{height: height*0.25}}>
              <UserHeader 
              firstname={authData.firstName} 
              lastname={authData.lastName} 
              mediaNb={124} 
              followers={450300} 
              followed={124}

              />
            </View>
            <Settings/>
          </>       
        )}
        <View  style={{height: height*0.20}}></View>
      </ScrollView>
    </View>
  );
}