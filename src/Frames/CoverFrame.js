import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const CoverFrame = ({text}) => (
    <View className="">
        <Text className="text-h5 font-bold">Titre</Text>
        <Text className="text-caption-text">{text}</Text>
    </View>
);

export default CoverFrame