import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageManager from '../ImageManager';

const TextImageTextFrame = (props) => {
    let images = ["https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg", 
    "https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg",];

    return (
    <View className="h-full space-y-4">
        <Text className="text-caption-text h-[30%]"  style={{color: props.textColor}}>{props.text}</Text>
        <View className="h-[30%]">
            <ImageManager images={images}/>
        </View>
        <Text className="text-caption-text h-[30%]"  style={{color: props.textColor}}>{props.text}</Text>
    </View>
)};

export default TextImageTextFrame