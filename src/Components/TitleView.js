import React, { useState, useRef, useContext } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

import { BlurView } from 'expo-blur';
import WidgetModal from './WidgetModal';
import { Edit } from '../assets/iconSVG/Icons';


const TitleViewModal = (props) => {
    const [textUpdated, setTextUpdated]= useState(props.text);
    const [textLength, setTextLength] = useState(props.text.length);
    let maxCharacteres = props.maxCharacteres;
    const { width, height } = Dimensions.get('window');

    const changeText = (value) => {
        if (textLength <= maxCharacteres || value.length < textLength){
            setTextUpdated(value)
            props.setText(value)
            setTextLength(value.length)
        }
    }
    let inputRef = useRef();

    return (
        <View className="relative w-full justify-center px-2 "  style={{height: height*0.15}}>
            <Text className={`absolute top-0 right-1 z-10 text-caption-text ${maxCharacteres >= textLength ? "text-gray-500" : "text-red-700"} font-bold text-right`}>{textLength+"/"+maxCharacteres}</Text>
            <View className="absolute top-5 left-2 z-6 h-[70%] w-full bg-gray-700 opacity-80 rounded-lg flex justify-center items-center px-2 p-1"/>
            <View className="absolute top-5 left-2 z-10 h-[70%] w-full p-2 flex">
                <TextInput 
                    placeholder= {"Enter the title..."}
                    ref={inputRef}
                    onLayout={() => inputRef.current.focus()}
                    className="text-body-text font-bold text-light-1 h-full"
                    value={textUpdated}
                    onChangeText={changeText}
                    multiline={true}
                    textAlignVertical="top"
                    returnKeyType={"done"}
                    blurOnSubmit={true}
                    onSubmitEditing={() => props.onSubmitEditing()}
                />
                <View style={{ height: 30 }} />
            </View>
        </View>
        )
}

const TitleView = (props) => {
    const [text, setText]= useState(props.title); 
    let maxCharacteres = 80;

    const updateWidget = () => {
        if (text.length <= maxCharacteres){
            props.setTitle(text)
            props.setIsUpdating(false);
        }
    };

    const handleBack = () => {
        setText(props.title);
        props.setIsUpdating(false);
    };

    if (props.isUpdating){
        return (
            <WidgetModal title={"Modify the title"} isUpdating={props.isUpdating} handleBack={handleBack} updateWidget={updateWidget}>
                <TitleViewModal text={text} maxCharacteres={maxCharacteres} setText={setText} onSubmitEditing={updateWidget}/>
            </WidgetModal>  
        )
    }

    return (
        <View className="relative p-1 justify-center flex" style={{ backgroundColor: props.complimentaryColor}}>
            <Text className=" text-body-text font-bold" style={{color: props.secondaryColor}}>{text}</Text>
            {props.isModify && (
                <TouchableOpacity className="absolute z-10 top-1/5 right-1 p-1 border bg-light-1 rounded-md flex justify-center items-center" onPress={() => props.setIsUpdating(true)}>
                    <Edit color="#000000"/>
                </TouchableOpacity>
            )}
        </View>
)};

export default TitleView