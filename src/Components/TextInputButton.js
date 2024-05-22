import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const TextInputButton = (props) => {
    return (
    <View className="w-full">
        <Text className="text-h5 font-bold color-light-1 mb-1">{props.title}</Text>
        <View className="border-2 border-light-1 rounded-lg p-2">
            <TextInput 
                placeholder= {props.placeholder}
                secureTextEntry={props.secureTextEntry} 
                placeholderTextColor={"#ff7d72"} 
                className="text-body-text color-secondary" 
                autoComplete={props.autoComplete}
                value={props.value}
                onChangeText={props.setText}
            />
        </View>
    </View>
)};

export default TextInputButton