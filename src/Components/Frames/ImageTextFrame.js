import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageManager from '../ImageManager';

const ImageTextFrame = (props) => {
    return (
    <View className="h-full space-y-4">
        <View className="h-[48%]">
            <ImageManager images={props.images}/>
        </View>
        <Text className="text-caption-text h-max-[48%]"  style={{color: props.textColor}}>{props.text}</Text>
    </View>
)};

export default ImageTextFrame