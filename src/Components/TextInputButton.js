import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Dimensions } from 'react-native';

const TextInputButton = (props) => {
    return (
    <View className="w-full">
        <Text className="text-h5 font-bold color-light-1 mb-1">{props.title}</Text>
        <View className="border-2 border-light-1 rounded-lg p-2">
            <TextInput 
                placeholder= {props.placeholder}
                secureTextEntry={props.secureTextEntry} 
                placeholderTextColor={"#ff7d72"} 
                className="text-body-text color-secondary" 
                autoComplete={props.autoComplete}
                value={props.value}
                onChangeText={props.setText}
                keyboardType={props.keyboardType}
            />
        </View>
    </View>
)};

export default TextInputButton

export const TextInputButton2 = (props) => {
    const { width, height } = Dimensions.get('window');
    const [value, setValue] = useState("");
    let isOnLayout = props.isOnLayout;
    let inputRef = useRef();

    const handleChageText = (text) => {
        props.onChangeText(text)
        setValue(text);
    }

    const handleOnLayout= () => {
        if (isOnLayout || isOnLayout == null)
            inputRef.current.focus()
    }

    return (
    <View className="w-full">
        {props.title && (<Text className="text-h5 font-bold color-light-1 mb-1" style={{color: props.color}}>{props.title}</Text>)}
        <View className="relative w-full self-center" style={{height: props.TextInputHeight}}>
              <View className="absolute z-8 top-0 left-0 w-full h-full opacity-70 p-2" style={{backgroundColor: props.backgroundColor}}/>
              <View className="absolute z-10 top-0 left-0 w-full h-full rounded-lg p-2">
                  <TextInput 
                      ref={inputRef}
                      onLayout={handleOnLayout}
                      placeholder={props.placeholder} 
                      secureTextEntry={props.secureTextEntry}
                      placeholderTextColor={props.placeholderTextColor}
                      style={{color: props.placeholderTextColor}} 
                      value={value}
                      className="text-body-text" 
                      onChangeText={handleChageText}
                      returnKeyType={props.returnKeyType}
                      keyboardType={props.keyboardType}
                      autoComplete={props.autoComplete}
                      onSubmitEditing={props.onSubmitEditing}
                      multiline={props.multiline}
                  />
              </View>
            </View>
    </View>
)};


/**
     *               
     * <TextInputButton2
        title="email"
        placeholder={authData.email} 
        secureTextEntry={false}
        placeholderTextColor="#f9f4ea"
        color="#305536" 
        backgroundColor="#305536"
        onChangeText={setEmail}
        returnKeyType="done"
        keyboardType="email-address"
        autoComplete='email'
        onSubmitEditing={changeEmail}
        />
 */