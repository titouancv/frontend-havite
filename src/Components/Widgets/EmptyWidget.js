import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';

const EmptyWidget = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const { width, height } = Dimensions.get('window');
    const updateWidget = () => {
        if (textLength <= maxCharacteres){
            setIsUpdating(false);
        }
    };

    const handleBack = () => {
        setIsUpdating(false);
    };

    const changeText = (value) => {
        setText(value)
        setTextLength(value.length)
    }

    if (isUpdating){
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={isUpdating}
            onRequestClose={handleBack}
            >
                <View className="absolute h-full w-full z-10 top-0 right-0">
                    <BlurView intensity={50} style={styles.blurContainer}>
                        <View className="h-[90%] w-full flex-col pt-10">
                            <Text className="text-h4 text-left font-bold color-light-1 pl-2 mb-2">Widgets Market</Text>
                            <View className="h-3/4 px-2 mb-4 flex-col space-y-2">
                                <View className="h-[30%] w-full">
                                    <Text className="text-h5 text-left font-bold color-light-1 pl-2 mb-2">Images</Text>
                                    <ScrollView className="h-[75%] w-full flex-row space-x-2 pl-2" horizontal={true}>
                                        <TouchableOpacity className="h-full rounded-lg px-1 bg-gray-700" style={{width: width*0.23}} onPress={() => props.addWidget(props.position !== "F" ? "B": "T", "imagesWidget")}>
                                            <View className="h-[85%] w-full flex-col justify-center">
                                                <View className="h-[40%] w-[85%] bg-light-1 rounded-lg self-center"/>
                                            </View>
                                            <Text className="text-tiny-text text-center color-light-1">Half</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className={`w-[25%] h-full rounded-lg px-1 bg-gray-700 ${props.position !== "F" && "opacity-40"}`} style={{width: width*0.23}} onPress={() => props.addWidget("F", "imagesWidget")}>
                                            <View className="h-[85%] w-full flex-col justify-center">
                                                <View className="h-[75%] w-[70%] bg-light-1 rounded-lg self-center"/>
                                            </View>
                                            <Text className="text-tiny-text text-center color-light-1">Full</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                                <View className="h-[30%] w-full">
                                    <Text className="text-h5 text-left font-bold color-light-1 pl-2 mb-2">Text</Text>
                                    <ScrollView className="h-[75%] w-full flex-row space-x-2 pl-2" horizontal={true}>
                                        <TouchableOpacity className="h-full rounded-lg px-1 bg-gray-700" style={{width: width*0.23}} onPress={() => props.addWidget(props.position !== "F" ? "B": "T", "textWidget")}>
                                            <View className="h-[85%] w-full flex-col justify-center">
                                                <View className="h-[40%] w-[85%] bg-light-1 rounded-lg self-center"/>
                                            </View>
                                            <Text className="text-tiny-text text-center color-light-1">Half</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className={`w-[25%] h-full rounded-lg px-1 bg-gray-700 ${props.position !== "F" && "opacity-40"}`} style={{width: width*0.23}} onPress={() => props.addWidget("F", "textWidget")}>
                                            <View className="h-[85%] w-full flex-col justify-center">
                                                <View className="h-[75%] w-[70%] bg-light-1 rounded-lg self-center"/>
                                            </View>
                                            <Text className="text-tiny-text text-center color-light-1">Full</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </View>
                            <View className="h-[7%] w-[95%] self-center items-center flex-row space-x-2">
                                <TouchableOpacity className="w-full py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={handleBack}>
                                    <Text className="text-h5 text-light-1 font-bold">Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </BlurView>
                </View>
                <View className="absolute h-full w-full rounded-lg z-8 top-0 right-0 bg-black opacity-40"></View>
            </Modal>   
        )
    }
    else if (props.isModify) {
        return (
            <TouchableOpacity className={`w-full ${props.position === "F" ? "h-full" : "h-[48%]"} border-4 rounded-lg mb-2`} style={{borderColor: props.complimentaryColor}} onPress={() => setIsUpdating(true)}>
                <View className="h-full w-full flex justify-center">
                    <Text className="text-h5 text-center font-bold" style={{color: props.complimentaryColor}}>Add a widget</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
        </View>
)};

const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 8,
    }});

export default EmptyWidget