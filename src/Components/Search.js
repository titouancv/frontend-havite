import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';


const Search = (props) => {
    const [value, setValue] = useState("");
    let inputRef = useRef();
    return (
        <View className="h-full w-full">
        <ScrollView automaticallyAdjustKeyboardInsets={true} scrollEnabled={false} className="h-full w-full">
            <View className="">
                <View className=" w-full border-2 border-light-1 rounded-lg p-2">
                    <TextInput 
                        ref={inputRef}
                        onLayout={() => inputRef.current.focus()}
                        placeholder={props.placeholder} 
                        value={value}
                        placeholderTextColor={"#9ca3af"} 
                        className="text-body-text color-light-1" 
                        onChangeText={(text) => setValue(text)}
                        returnKeyType={"done"}
                        onSubmitEditing={() => props.onSubmitEditing(value)}
                    />
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default Search;