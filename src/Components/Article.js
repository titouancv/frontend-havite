import React, { useState, useRef, useContext } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MediaContext } from '../Context/MediaContext';
import TextWidget from './Widgets/TextWidget';
import ImagesWidget from './Widgets/ImagesWidget';
import EmptyWidget from './Widgets/EmptyWidget';
import CreditsWidget from './Widgets/CreditsWidget.js';

const Article = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();
    const {loadMediaData} = useContext(MediaContext);
    const [isModify, setIsModify] = useState(false);
    const [data, setData] = useState(props.dataFrames);
    const [dataFrames, setDataFrames] = useState();

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
        setDataFrames(makeFrames(data));
    }

    const addFrame = () => {
        let newFrame = {
            id: data.length,
            widgets: []
        }
        data.push(newFrame);
        setData(data)
        setDataFrames(makeFrames(data));
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
        frames.push(<CreditsWidget authors={props.authors} date={props.date} sources={props.sources} tags={props.tags} likes={props.likes} dislikes={props.dislikes} color={props.complimentaryColor} textColor={props.secondaryColor} isModify={isModify}/>);
        return frames;
    }
 

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
      }).current;

    const handleOtherButton = () => {
        setIsModify(!isModify);
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
                <TouchableOpacity className="w-full h-10 flex justify-center items-center rounded-t-xl" onPress={changePage} style={{backgroundColor: props.primaryColor}}>
                    <View className="w-1/2 h-[80%]">
                    <Image source={{ uri: props.logoMedia }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
                    </View>
                </TouchableOpacity>
                <View className=""  style={{ backgroundColor: props.secondaryColor}}>
                    <View className=" p-1 justify-center flex" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className=" text-body-text font-bold" style={{color: props.secondaryColor}}>{props.articleType}</Text>
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
                !isModify && (
                    <>
                        <View  className="flex-row space-x-4 ml-2">
                            <TouchableOpacity className="flex-row items-center space-x-1">
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-row items-center space-x-1">
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-row items-center space-x-1">
                                <Image source={{ uri: "https://static-00.iconduck.com/assets.00/share-icon-2048x1911-60w04qpe.png" }} className="w-6 h-6" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className="self-center w-1/2">
                            <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                                <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Questions ?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center space-x-1" onPress={handleOtherButton}>
                            <Image source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/icons-2/other-40.png" }} className="w-6 h-6" />
                        </TouchableOpacity>
                    </>
                ) || (
                    <>
                    {
                        activeIndex === data.length ? (
                            <TouchableOpacity className="self-center w-[48%]" onPress={addFrame}>
                                <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                    <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Add a Frame</Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity className="self-center w-[48%]" onPress={deleteFrame}>
                                <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                                    <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Delete this Frame</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                        <TouchableOpacity className="self-center w-[48%]" onPress={handleOtherButton}>
                            <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Update</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )
            }
            </View>
        </View>
    );
}


export default Article