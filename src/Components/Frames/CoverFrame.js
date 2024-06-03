import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageFullScreen from '../ImageFullScreen';
import ImageManager from '../ImageManager';

const CoverFrame = (props) => {
    return (<View className="space-y-2">
        <Text className="text-h5 font-bold" style={{color: props.textColor}}>{props.title}</Text>
        <View className="w-full h-[35%] rounded-lg">
            <ImageManager images={props.images} footerText={props.text}/>
        </View>
        <Text className="text-caption-text"  style={{color: props.textColor}}>{props.text}</Text>
    </View>
)};

export default CoverFrame