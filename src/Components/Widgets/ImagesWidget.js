import React, { useState, useContext,} from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Dimensions , StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import ImageManager from '../ImageManager';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import { NewPublicationContext } from '../../Context/NewPublicationContext';
import WidgetModal from '../WidgetModal';
import { Cancel } from '../../assets/iconSVG/Icons';

const ImagesWidget = (props) => {
    const [images, setImages] = useState([]);
    const [illustrations, setIllustrations] = useState(props.images);
    const {UpdateImagesWidget} = useContext(NewPublicationContext);
    const { width, height } = Dimensions.get('window');
    const [isUpdating, setIsUpdating] = useState(false);

    const updateWidget = () => {
        UpdateImagesWidget(images, props.frameIndex, props.position)
        setIsUpdating(false);
    };

    const handleBack = () => {
        setIsUpdating(false);
    };

    const ImageModal = (props) => {
        return (
            <View className="flex-col space-y-2 justify-center items-center p-2 mt-6">
                <View className="w-full flex-row space-x-2 justify-center items-center" style={{height: width/2 - 10}}>
                    <View className="h-full " style={{width: width/2 - 10}}><ImagePickerComponent imageNumber={1} illustrations={illustrations} setIllustrations={setIllustrations} images={images} setImages={setImages}/></View>
                    <View className="h-full " style={{width: width/2 - 10}}><ImagePickerComponent imageNumber={2} illustrations={illustrations} setIllustrations={setIllustrations} images={images} setImages={setImages} /></View>
                </View>
                <View className="w-full flex-row space-x-2 justify-center items-center" style={{height: width/2 - 10}}>
                    <View className="h-full " style={{width: width/2 - 10}}><ImagePickerComponent imageNumber={3} illustrations={illustrations} setIllustrations={setIllustrations} images={images} setImages={setImages} /></View>
                    <View className="h-full " style={{width: width/2 - 10}}><ImagePickerComponent imageNumber={4} illustrations={illustrations} setIllustrations={setIllustrations} images={images} setImages={setImages} /></View>
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
                    <ModifyWidgetOverlay setIsUpdating={setIsUpdating} deleteWidget={props.deleteWidget} position={props.position} widgetName={"imagesWidget"}>
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
    let images = props.images;
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

              let j = [];
              j = j.concat(images);
              j.push(result.assets[0]);
              props.setImages(j);
              
          }
          else {
              let newIllustrations = [];
              let newImages = [];
              for (let i = 0 ; i < illustrations.length; i++){
                  if (i + 1 != imageNumber)
                  {
                    newIllustrations.push(illustrations[i]);
                    newImages.push(image[i]);
                  }
                  else
                  {
                    newIllustrations.push(result.assets[0].uri);
                    newImages.push(result.assets[0]);
                  }

              }
              props.setIllustrations(newIllustrations);
              props.setImages(newImages);
          }
        }
    };
  
    const deleteImage = async (imageNumber) => {
        let illustration = [];
        let image = [];
        for (let i = 0 ; i < illustrations.length; i++){
            if (i + 1 != imageNumber){
                illustration.push(illustrations[i]);
                image.push(images[i]);
            }
        }
        props.setIllustrations(illustration);
        props.setImages(image);
    };

    return (
    <View className="h-full w-full">
    {image && (
        <View className="relative">
            <TouchableOpacity className="absolute z-10 top-2 right-2 bg-light-1 rounded-full flex justify-center items-center" onPress={()=> deleteImage(imageNumber)}>
                <Cancel color="#b91c1c"/>
            </TouchableOpacity>
            <TouchableOpacity className="h-full w-full border-2 border-light-1 bg-blue-200 rounded-lg" onPress={() => pickImage(imageNumber)}>
                <Image source={{ uri: image }} className="h-full w-full rounded-lg" />
            </TouchableOpacity>
        </View>
    ) || (
    isNextOne && (
        <TouchableOpacity className="h-full w-full border-2 border-light-1 bg-grey-100 rounded-lg flex justify-center items-center" onPress={() => pickImage(imageNumber)}>
            <View className="h-full w-full bg-light-1 rounded-lg flex justify-center items-center opacity-30">
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/992/992651.png" }} className="h-[60%] w-[60%] rounded-lg"/>
            </View>
        </TouchableOpacity>
    )) || (
        <View className="h-full w-full bg-gray-700 rounded-lg flex justify-center items-center opacity-50"/>
    )}
    </View>
    )
}


export default ImagesWidget