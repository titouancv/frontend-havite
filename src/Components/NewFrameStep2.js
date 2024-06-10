import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet} from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import TextInputButton from './TextInputButton';

const NewFrameStep2 = (props) => {
    let data = (props.data || {});
    const [title, setTitle] = useState(data.title || null);
    const [illustrations, setIllustrations] = useState(data.illustrations);
    const [text1, setText1] = useState(data.contents[0] || "");
    const [text2, setText2] = useState(data.contents[1] || "");
    const pickImage = async (imageNumber) => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
  
      if (!result.canceled) {
        if (imageNumber > illustrations.length){
            let i = [];
            i = i.concat(illustrations);
            i.push(result.assets[0].uri);
            setIllustrations(i);
            
        }
        else {
            let illustration = [];
            for (let i = 0 ; i < illustrations.length; i++){
                if (i + 1 != imageNumber)
                    illustration.push(illustrations[i]);
                else
                    illustration.push(result.assets[0].uri);
            }
            setIllustrations(illustration);
        }
      }
    };

    const deleteImage = async (imageNumber) => {
        let illustration = [];
        for (let i = 0 ; i < illustrations.length; i++){
            if (i + 1 != imageNumber)
                illustration.push(illustrations[i]);
        }
        setIllustrations(illustration);
      };

    const ImagePickerComponent = (props) => {
        let image = illustrations[props.imageNumber-1] || null;
        let imageNumber = props.imageNumber;
        let isNextOne = imageNumber === illustrations.length + 1;
        return (
        <View className="h-full w-full">
        {image && (
            <View className="relative">
                <TouchableOpacity className="absolute h-5 w-5 z-10 top-0 right-0 bg-red-500 rounded-md flex justify-center items-center" onPress={()=> deleteImage(imageNumber)}><Text className="font-bold">X</Text></TouchableOpacity>
                <TouchableOpacity className="h-full w-full border-2 border-light-1 bg-blue-200 rounded-lg" onPress={() => pickImage(imageNumber)}>
                    <Image source={{ uri: image }} className="h-full w-full rounded-lg" />
                </TouchableOpacity>
            </View>
        ) || (
        isNextOne && (<TouchableOpacity className="h-full w-full border-2 border-light-1 bg-grey-100 rounded-lg flex justify-center items-center" onPress={() => pickImage(imageNumber)}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" }} className="h-1/2 w-1/2 rounded-lg"/>
            </TouchableOpacity>
        )) || (
            <View className="h-full w-full bg-light-1 rounded-lg flex justify-center items-center">
            </View>
        )}
        </View>
        )
    }

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
                            props.frameType != "textFrame" && (
                                <View className="h-1/3">
                                    <View className="w-full">
                                        <Text className="text-h5 font-bold color-light-1 mb-1">Images:</Text>
                                        <View className="h-2/3 border-2 border-light-1 rounded-lg p-2">
                                            <View className="flex-row space-x-2 justify-center items-center">
                                                <View className="h-full w-[23%]"><ImagePickerComponent imageNumber={1} /></View>
                                                <View className="h-full w-[23%]"><ImagePickerComponent imageNumber={2} /></View>
                                                <View className="h-full w-[23%]"><ImagePickerComponent imageNumber={3} /></View>
                                                <View className="h-full w-[23%]"><ImagePickerComponent imageNumber={4} /></View>
                                            </View>
                                        </View>
                                    </View>
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
                                                value={text1}
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
                                                value={text2}
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
                        <TouchableOpacity className="w-[49%] py-1 self-center items-center border-4 border-light-1 rounded-lg" onPress={() => (props.addFrame(props.frameType, title, text1, text2, illustrations))}>
                            <Text className="text-h5 text-light-1 font-bold">{props.isModify && "Modify" || "Add"}</Text>
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