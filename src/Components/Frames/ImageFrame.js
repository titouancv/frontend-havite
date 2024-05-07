import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageFullScreen from '../ImageFullScreen';

const ImageFrame = (props) => {
    let images = ["https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg",];

    let imageNumber = images.length;
    return (
    <View className="w-full h-full">
    {
        imageNumber === 1 && (
            <View className="w-full h-full">
                <ImageFullScreen imageUri={images[0]}/>
            </View>
        ) || (
        imageNumber === 2 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-[49%]">
                    <ImageFullScreen imageUri={images[0]}/>
                </View>
                <View className="h-[49%]">
                    <ImageFullScreen imageUri={images[1]}/>
                </View>
            </View>  
        )) || (
        imageNumber === 3 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-[32%]">
                    <ImageFullScreen imageUri={images[0]}/>
                </View>
                <View className="h-[32%]">
                    <ImageFullScreen imageUri={images[1]}/>
                </View>
                <View className="h-[32%]">
                    <ImageFullScreen imageUri={images[2]}/>
                </View>
            </View>   
        )) || (
        imageNumber === 4 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-[24%]">
                    <ImageFullScreen imageUri={images[0]}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen imageUri={images[1]}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen imageUri={images[2]}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen imageUri={images[2]}/>
                </View>
            </View>   
        )
        )
    }
    </View>
)};

export default ImageFrame