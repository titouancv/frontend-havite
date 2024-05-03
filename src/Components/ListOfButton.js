import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';


const ListOfButton = (props) => {
    return (
    <View className="w-full">
        <Text className="text-body-text font-bold mb-1" style={{color: props.textColor}}>{props.title}</Text>
        <View className="flex-row space-x-2">
            {props.data.map((item) => (
                <TouchableOpacity className="flex border-2 rounded-lg p-1" style={{borderColor: props.textColor}}>
                    <Text className="text-caption-text" style={{color: props.textColor}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
)};

export default ListOfButton