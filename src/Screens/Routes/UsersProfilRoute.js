import React from 'react';
import { ProfilHomePage, AccountSettingsPage, AboutPage, HelpPage, OtherPage } from '../Pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const ProfileStack = createNativeStackNavigator();

export default function UsersProfilRoute() {

  return (
    <ProfileStack.Navigator
      initialRouteName='ProfileHomePage'
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
      <ProfileStack.Screen
        name="ProfileHomePage"
        component={ProfilHomePage}
        options={{
          headerShown: false,
          title: "Profile"
        }}
      />
      <ProfileStack.Screen
        name="AccountSettingsPage"
        component={AccountSettingsPage}
        options={{
          headerShown: true,
          title: "Account Settings",
          headerStyle: {backgroundColor: '#305536'},
          headerTintColor: "#f9f4ea"
        }}
      />
      <ProfileStack.Screen
        name="AboutPage"
        component={AboutPage}
        options={{
          headerShown: true,
          title: "About",
          headerStyle: {backgroundColor: '#305536'},
          headerTintColor: "#f9f4ea"
        }}
      />
      <ProfileStack.Screen
        name="HelpPage"
        component={HelpPage}
        options={{
          headerShown: true,
          title: "Help",
          headerStyle: {backgroundColor: '#305536'},
          headerTintColor: "#f9f4ea"
        }}
      />
      <ProfileStack.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          headerShown: true,
          title: "Other",
          headerStyle: {backgroundColor: '#305536'},
          headerTintColor: "#f9f4ea"
        }}
      />
    </ProfileStack.Navigator>
  );
}
