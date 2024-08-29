import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageManager from '../ImageManager';

const TextImageTextFrame = (props) => {
    return (
    <View className="h-full space-y-4">
        <Text className="text-caption-text h-[30%]"  style={{color: props.textColor}}>{props.text1}</Text>
        <View className="h-[30%]">
            <ImageManager images={props.images}/>
        </View>
        <Text className="text-caption-text h-[30%]"  style={{color: props.textColor}}>{props.text2}</Text>
    </View>
)};

export default TextImageTextFrame