import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet} from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import TextInputButton from './TextInputButton';

const NewFrameStep2 = (props) => {
    const [title, setTitle] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    let text3 = "";
    let text4 = "";
    let illustration1 = "";
    let illustration2 = "";
    let illustration3 = "";
    let illustration4 = "";

    return (
        <View className="h-full w-full">
            <BlurView intensity={50} style={styles.blurContainer}>
                <View className="h-full w-full flex-col justify-between py-2">
                    <View className="h-[7%] flex justify-center items-center">
                        <Text className="text-h4 text-light-1 font-bold">{props.frameType}</Text>
                    </View>
                    <View className="h-[86%] flex-col space-y-2 p-2">
                        {
                            props.frameType === "coverFrame" && (
                                <View className="h-1/3">
                                    <TextInputButton title="Title:" placeholder="Enter the title" autoComplete="" secureTextEntry={false} setText={setTitle}/>
                                </View>
                            )
                        }
                        {
                            props.frameType != "imageFrame" && (
                                <View className="h-1/3">
                                    <View className="w-full">
                                        <Text className="text-h5 font-bold color-light-1 mb-1">Text 1:</Text>
                                        <View className="h-2/3 border-2 border-light-1 rounded-lg p-2">
                                            <TextInput 
                                                placeholder= "Enter your text"
                                                placeholderTextColor={"#ff7d72"} 
                                                className="h-full w-full text-body-text color-secondary"
                                                onChangeText={(text) => setText1(text)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        {
                            props.frameType === "textImageTextFrame" && (
                                <View className="h-1/3">
                                    <View className="w-full">
                                        <Text className="text-h5 font-bold color-light-1 mb-1">Text 2:</Text>
                                        <View className="h-2/3 border-2 border-light-1 rounded-lg p-2">
                                            <TextInput 
                                                placeholder= "Enter your text"
                                                placeholderTextColor={"#ff7d72"} 
                                                className="h-full w-full text-body-text color-secondary"
                                                onChangeText={(text) => setText2(text)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                    <View className="h-[7%] w-[95%] self-center items-center flex-row space-x-2">
                        <TouchableOpacity className="w-[49%] py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={props.changeStepNumber}>
                                <Text className="text-h5 text-light-1 font-bold">Back</Text>
                            </TouchableOpacity>
                        <TouchableOpacity className="w-[49%] py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={() => (props.addFrame(props.frameType, title, text1, text2, text3, text4, illustration1, illustration2, illustration3, illustration4))}>
                            <Text className="text-h5 text-light-1 font-bold">Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </View>
    );
}


const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 8,
    }});


export default NewFrameStep2