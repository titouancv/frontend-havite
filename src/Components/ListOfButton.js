import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';


const ListOfButton = (props) => {
    return (
    <View className="w-full flex items-center border-4 rounded-lg" style={{borderColor: props.primaryColor}}>
        <View className="w-full rounded-t-sm" style={{backgroundColor: props.primaryColor}}>
            <Text className=" text-center text-body-text font-bold mb-1" style={{ color: props.textColor}}>{props.title}</Text>
        </View>
        <View className="flex-row space-x-2 p-2">
            {props.data.map((item) => (
                <TouchableOpacity className="flex border-2 rounded-lg p-1" style={{borderColor: props.primaryColor}}>
                    <Text className="text-caption-text" style={{color: props.primaryColor}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
)};

export default ListOfButton