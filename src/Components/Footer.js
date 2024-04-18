import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';

let urlHomeButton = "https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png"
let urlSearchButton = "https://www.pngfind.com/pngs/b/54-545056_icon-search-white-png-johns-hopkins-logo-white.png"
let urlSettingButton = "https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png"

export default function Footer() {

  return (
    <View className="flex flex-row justify-around bg-primary py-2  border-t-2 border-secondary">
        <View className="w-1/4 flex flex-row justify-center">
            <View>
                <Image source={{ uri: urlHomeButton }} className="h-10 w-10 object-cover self-center" />
            </View>
        </View>
        <View className="w-1/4 flex flex-row justify-center">
            <View>
                <Image source={{ uri: urlSearchButton }} className="h-10 w-10 object-cover self-center" />
            </View>
        </View>
        <View className="w-1/4 flex flex-row justify-center">
            <View>
                <Image source={{ uri: urlSettingButton }} className="h-10 w-10 object-cover self-center" />
            </View>
        </View>
    </View>
  );
}