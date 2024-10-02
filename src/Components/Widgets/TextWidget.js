import React, { useState, useRef, useContext } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';
import WidgetModal from '../WidgetModal';
import { NewPublicationContext } from '../../Context/NewPublicationContext';

const UpdateTextWidgetChildren = (props) => {
    const [textUpdated, setTextUpdated]= useState(props.text);
    const [textLength, setTextLength] = useState(props.text.length);
    let maxCharacteres = props.maxCharacteres;

    const changeText = (value) => {
        if (textLength <= maxCharacteres || value.length < textLength){
            setTextUpdated(value)
            props.setText(value)
            setTextLength(value.length)
        }
    }

    return (
        <View className="relative h-full">
            <Text className={`absolute top-0 right-1 z-10 text-caption-text ${maxCharacteres >= textLength ? "text-light-1  opacity-70" : "text-red-500"} font-bold text-right`}>{textLength+"/"+maxCharacteres}</Text>
            <View className="absolute top-5 left-0 z-8 h-[96%] w-full bg-gray-700 rounded-lg flex justify-center items-center px-2 p-1"/>
            <ScrollView automaticallyAdjustKeyboardInsets={true}  className="absolute top-5 left-0 z-10 h-[96%] w-full p-2 flex">
                <TextInput 
                    placeholder= {"Enter your text..."}
                    className="text-caption-text text-light-1 h-full"
                    value={textUpdated}
                    onChangeText={changeText}
                    multiline={true}
                    textAlignVertical="top"
                />
                <View style={{ height: 30 }} />
            </ScrollView>
        </View>
    )
}

const TextWidget = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [text, setText]= useState(props.text);
    const {UpdateTextWidget} = useContext(NewPublicationContext);
    let maxCharacteres = props.position === "F" ? 1200 : 600;

    const updateWidget = () => {
        if (text.length <= maxCharacteres){
            UpdateTextWidget(text, props.frameIndex, props.position)
            setIsUpdating(false);
        }
    };

    const handleBack = () => {
        setText(props.text);
        setIsUpdating(false);
    };

    if (isUpdating){
        return (
            <WidgetModal title={"Modify your text"} isUpdating={isUpdating} handleBack={handleBack} updateWidget={updateWidget}>
                <UpdateTextWidgetChildren text={text} maxCharacteres={maxCharacteres} setText={setText}/>
            </WidgetModal> 
        )
    }
    else if (props.isModify) {
        return (
            <View className={`w-full ${props.position === "F" ? "h-full" : "h-[48%]"} rounded-lg mb-4`}>
                <View className="h-full relative w-full">
                    <ModifyWidgetOverlay setIsUpdating={setIsUpdating} deleteWidget={props.deleteWidget} position={props.position} widgetName={"textWidget"}>
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

export default TextWidget