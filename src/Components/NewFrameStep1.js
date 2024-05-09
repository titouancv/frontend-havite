import React, { useState, useRef,} from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList , StyleSheet} from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const NewFrameStep1 = (props) => {
    return (
        <View className="h-full w-full">
            <BlurView intensity={50} style={styles.blurContainer}>
                <View className="h-full w-full flex-col justify-between py-2">
                    <View className="h-[7%] flex justify-center items-center">
                        <Text className="text-h4 text-light-1 font-bold">Choose a frame</Text>
                    </View>
                    <View className="h-[86%] flex-col space-y-2 p-2">
                        <View className="h-[32%] flex-row space-x-2">
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("coverFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">cover</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("textImageFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">textImage</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="h-[32%] flex-row space-x-2">
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("imageTextFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">imageText</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("textFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">text</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="h-[32%] flex-row space-x-2">
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("imageFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">image</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-full w-[49%] py-1 self-center items-center border-2 border-light-1 rounded-lg" onPress={() => (props.changeFrameType("textImageTextFrame"))}>
                                <Text className="text-h5 text-light-1 font-bold">textImageText</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="h-[7%] w-[95%] self-center items-center">
                        <TouchableOpacity className="w-full py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={props.changeIsNewFrame}>
                            <Text className="text-h5 text-light-1 font-bold">Cancel</Text>
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


export default NewFrameStep1