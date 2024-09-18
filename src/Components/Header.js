import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Arrow } from '../assets/iconSVG/Icons';
import { useNavigation } from '@react-navigation/native';

const Headers = (props) => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    let title = props.title;
    let color = props.color

    return (
    <View className="w-full pl-2">
        <TouchableOpacity>
        <Arrow color={color} onPress={() => navigation.goBack()}/>
        </TouchableOpacity>
        <View className="mt-4">
            <Text className="text-h3 font-bold" style={{color: color}}>{title}</Text>
        </View>
    </View>
)};

export default Headers