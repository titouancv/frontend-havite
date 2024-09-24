import React, {useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import { HomeRoute, UsersProfilRoute } from './Routes';
import { AddArticlePage } from './Pages';
import { BottomTabBar } from '../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MediaProvider } from '../Context/MediaContext';
import { NewPublicationProvider } from '../Context/NewPublicationContext';
import AddArticleRoute from './Routes/NewArticleRoute';

const Tab = createBottomTabNavigator();

function MainScreen() {

  const {authData} = useContext(AuthContext);
  return (
    <SafeAreaProvider className="">
      <MediaProvider>
        <NewPublicationProvider>
          <Tab.Navigator
              tabBar={props => <BottomTabBar {...props} />}
              screenOptions={() => ({
                  headerShown: false,
              })}
          >
              <Tab.Screen name="Home" component={HomeRoute}/>
              {authData.isMedia && (<Tab.Screen name="Post" component={AddArticleRoute}/> )}
              <Tab.Screen name="Profil" component={UsersProfilRoute}/>
          </Tab.Navigator>
        </NewPublicationProvider>
      </MediaProvider>
    </SafeAreaProvider>
  );
}

export default MainScreen