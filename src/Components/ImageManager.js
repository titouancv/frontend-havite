import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageFullScreen from './ImageFullScreen';

const ImageManager = (props) => {

    let imageNumber = props.images.length;
    return (
    <View className="w-full h-full">
    {
        imageNumber === 1 && (
            <View className="w-full h-full">
                <ImageFullScreen imageUri={props.images[0]}/>
            </View>
        ) || (
        imageNumber === 2 && (
            <View className="w-full h-full flex-row justify-between space-x-2">
                <View className="w-[49%]">
                    <ImageFullScreen imageUri={props.images[0]}/>
                </View>
                <View className="w-[49%]">
                    <ImageFullScreen imageUri={props.images[1]}/>
                </View>
            </View>  
        )) || (
        imageNumber === 3 && (
            <View className="w-full h-full flex-row justify-between space-x-2">
                <View className="w-[32%]">
                    <ImageFullScreen imageUri={props.images[0]}/>
                </View>
                <View className="w-[32%]">
                    <ImageFullScreen imageUri={props.images[1]}/>
                </View>
                <View className="w-[32%]">
                    <ImageFullScreen imageUri={props.images[2]}/>
                </View>
            </View>   
        )) || (
        imageNumber === 4 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-1/2 flex-row justify-between space-x-2">
                    <View className="w-[49%]">
                        <ImageFullScreen imageUri={props.images[0]}/>
                    </View>
                    <View className="w-[49%]">
                        <ImageFullScreen imageUri={props.images[1]}/>
                    </View>
                </View>  
                <View className="h-1/2 flex-row justify-between space-x-2">
                    <View className="w-[49%]">
                        <ImageFullScreen imageUri={props.images[2]}/>
                    </View>
                    <View className="w-[49%]">
                        <ImageFullScreen imageUri={props.images[3]}/>
                    </View>
                </View>  
            </View>  
        )
        )
    }
    </View>
)};

export default ImageManager