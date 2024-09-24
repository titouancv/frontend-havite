import React from 'react';
import { AddArticlePage, HomePage, MediaAccountPage } from '../Pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreditsPage from '../Pages/CreditsPage';

const HomeStack = createNativeStackNavigator();

export default function AddArticleRoute() {

  return (
    <HomeStack.Navigator
      initialRouteName='AddArticlePage'
      screenOptions={() => ({
                style: {
                    height: 90,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#305536',
                    position: 'absolute',
                    borderTopWidth: 0,
                }
            })}
    >
      <HomeStack.Screen
        name="AddArticlePage"
        component={AddArticlePage}
        options={{
          headerShown: false,
          title: "Home"
        }}
      />
      <HomeStack.Screen
        name="CreditsPage"
        component={CreditsPage}
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </HomeStack.Navigator>
  );
}
