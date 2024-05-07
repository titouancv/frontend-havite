import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageManager from '../ImageManager';

const TextImageFrame = (props) => {
    return (
    <View className="h-full space-y-4">
        <Text className="text-caption-text h-max-[48%]"  style={{color: props.textColor}}>{props.text}</Text>
        <View className="h-[48%]">
            <ImageManager images={props.images}/>
        </View>
    </View>
)};

export default TextImageFrame