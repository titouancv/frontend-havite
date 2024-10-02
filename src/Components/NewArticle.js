import React, { useState, useRef, useContext } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MediaContext } from '../Context/MediaContext';
import { NewPublicationContext } from '../Context/NewPublicationContext';
import TextWidget from './Widgets/TextWidget';
import ImagesWidget from './Widgets/ImagesWidget';
import EmptyWidget from './Widgets/EmptyWidget';

const NewArticle = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();
    const {loadMediaData} = useContext(MediaContext);
    const [isModify, setIsModify] = useState(true);
    const [data, setData] = useState([]);
    const [dataFrames, setDataFrames] = useState();
    const [frameNumber, setFrameNumber] = useState(0);
    const frameNumberMax = 4;
    const {setDataFrame, dataFrame} = useContext(NewPublicationContext);

    const { width, height } = Dimensions.get('window');


    //--------------------------------------------------------- Frames

    const addFrame = () => {
        if (frameNumber < frameNumberMax){
            let newFrame = {
                index: dataFrame.length,
                textWidget: [],
                imagesWidget: [],
            }
            dataFrame.push(newFrame);
            setDataFrame(dataFrame);
            setFrameNumber(frameNumber+1);
            setDataFrames(makeFrames(data));
        }
    }

    const deleteFrame = () => {
        dataFrame.splice(activeIndex, 1);
        setDataFrame(dataFrame);
        setFrameNumber(frameNumber-1);
        setDataFrames(makeFrames(dataFrame));
    }

    
    //--------------------------------------------------------- Widgets

    const addWidget = (position, widgetName) => {
        let frame = dataFrame.at(activeIndex);
        let textWidget = frame.textWidget;
        let imagesWidget = frame.imagesWidget;

        let newWidget = {
            position: position,
        }

        switch (widgetName) {
            case "textWidget":
                newWidget.index = textWidget.length,
                newWidget.text = ""
                textWidget.push(newWidget);
                break;
            case "imagesWidget":
                newWidget.index = imagesWidget.length,
                newWidget.images = [];
                imagesWidget.push(newWidget);
                break;

        }       

        dataFrame.at(activeIndex).textWidget = textWidget;
        dataFrame.at(activeIndex).imagesWidget = imagesWidget;
        setDataFrame(dataFrame); 
        setDataFrames(makeFrames(dataFrame));
    }

    const deleteWidget = (position, widgetName) => {
        let frame = dataFrame.at(activeIndex);
        switch (widgetName) {
            case "textWidget":
                let textWidget = frame.textWidget
                const indexToRemove = textWidget.findIndex(obj => obj.position === position);
                if (indexToRemove !== -1) {
                    textWidget.splice(indexToRemove, 1);
                }
                dataFrame.at(activeIndex).textWidget = textWidget;
                break;
            case "imagesWidget":
                let imagesWidget = frame.imagesWidget
                const indexToRemove_ = imagesWidget.findIndex(obj => obj.position === position);
                if (indexToRemove_ !== -1) {
                    imagesWidget.splice(indexToRemove_, 1);
                }
                dataFrame.at(activeIndex).imagesWidget = imagesWidget;
                break;

        } 
        setDataFrame(dataFrame);
        setDataFrames(makeFrames(dataFrame));
    }

    
    //--------------------------------------------------------- Others

    const makeFrames = () => {
        let frames = [];
        dataFrame.forEach((frame) => {
            let widgets = [];
            let isFullSize = false;
            let index = 0;
            frame.textWidget.forEach((widget) => {
                if (widget.position === "T")
                    widgets.unshift(
                    <TextWidget 
                        text={widget.text} 
                        textColor={props.textColor} 
                        isModify={isModify} 
                        setIsModify={setIsModify} 
                        position={widget.position} 
                        deleteWidget={deleteWidget}
                        frameIndex={frame.index}

                    />);
                else
                    widgets.push(
                    <TextWidget 
                        text={widget.text} 
                        textColor={props.textColor} 
                        isModify={isModify} 
                        setIsModify={setIsModify} 
                        position={widget.position} 
                        deleteWidget={deleteWidget}
                        frameIndex={frame.index}

                    />);
                    
                if (widget.position === "F")
                    isFullSize = true;
            })
            index = 0;
            frame.imagesWidget.forEach((widget) => {
                if (widget.position === "T")
                    widgets.unshift(
                    <ImagesWidget 
                    images={imageURI} 
                    position={widget.position} 
                    isModify={isModify} 
                    setIsModify={setIsModify} 
                    deleteWidget={deleteWidget}
                    frameIndex={frame.index}

                    />);
                else
                    widgets.push(
                    <ImagesWidget 
                    images={widget.images} 
                    position={widget.position} 
                    isModify={isModify} 
                    setIsModify={setIsModify} 
                    deleteWidget={deleteWidget}
                    frameIndex={frame.index}

                    />);


                if (widget.position === "F")
                    isFullSize = true;
            })

            if(widgets.length === 0)
                widgets.push(
                <EmptyWidget 
                complimentaryColor={props.complimentaryColor} 
                isModify={isModify} 
                setIsModify={setIsModify} 
                position={"F"} 
                addWidget={addWidget}

                />)
            else if (widgets.length == 1 && !isFullSize)
                widgets.push(
                <EmptyWidget 
                complimentaryColor={props.complimentaryColor} 
                isModify={isModify} 
                setIsModify={setIsModify} 
                position={"B"} 
                addWidget={addWidget}

                />)
            frames.push(widgets)
        })

        frames.push(
            <View className="h-full w-full flex-col space-y-2">
                <TouchableOpacity className={`w-full h-full border-4 rounded-lg mb-2`} style={{borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}} onPress={addFrame}>
                    <View className="h-full w-full flex justify-center">
                        <Text className="text-h5 text-center font-bold" style={{color: props.secondaryColor}}>Add a frame</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
        return frames;
    }
 

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
      }).current;

    const handleNextButton = () => {
        navigation.navigate("CreditsPage");
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] p-2 flex" style={{width: width*0.938}}>
          {item}
        </View>
      );
    };

    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{borderColor: props.primaryColor}}>
            <View className="flex items-center">
                <TouchableOpacity className="relative w-full h-10 flex justify-center items-center rounded-t-xl" style={{backgroundColor: props.primaryColor}}>
                    <View className="w-1/2 h-[80%]">
                    <Image source={{ uri: props.logoMedia }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
                    </View>
                    <TouchableOpacity className="absolute top-1 right-1 z-10 p-2 rounded-lg" style={{ backgroundColor: props.complimentaryColor}} onPress={() => setIsModify(!isModify)}>
                        <Text className=" text-tiny-text text-center" style={{color: props.secondaryColor}}>{isModify ? "See" : "Modify"}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View className=""  style={{ backgroundColor: props.secondaryColor}}>
                    <View className=" p-1 justify-center flex" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className=" text-body-text text-center" style={{color: props.secondaryColor}}>{"You can still add "+ (frameNumber - frameNumberMax)*-1 +" frames"}</Text>
                    </View>
                    <View className=""  style={{height: height*0.58}}>
                        <FlatList
                        data={makeFrames(dataFrame)}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                        />
                    </View>
                    <View className="w-full flex justify-center absolute bottom-2 left-0 right-0">
                            <View className="w-3/4 self-center">
                                <View className="flex-row justify-center">
                                    {makeFrames(data).map((_, index) => (
                                        index === activeIndex && (
                                            <View
                                                key={index}
                                                className={`w-[6%] h-1 rounded-sm mx-1`}
                                                style={{ backgroundColor: props.complimentaryColor}}
                                            /> 
                                        ) || (
                                            <View
                                                key={index}
                                                className={`w-[6%] h-1 rounded-sm mx-1 opacity-30`}
                                                style={{ backgroundColor: props.complimentaryColor}}
                                            />
                                        )
                                    ))}
                                </View>
                            </View>
                        </View>
                </View>
            </View>
            <View className="w-full h-10 border-t-4 flex-row justify-center rounded-b-xl px-2 space-x-2" style={{ backgroundColor: props.primaryColor, borderColor: props.primaryColor}}>
                    {
                        activeIndex === dataFrame.length ? (
                            <TouchableOpacity className="self-center w-full" onPress={handleNextButton}>
                                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                        <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Next</Text>
                                    </View>
                                </TouchableOpacity>
                        ) : (
                            <>
                                <TouchableOpacity className="self-center w-[48%]" onPress={deleteFrame}>
                                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                                        <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Delete this Frame</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className="self-center w-[48%]" onPress={handleNextButton}>
                                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                        <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Next</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )
                    }
            </View>
        </View>
    );
}


export default NewArticle