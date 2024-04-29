import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const CoverFrame = ({text}) => (
    <View className="space-y-2">
        <Text className="text-h5 text-primary font-bold">Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne</Text>
        <Text className="text-caption-text text-primary">{text}</Text>
    </View>
);

export default CoverFrame