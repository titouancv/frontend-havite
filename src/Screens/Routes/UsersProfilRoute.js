import React from 'react';
import { ProfilHomePage, AccountSettingsPage, AboutPage, HelpPage, OtherPage, MediaInfoSettingsPage } from '../Pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EmailPage from '../Pages/EmailPage';
import ChangeGenderPage from '../Pages/ChangeGenderPage';
import ChangeBirthdayPage from '../Pages/ChangeBirthdayPage';
import SettingsPage from '../Pages/SettingsPage';
import UserEditPage from '../Pages/UserEditPage';
import MediaEditPage from '../Pages/MediaEditPage';
import NamePage from '../Pages/NamePage';

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
        name="AboutPage"
        component={AboutPage}
        options={{
          headerShown: false,
          title: "About",
        }}
      />
      <ProfileStack.Screen
        name="HelpPage"
        component={HelpPage}
        options={{
          headerShown: false,
          title: "Help",
        }}
      />
      <ProfileStack.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          headerShown: false,
          title: "Other",
        }}
      />
      <ProfileStack.Screen
        name="EmailPage"
        component={EmailPage}
        options={{
          headerShown: false,
          title: "Email",
        }}
      />
      <ProfileStack.Screen
        name="NamePage"
        component={NamePage}
        options={{
          headerShown: false,
          title: "Name",
        }}
      />
      <ProfileStack.Screen
        name="ChangeGenderPage"
        component={ChangeGenderPage}
        options={{
          headerShown: false,
          title: "Gender",
        }}
      />
      <ProfileStack.Screen
        name="ChangeBirthdayPage"
        component={ChangeBirthdayPage}
        options={{
          headerShown: false,
          title: "Birthday",
        }}
      />
      <ProfileStack.Screen
        name="SettingsPage"
        component={SettingsPage}
        options={{
          headerShown: false,
          title: "Settings",
        }}
      />
      <ProfileStack.Screen
        name="UserEditPage"
        component={UserEditPage}
        options={{
          headerShown: false,
          title: "UserEdit",
        }}
      />
      <ProfileStack.Screen
        name="MediaEditPage"
        component={MediaEditPage}
        options={{
          headerShown: false,
          title: "MediaEdit",
        }}
      />
    </ProfileStack.Navigator>
  );
}
