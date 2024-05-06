import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ImageFullScreen from '../ImageFullScreen';

const CoverFrame = (props) => {

    return (<View className="space-y-2">
        <Text className="text-h5 font-bold" style={{color: props.textColor}}>Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne</Text>
        <View className="w-full h-[35%] rounded-lg">
            <ImageFullScreen imageUri={"https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg"}/>
        </View>
        <Text className="text-caption-text"  style={{color: props.textColor}}>{props.text}</Text>
    </View>
)};

export default CoverFrame