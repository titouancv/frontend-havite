import React, { useState, useRef,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import ImageManager from '../ImageManager';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';

const ImagesWidget = (props) => {
    const [illustrations, setIllustrations] = useState(props.images);
    const [isUpdating, setIsUpdating] = useState(false);

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
            let newIllustrations = [];
            for (let i = 0 ; i < illustrations.length; i++){
                if (i + 1 != imageNumber)
                    newIllustrations.push(illustrations[i]);
                else
                newIllustrations.push(result.assets[0].uri);
            }
            setIllustrations(newIllustrations);
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

    const updateWidget = () => {
        setIsUpdating(false);
    };

    const handleBack = () => {
        setIsUpdating(false);
    };

    const ImagePickerComponent = (props) => {
        let image = illustrations[props.imageNumber-1] || null;
        let imageNumber = props.imageNumber;
        let isNextOne = imageNumber === illustrations.length + 1;
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
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" }} className="h-1/2 w-[60%] rounded-lg"/>
                </View>
            </TouchableOpacity>
        )) || (
            <View className="h-full w-full bg-gray-700 rounded-lg flex justify-center items-center opacity-50"/>
        )}
        </View>
        )
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
                    <Text className="text-h4 text-left font-bold color-light-1 pl-2 mb-2">Test</Text>
                    <View className="h-3/4 px-2 mb-4">
                    <View className="flex-col space-y-2 justify-center items-center p-2">
                    <View className="h-1/2 w-full flex-row space-x-2 justify-center items-center">
                        <View className="h-full w-1/2"><ImagePickerComponent imageNumber={1} /></View>
                        <View className="h-full w-1/2"><ImagePickerComponent imageNumber={2} /></View>
                    </View>
                    <View className="h-1/2 w-full flex-row space-x-2 justify-center items-center">
                        <View className="h-full w-1/2"><ImagePickerComponent imageNumber={3} /></View>
                        <View className="h-full w-1/2"><ImagePickerComponent imageNumber={4} /></View>
                    </View>

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


const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 8,
    }});


export default ImagesWidget