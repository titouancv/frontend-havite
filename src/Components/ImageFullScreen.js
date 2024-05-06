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
      <Image source={{ uri: "https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg" }} className="h-full w-full rounded-lg"/>
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
