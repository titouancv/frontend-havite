import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Arrow } from '../assets/iconSVG/Icons';

const ScreenIndicator = (props) => {

    const Indicators = (indicatorNumber, pageIndex) => {
        let res = []
        for(let i = 0; i < indicatorNumber;i++){
            if (pageIndex >= i)
                res.push(<View><Indicator isComing={false}/></View>)
            else
                res.push (<View><Indicator isComing={true}/></View>)
        }
        return res
    }
    
    return (
    <View className="w-full flex-row space-x-1 pb-2">
        {Indicators(props.indicatorNumber, props.pageIndex)}
    </View>
)};

const Indicator = (props) => {
    const { width, height } = Dimensions.get('window');
    if (props.isComing)
    {
        return (
            <View className="rounded-full bg-light-1 p-1 opacity-50" style={{width: width*0.10}}></View>
        )
    }
    return (
        <View className="rounded-full bg-light-1 p-1" style={{width: width*0.10}}></View>
    )
}

export default ScreenIndicator