import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PageButton = (props) => {
    const nav = useNavigation();

    let currentInfo = props.currentInfo || "";
    return (
    <View className="w-full">
        <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => nav.navigate(props.nextPage) }>
            <View className="w-[90%] flex-row justify-between items-center">
                <Text className="text-body-text font-bold text-light-1">{props.title}</Text>
                <Text className="text-caption-text text-light-1 opacity-50">{currentInfo}</Text>
            </View>                
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/32/32213.png" }} className="h-5 w-5 self-center" />
        </TouchableOpacity>
    </View>
)};

export default PageButton