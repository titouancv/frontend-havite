import React, { useState, useRef, useContext } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, FlatList, Dimensions, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MediaContext } from '../Context/MediaContext';
import TextWidget from './Widgets/TextWidget';
import ImagesWidget from './Widgets/ImagesWidget';
import EmptyWidget from './Widgets/EmptyWidget';
import CreditsWidget from './Widgets/CreditsWidget.js';
import { BlurView } from 'expo-blur';
import { NewPublicationContext } from '../Context/NewPublicationContext';
import TitleView from './TitleView.js';
import {MoreVert, ThumbDown, ThumbDownFilled, Send} from '../assets/iconSVG/Icons.js'

const Article = (props) => {
    const navigation = useNavigation();
    const {loadMediaData} = useContext(MediaContext);
    const {update} = useContext(NewPublicationContext);

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const [data, setData] = useState(props.dataFrames);
    const [title, setTitle]= useState(props.title);
    const [authors, setAuthors] = useState(props.authors);
    const [sources, setSources] = useState(props.sources);
    const [tags, setTags] = useState(props.tags);
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDisikes] = useState(props.dislikes);

    const [dataFrames, setDataFrames] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

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
            if (frame.widgets)
            {
                
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
            }
            frames.push(widgets)
        })
        frames.push(<CreditsWidget authors={authors} date={props.date} sources={sources} tags={tags} likes={likes} dislikes={dislikes} color={props.complimentaryColor} textColor={props.secondaryColor} isModify={isModify}/>);
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

    const handleUpdateButton = () => {
        console.log(data);
        update(authors, sources, tags, title, data);
        setIsModify(!isModify);
    }
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[97%] p-2 flex" style={{width: width*0.938}}>
          {item}
        </View>
      );
    };

    const changePage = () => {
        navigation.navigate("MediaAccountPage");
        loadMediaData(props.logoMedia, props.primaryColor, props.secondaryColor, props.complimentaryColor, props.textColor);
    }

    const SocialBar = (props) => {
        return (
            <>
            {
                !isModify && (
                    <View className="w-full flex-row justify-around">
                        <TouchableOpacity className="flex-row items-center rotate-180" onPress={() => setIsLiked(!isLiked)}>
                            {isLiked ? (<ThumbDownFilled color={props.complimentaryColor}/>) : (<ThumbDown color={props.complimentaryColor}/>)}
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center" onPress={() => setIsDisliked(!isDisliked)}>
                            {isDisliked ? (<ThumbDownFilled color={props.complimentaryColor}/>) : (<ThumbDown color={props.complimentaryColor}/>)}
                        </TouchableOpacity>
                        <TouchableOpacity className="self-center w-1/2">
                            <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                                <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Questions ?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center">
                            <Send color={props.complimentaryColor}/>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center" onPress={handleOtherButton}>
                            <MoreVert color={props.complimentaryColor}/>
                        </TouchableOpacity>
                    </View>
                ) || (
                    <View className="w-full flex-row justify-around">
                    {
                        activeIndex === data.length ? (
                            <TouchableOpacity className="self-center w-[30%]" onPress={addFrame}>
                                <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                    <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Add a Frame</Text>
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity className="self-center w-[30%]" onPress={deleteFrame}>
                                <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                                    <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Delete Frame</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                        <TouchableOpacity className="self-center w-[30%]" onPress={handleUpdateButton}>
                            <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Update</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="self-center w-[30%]" onPress={handleOtherButton}>
                            <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}}>
                                <Text className="text-tiny-text text-center font-bold" style={{color: props.secondaryColor}}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
            </>
        )
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
                    <TitleView title={title} isModify={isModify} isUpdating={isUpdating} setIsUpdating={setIsUpdating} setTitle={setTitle}  complimentaryColor={props.complimentaryColor} secondaryColor={props.secondaryColor}/>
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
                <SocialBar complimentaryColor={props.complimentaryColor}/>
            </View>
        </View>
    );
}

export default Article