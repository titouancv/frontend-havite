import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ListOfButton from '../ListOfButton';


const CreditFrame = (props) => {
    return (
    <View className="space-y-2">
        <View className="w-full">
            <ListOfButton data={props.authors} title="Author(s):" textColor={props.textColor}/>
        </View>
        <View className="w-full">
            <Text className="text-body-text font-bold mb-1" style={{color: props.textColor}}>Date:</Text>
            <Text className="text-caption-text" style={{color: props.textColor}}>{props.date}</Text>
        </View>
        <View className="w-full">
            <ListOfButton data={props.sources} title="Source(s):" textColor={props.textColor}/>
        </View>
        <View className="w-full">
            <ListOfButton data={props.tags} title="Tag(s):" textColor={props.textColor}/>
        </View>
    </View>
)};

export default CreditFrame