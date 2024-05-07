import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const TextFrame = (props) => {
    return (
    <View className="h-full">
        <Text className="text-caption-text h-full"  style={{color: props.textColor}}>{props.text}</Text>
    </View>
)};

export default TextFrame