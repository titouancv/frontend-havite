import React, { useState, useRef, useContext } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MediaContext } from '../Context/MediaContext';
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

    const { width, height } = Dimensions.get('window');

    const deleteWidget = (position) => {
        let frame = data.at(activeIndex);
        let widgets = frame.widgets
        const indexToRemove = widgets.findIndex(obj => obj.position === position);
        if (indexToRemove !== -1) {
            widgets.splice(indexToRemove, 1);
        }
        data.at(activeIndex).widgets = widgets;
        setData(data)
        setDataFrames(makeFrames(data));
    }

    const deleteFrame = () => {
        data.splice(activeIndex, 1);
        setData(data)
        setFrameNumber(frameNumber-1);
        setDataFrames(makeFrames(data));
    }

    const addFrame = () => {
        if (frameNumber < frameNumberMax){
            let newFrame = {
                id: data.length,
                widgets: []
            }
            data.push(newFrame);
            setData(data)
            setFrameNumber(frameNumber+1);
            setDataFrames(makeFrames(data));
        }
    }

    const addWidget = (position, widgetName) => {
        let frame = data.at(activeIndex);
        let widgets = frame.widgets

        let newWidget = {
            id: widgets.length,
            name: widgetName,
            position: position,
        }
        switch (widgetName) {
            case "textWidget":
                newWidget.text = ""
                break;
            case "imagesWidget":
                newWidget.images = []
                break;

        }       

        widgets.push(newWidget);
        data.at(activeIndex).widgets = widgets;
        setData(data)
        setDataFrames(makeFrames(data));
    }

    const makeFrames = () => {
        let frames = [];
        data.forEach((frame) => {

            let widgets = [];
            let index = 0;
            frame.widgets.forEach((widget) => {
                index++;
                switch (widget.name) {
                    case "textWidget":
                        if (widget.position === "T")
                            widgets.unshift(<TextWidget text={widget.text} textColor={props.textColor} isModify={isModify} setIsModify={setIsModify} position={widget.position} deleteWidget={deleteWidget}/>);
                        else
                            widgets.push(<TextWidget text={widget.text} textColor={props.textColor} isModify={isModify} setIsModify={setIsModify} position={widget.position} deleteWidget={deleteWidget}/>);
                        
                        if (widgets.length == 1 && index === frame.widgets.length && widget.position !== "F")
                            widgets.push(<EmptyWidget complimentaryColor={props.complimentaryColor} isModify={isModify} setIsModify={setIsModify} position={"B"} addWidget={addWidget}/>)
                        break;
                    case "imagesWidget":
                        widgets.push(<ImagesWidget images={widget.images} position={widget.position} isModify={isModify} setIsModify={setIsModify} deleteWidget={deleteWidget}/>);
                        if (widgets.length == 1 && index === frame.widgets.length && widget.position !== "F")
                            widgets.push(<EmptyWidget complimentaryColor={props.complimentaryColor} isModify={isModify} setIsModify={setIsModify} position={"B"} addWidget={addWidget}/>)
                        break;

                }
            })
            if(widgets.length === 0)
                widgets.push(<EmptyWidget complimentaryColor={props.complimentaryColor} isModify={isModify} setIsModify={setIsModify} position={"F"} addWidget={addWidget}/>)
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
        props.changeArticleStep(data);
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] p-2 flex" style={{width: width*0.938}}>
          {item}
        </View>
      );
    };

    const changePage = () => {
        navigation.navigate("MediaAccountPage");
        loadMediaData(props.logoMedia, props.primaryColor, props.secondaryColor, props.complimentaryColor, props.textColor);
    }

    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{borderColor: props.primaryColor}}>
            <View className="flex items-center">
                <TouchableOpacity className="relative w-full h-10 flex justify-center items-center rounded-t-xl" onPress={changePage} style={{backgroundColor: props.primaryColor}}>
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
                        data={makeFrames(data)}
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
                        activeIndex === data.length ? (
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