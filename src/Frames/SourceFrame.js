import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const SourceFrame = () => (
    <View className="space-y-2">
        <View className="w-full">
            <Text className="text-body-text font-bold mb-1">Autor(s):</Text>
            <Text className="text-caption-text">Jean-Michel AZERTY</Text>
        </View>
        <View className="w-full">
            <Text className="text-body-text font-bold mb-1">Source(s):</Text>
            <Text className="text-caption-text">https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal</Text>
        </View>
    </View>
);

export default SourceFrame