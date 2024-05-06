import React, {useState} from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageFullScreen = ({ imageUri }) => {
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const changeIsImageFullScreen = () => {
     setIsImageFullScreen(!isImageFullScreen);
  }

  const images = [{url: imageUri},]

  return (
    <View className="h-full w-full">
    { !isImageFullScreen && (
    <TouchableOpacity className="w-full h-full" onPress={changeIsImageFullScreen}>
      <Image source={{ uri: imageUri }} className="h-full w-full rounded-lg"/>
    </TouchableOpacity>
    ) || (
    <Modal transparent={true}>
      <ImageViewer
        imageUrls={images}
        enableSwipeDown={true}
        onSwipeDown={changeIsImageFullScreen}
        renderIndicator={() => null}
      />
      <TouchableOpacity style={styles.closeButton} onPress={changeIsImageFullScreen}>
        <Image source={{uri: "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"}} style={styles.closeIcon} />
      </TouchableOpacity>
    </Modal>
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
