import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageFullScreen from '../ImageFullScreen';

const ImageFrame = (props) => {

    let imageNumber = props.images.length;
    return (
    <View className="w-full h-full">
    {
        imageNumber === 1 && (
            <View className="w-full h-full">
                <ImageFullScreen mainImage={props.images[0]} images={props.images}  indexImage={0}/>
            </View>
        ) || (
        imageNumber === 2 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-[49%]">
                    <ImageFullScreen mainImage={props.images[0]} images={props.images}  indexImage={0}/>
                </View>
                <View className="h-[49%]">
                    <ImageFullScreen mainImage={props.images[1]} images={props.images}  indexImage={1}/>
                </View>
            </View>  
        )) || (
        imageNumber === 3 && (
            <View className="w-full h-full flex-col justify-between space-y-2">
                <View className="h-[32%]">
                    <ImageFullScreen mainImage={props.images[0]} images={props.images}  indexImage={0}/>
                </View>
                <View className="h-[32%]">
                    <ImageFullScreen mainImage={props.images[1]} images={props.images}  indexImage={1}/>
                </View>
                <View className="h-[32%]">
                    <ImageFullScreen mainImage={props.images[2]} images={props.images}  indexImage={2}/>
                </View>
            </View>   
        )) || (
        imageNumber === 4 && (
            <View className="w-full h-full pb-1 flex-col justify-between space-y-2">
                <View className="h-[24%]">
                    <ImageFullScreen mainImage={props.images[0]} images={props.images}  indexImage={0}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen mainImage={props.images[1]} images={props.images}  indexImage={1}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen mainImage={props.images[2]} images={props.images}  indexImage={2}/>
                </View>
                <View className="h-[24%]">
                    <ImageFullScreen mainImage={props.images[3]} images={props.images}  indexImage={3}/>
                </View>
            </View>   
        )
        )
    }
    </View>
)};

export default ImageFrame