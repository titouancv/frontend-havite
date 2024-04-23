import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let urlHomeButton = "https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png"
let urlSearchButton = "https://www.pngfind.com/pngs/b/54-545056_icon-search-white-png-johns-hopkins-logo-white.png"
let urlSettingButton = "https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png"

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View className="flex flex-row justify-around bg-primary py-2  border-t-2 border-secondary">
        <View className="w-1/4 flex flex-row justify-center">
            <TouchableOpacity onPress={() => navigation.navigate("Home") }>
                <Image source={{ uri: urlHomeButton }} className="h-10 w-10 object-cover self-center" />
            </TouchableOpacity>
        </View>
        <View className="w-1/4 flex flex-row justify-center">
            <TouchableOpacity onPress={() => navigation.navigate("Profil") }>
                <Image source={{ uri: urlSearchButton }} className="h-10 w-10 object-cover self-center" />
            </TouchableOpacity>
        </View>
        <View className="w-1/4 flex flex-row justify-center">
            <TouchableOpacity>
                <Image source={{ uri: urlSettingButton }} className="h-10 w-10 object-cover self-center" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Footer