import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import ImageManager from '../ImageManager';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';
import WidgetModal from '../WidgetModal';

const ImagesWidget = (props) => {
    const [illustrations, setIllustrations] = useState(props.images);
    const [isUpdating, setIsUpdating] = useState(false);

    const updateWidget = () => {
        setIsUpdating(false);
    };

    const handleBack = () => {
        setIsUpdating(false);
    };

    const ImageModal = (props) => {
        return (
            <View className="flex-col space-y-2 justify-center items-center p-2">
                <View className="h-1/2 w-full flex-row space-x-2 justify-center items-center">
                    <View className="h-full w-1/2"><ImagePickerComponent imageNumber={1} illustrations={illustrations} setIllustrations={setIllustrations}/></View>
                    <View className="h-full w-1/2"><ImagePickerComponent imageNumber={2} illustrations={illustrations} setIllustrations={setIllustrations} /></View>
                </View>
                <View className="h-1/2 w-full flex-row space-x-2 justify-center items-center">
                    <View className="h-full w-1/2"><ImagePickerComponent imageNumber={3} illustrations={illustrations} setIllustrations={setIllustrations} /></View>
                    <View className="h-full w-1/2"><ImagePickerComponent imageNumber={4} illustrations={illustrations} setIllustrations={setIllustrations} /></View>
                </View>
            </View>
        )
    }

    if (isUpdating){
        return (        
            <WidgetModal title={"Modify your images"} isUpdating={isUpdating} handleBack={handleBack} updateWidget={updateWidget}>
                <ImageModal/>
            </WidgetModal>   
        )
    }
    else if (props.isModify) {
        return (
            <View className={`w-full ${props.position === "F" ? "h-full" : "h-[48%]"} rounded-lg mb-4 relative`}>
                <View className="relative h-full w-full">
                    <ModifyWidgetOverlay setIsUpdating={setIsUpdating} deleteWidget={props.deleteWidget} position={props.position}>
                        <ImageManager images={illustrations} footerText={props.text} position={props.position}/>
                    </ModifyWidgetOverlay>
                </View>
            </View>
        )
    }

    return (
        <View className={`w-full ${props.position === "F" ? "h-full" : "h-[48%]"} rounded-lg mb-4 relative`}>
            <ImageManager images={illustrations} footerText={props.text} position={props.position}/>
        </View>
    );
}

const ImagePickerComponent = (props) => {
    let illustrations = props.illustrations
    let image = illustrations[props.imageNumber-1] || null;
    let imageNumber = props.imageNumber;
    let isNextOne = imageNumber === illustrations.length + 1;

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
              props.setIllustrations(i);
              
          }
          else {
              let newIllustrations = [];
              for (let i = 0 ; i < illustrations.length; i++){
                  if (i + 1 != imageNumber)
                      newIllustrations.push(illustrations[i]);
                  else
                  newIllustrations.push(result.assets[0].uri);
              }
              props.setIllustrations(newIllustrations);
          }
        }
    };
  
    const deleteImage = async (imageNumber) => {
        let illustration = [];
        for (let i = 0 ; i < illustrations.length; i++){
            if (i + 1 != imageNumber)
                illustration.push(illustrations[i]);
        }
        props.setIllustrations(illustration);
    };

    return (
    <View className="h-full w-full">
    {image && (
        <View className="relative">
            <TouchableOpacity className="absolute h-8 w-8 z-10 top-1 right-1 bg-red-500 rounded-md flex justify-center items-center" onPress={()=> deleteImage(imageNumber)}>
                <Text className="font-bold">X</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-full w-full border-2 border-light-1 bg-blue-200 rounded-lg" onPress={() => pickImage(imageNumber)}>
                <Image source={{ uri: image }} className="h-full w-full rounded-lg" />
            </TouchableOpacity>
        </View>
    ) || (
    isNextOne && (
        <TouchableOpacity className="h-full w-full border-2 border-light-1 bg-grey-100 rounded-lg flex justify-center items-center" onPress={() => pickImage(imageNumber)}>
            <View className="h-full w-full bg-light-1 rounded-lg flex justify-center items-center opacity-30">
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" }} className="h-[40%] w-[56%] rounded-lg"/>
            </View>
        </TouchableOpacity>
    )) || (
        <View className="h-full w-full bg-gray-700 rounded-lg flex justify-center items-center opacity-50"/>
    )}
    </View>
    )
}


export default ImagesWidget