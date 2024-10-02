import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import { Cancel } from '../assets/iconSVG/Icons';

const WidgetModal = ({children, title, isUpdating, handleBack, updateWidget}) => {

return (        
    <Modal
        animationType="slide"
        transparent={true}
        visible={isUpdating}
        onRequestClose={handleBack}
    >
        <View className="absolute h-full w-full z-10 top-0 right-0">
            <BlurView intensity={50} style={styles.blurContainer}>
                <View className={`h-[6%]`}/>
                <View className="h-[90%] w-full flex-col">
                    <View className="flex-row justify-between px-2">
                        <Text className="text-h4 text-left font-bold color-light-1">{title}</Text>
                        <TouchableOpacity className="h-8 w-8 rounded-full flex justify-center items-center" onPress={handleBack}>
                            <Cancel color="#f9f4ea"/>
                        </TouchableOpacity>
                    </View>
                    <View className="px-2 mb-4">
                        {children}
                    </View>
                    <View className="w-[95%] self-center">
                        <TouchableOpacity className="w-full self-center bg-secondary rounded-lg p-2" onPress={updateWidget}>
                            <Text className="text-body-text font-bold text-light-1 self-center">Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </View>
        <View className="absolute h-full w-full rounded-lg z-8 top-0 right-0 bg-black opacity-40"></View>
    </Modal>   
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

export default WidgetModal;