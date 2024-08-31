import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';

const ModifyWidgetOverlay = ({children, setIsUpdating, deleteWidget, position}) => {
    return (
        <>
            <View className="absolute h-full w-full border-2 border-light-1 rounded-lg  z-10 top-0 right-0">
                <BlurView intensity={10} style={styles.blurContainer}>
                    <TouchableOpacity className="absolute p-2 px-6 z-10 bottom-[45%] left-[18%] bg-light-1 rounded-md flex justify-center items-center" onPress={() => setIsUpdating(true)}>
                        <Text className="font-bold text-body-text">Modify</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="absolute p-2 px-6 z-10 bottom-[45%] right-[18%] bg-red-500 rounded-md flex justify-center items-center" onPress={() => deleteWidget(position)}>
                        <Text className="font-bold text-body-text">Delete</Text>
                    </TouchableOpacity>
                </BlurView>
            </View>
            <View className="absolute h-full w-full rounded-lg z-8 top-0 right-0 bg-black opacity-30"></View>
            {children}
        </>
    )
}

const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 8,
    }});

export default ModifyWidgetOverlay;