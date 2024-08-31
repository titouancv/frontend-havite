import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';

const UpdateModal = ({children, title, isUpdating, handleBack, updateWidget}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isUpdating}
            onRequestClose={handleBack}
        >
        <View className="absolute h-full w-full z-10 top-0 right-0">
            <BlurView intensity={50} style={styles.blurContainer}>
                <View className="h-[90%] w-full flex-col pt-20">
                    <Text className="text-h4 text-left font-bold color-light-1 pl-2 mb-2">{title}</Text>
                    <View className="h-3/4 px-2 mb-4">
                    {children}
                    </View>
                    <View className="h-[7%] w-[95%] self-center items-center flex-row space-x-2">
                        <TouchableOpacity className="w-[49%] py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={handleBack}>
                                <Text className="text-h5 text-light-1 font-bold">Back</Text>
                            </TouchableOpacity>
                        <TouchableOpacity className="w-[49%] py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={updateWidget}>
                            <Text className="text-h5 text-light-1 font-bold">Update</Text>
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

export default UpdateModal