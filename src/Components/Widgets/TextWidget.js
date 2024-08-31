import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';

const TextWidget = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [text, setText]= useState(props.text);
    const [textLength, setTextLength] = useState(props.text.length);
    let maxCharacteres = props.position === "F" ? 1200 : 600;

    const updateWidget = () => {
        if (textLength <= maxCharacteres){
            setIsUpdating(false);
        }
    };

    const handleBack = () => {
        setText(props.text);
        setTextLength(props.text.length || 0)
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
                        <View className="h-[90%] w-full flex-col pt-20">
                            <Text className="text-h4 text-left font-bold color-light-1 pl-2 mb-2">Update your text</Text>
                            <View className="h-3/4 px-2 mb-4">
                                <View className="relative h-full">
                                    <Text className={`absolute top-0 right-1 z-10 text-caption-text ${maxCharacteres >= textLength ? "text-gray-500" : "text-red-700"} font-bold text-right`}>{textLength+"/"+maxCharacteres}</Text>
                                    <View className="absolute top-5 left-0 z-8 h-[96%] w-full bg-gray-700 rounded-lg flex justify-center items-center px-2 p-1"/>
                                    <ScrollView automaticallyAdjustKeyboardInsets={true}  className="absolute top-5 left-0 z-10 h-[96%] w-full p-2 flex">
                                        <TextInput 
                                            placeholder= {"Enter your text..."}
                                            className="text-caption-text text-light-1 h-full"
                                            value={text}
                                            onChangeText={changeText}
                                            multiline={true}
                                            textAlignVertical="top"
                                        />
                                        <View style={{ height: 30 }} />
                                    </ScrollView>
                                </View>
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
    else if (props.isModify) {
        return (
            <View className={`w-full ${props.position === "F" ? "h-full" : "h-[48%]"} rounded-lg mb-4`}>
                <View className="h-full relative w-full">
                    <ModifyWidgetOverlay setIsUpdating={setIsUpdating} deleteWidget={props.deleteWidget} position={props.position}>
                        <Text className="text-caption-text"  style={{color: props.textColor}}>{text}</Text>
                    </ModifyWidgetOverlay>
                </View>
            </View>
        )
    }

    return (
        <View className="w-full mb-2">
            <Text className="text-caption-text"  style={{color: props.textColor}}>{text}</Text>
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

export default TextWidget