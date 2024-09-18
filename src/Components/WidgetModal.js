import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';

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
                <View className="h-[90%] w-full flex-col">
                    <View className="w-full flex-row justify-between py-2 px-4">
                        <Text className="text-h4 text-left font-bold color-light-1">{title}</Text>
                        <TouchableOpacity className="h-8 w-8 bg-black rounded-full flex justify-center items-center" onPress={handleBack}>
                            <Text className="font-bold text-light-1">X</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="h-[85%] px-2 mb-4">
                        {children}
                    </View>
                    <View className="h-[7%] w-[95%] self-center items-center flex-row space-x-2">
                        <TouchableOpacity className="w-full py-1 self-center items-center bg-light-1 rounded-lg" onPress={updateWidget}>
                            <Text className="text-h5 font-bold">Modify</Text>
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