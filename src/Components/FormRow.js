import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Cancel } from '../assets/iconSVG/Icons';

export const FormRow = (props) => {
    return (
        <View className="w-full flex items-left">
        <View className="w-full space-x-2 flex-row justify-between mb-1">
            <Text className="text-h5 font-bold" style={{color: props.color}}>{props.title}</Text>
            {props.isModify && (
                <TouchableOpacity className=" p-1 px-4 rounded-lg " style={{backgroundColor: props.color}} onPress={props.openSearchModal}>
                    <Text className="text-caption-text text-center font-bold" style={{color: props.textColor}}>Add</Text>
                </TouchableOpacity>
            )}
        </View>
        {props.itemList.length !== 0 && (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full space-x-1 flex-row">
            {props.itemList.map((item) => {
                return (
                    <View className="flex relative py-1 pr-2">
                    {props.isModify && (
                        <TouchableOpacity className="absolute z-10 top-0 right-0 bg-light-1 rounded-full flex justify-center items-center" onPress={() => props.deleteValue(item)}>
                            <Cancel color="#b91c1c"/>
                        </TouchableOpacity>
                    )}
                        <TouchableOpacity className="p-1 rounded-lg border-2" style={{borderColor: props.color}}>
                            <Text className="" style={{color: props.color}}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            )}
            </ScrollView>
        )}
    </View>
    )
}