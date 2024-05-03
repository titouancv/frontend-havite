import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const TextInputButton = (props) => {
    return (
    <View className="w-full">
        <Text className="text-h5 font-bold color-light-2 mb-1">{props.title}</Text>
        <View className="border-2 border-light-3 rounded-lg px-2">
            <TextInput 
            placeholder= {props.placeholder}
            secureTextEntry={true} 
            placeholderTextColor={"#ff7d72"} 
            className="text-body-text color-secondary my-2" 
            autoComplete={props.autoComplete}/>
        </View>
    </View>
)};

export default TextInputButton