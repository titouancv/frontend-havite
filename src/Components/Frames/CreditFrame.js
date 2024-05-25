import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ListOfButton from '../ListOfButton';


const CreditFrame = (props) => {
    return (
    <View className="space-y-2">
        <View className="flex-row justify-between w-full">
            <View className="w-[49%] flex items-center border-4 rounded-lg" style={{borderColor: props.primaryColor}}>
                <View className="w-full rounded-t-sm" style={{backgroundColor: props.primaryColor}}>
                    <Text className=" text-center text-body-text font-bold mb-1" style={{ color: props.textColor}}>Like</Text>
                </View>
                <View className="flex-row space-x-2 p-2">
                    <Text className="text-caption-text" style={{color: props.primaryColor}}>{props.like}</Text>
                </View>
            </View>
            <View className="w-[49%] flex items-center border-4 rounded-lg" style={{borderColor: props.primaryColor}}>
                <View className="w-full rounded-t-sm" style={{backgroundColor: props.primaryColor}}>
                    <Text className=" text-center text-body-text font-bold mb-1" style={{ color: props.textColor}}>Dislike</Text>
                </View>
                <View className="flex-row space-x-2 p-2">
                    <Text className="text-caption-text" style={{color: props.primaryColor}}>{props.dislike}</Text>
                </View>
            </View>
        </View>
        <View className="w-full">
            <ListOfButton data={props.authors} title="Author(s)" primaryColor={props.primaryColor} textColor={props.textColor}/>
        </View>
        <View className="w-full flex items-center border-4 rounded-lg" style={{borderColor: props.primaryColor}}>
            <View className="w-full rounded-t-sm" style={{backgroundColor: props.primaryColor}}>
                <Text className=" text-center text-body-text font-bold mb-1" style={{ color: props.textColor}}>Date</Text>
            </View>
            <View className="flex-row space-x-2 p-2">
                <Text className="text-caption-text" style={{color: props.primaryColor}}>{props.date}</Text>
            </View>
        </View>
        <View className="w-full">
            <ListOfButton data={props.sources} title="Source(s)" primaryColor={props.primaryColor} textColor={props.textColor}/>
        </View>
        <View className="w-full">
            <ListOfButton data={props.tags} title="Tag(s)" primaryColor={props.primaryColor} textColor={props.textColor}/>
        </View>
    </View>
)};

export default CreditFrame