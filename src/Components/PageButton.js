import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Arrow } from '../assets/iconSVG/Icons';

const PageButton = (props) => {
    const arrowIcon = require('./../assets/icons/arrowIcon.png');
    const nav = useNavigation();

    let currentInfo = props.currentInfo || "";
    return (
    <View className="w-full">
        <TouchableOpacity className="w-full bg-primary flex-row rounded-lg p-2 space-x-2 justify-between" onPress={() => nav.navigate(props.nextPage) }>
            <View className="w-[90%] flex-row justify-between items-center">
                <Text className="text-body-text font-bold text-light-1">{props.title}</Text>
                <Text className="text-caption-text text-light-1 opacity-50">{currentInfo}</Text>
            </View>                
            <Arrow color="#FFFFFF" className="rotate-180" />
        </TouchableOpacity>
    </View>
)};

export default PageButton