import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageView from "react-native-image-viewing";

const ImageFullScreen = ({ mainImage, images, indexImage, footerText }) => {
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const changeIsImageFullScreen = () => {
     setIsImageFullScreen(!isImageFullScreen);
  }

  let index = indexImage;
  let imagesList = [];
  const setImagesURI = () => {
    images.forEach(element => {
      imagesList.push({uri: element})
    });
  }

  setImagesURI();

  return (
    <View className="h-full w-full">
    { !isImageFullScreen && (
    <TouchableOpacity className="w-full h-full" onPress={changeIsImageFullScreen}>
      <Image source={{ uri: mainImage }} className="h-full w-full rounded-lg"/>
    </TouchableOpacity>
    ) || (
      <ImageView
        images={imagesList}
        imageIndex={index}
        visible={isImageFullScreen}
        onRequestClose={changeIsImageFullScreen}
        FooterComponent={() => (<View className="p-2 mb-12"><Text className="text-light-1">{footerText}</Text></View>)}
      />
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1, // Ensure close button is above image
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
});

export default ImageFullScreen;
