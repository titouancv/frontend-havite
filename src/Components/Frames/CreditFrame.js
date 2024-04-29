import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const CreditFrame = () => (
    <View className="space-y-2">
        <View className="w-full">
            <Text className="text-body-text text-primary font-bold mb-1">Autor(s):</Text>
            <Text className="text-caption-text text-primary">Jean-Michel AZERTY</Text>
        </View>
        <View className="w-full">
            <Text className="text-body-text text-primary font-bold mb-1">Date:</Text>
            <Text className="text-caption-text text-primary">12 mars 2024 - 12h35</Text>
        </View>
        <View className="w-full">
            <Text className="text-body-text text-primary font-bold mb-1">Source(s):</Text>
            <TouchableOpacity className="border-2 border-primary rounded-lg p-1">
                <Text className="text-caption-text text-primary">https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal</Text>
            </TouchableOpacity>
        </View>
        <View className="w-full">
            <Text className="text-body-text text-primary font-bold mb-1">Tag(s):</Text>
            <View className="flex-row space-x-2">
                <TouchableOpacity className="flex border-2 border-primary rounded-lg p-1">
                    <Text className="text-caption-text text-primary">#France</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex border-2 border-primary rounded-lg p-1">
                    <Text className="text-caption-text text-primary">#Ecologie</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex border-2 border-primary rounded-lg p-1">
                    <Text className="text-caption-text text-primary">#Santé</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default CreditFrame