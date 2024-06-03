import React, { useState, useRef,} from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList , StyleSheet} from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import NewFrameStep1 from './NewFrameStep1';
import NewFrameStep2 from './NewFrameStep2';

const NewArticle = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeDataFrame, setActiveDataFrame] = useState(null);
    const [isNewFrame, setIsNewFrame] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [stepNumber, setStepNumber] = useState(1);
    const [frameType, setFrameType] = useState("");
    const [remainingFrames, setRemainingFrames] = useState(4);
    const [dataFrames, setDataFrames] = useState((props.dataFrame || []));
    const navigation = useNavigation();
    const flatListRef = useRef(null);

    const addIcon = require('./../assets/icons/addIcon.png');

    const changeIsNewFrame = () => {
        if (remainingFrames > 0)
            {
                setIsNewFrame(!isNewFrame);
            }
    }
    const changeStepNumber = () => {
        setFrameType("");
        setStepNumber(1);
    }

    const changeFrameType = (type) => {
        setFrameType(type);
        setStepNumber(2);
    }

    const addFrame = (typeOfFrame, title, text1, text2, text3, text4, illustration1, illustration2, illustration3, illustration4) => {
        if (isNewFrame && typeOfFrame && (title || text1 || text2 || text3 || text4 || illustration1  || illustration2  || illustration3  || illustration4 )){
            if (isModify)
            {
                dataFrames[activeIndex].typeOfFrame=typeOfFrame
                dataFrames[activeIndex].title= title
                dataFrames[activeIndex].text1= text1
                dataFrames[activeIndex].text2= text2
                dataFrames[activeIndex].text3= text3
                dataFrames[activeIndex].text4= text4
                dataFrames[activeIndex].illustration1= illustration1
                dataFrames[activeIndex].illustration2= illustration2
                dataFrames[activeIndex].illustration3= illustration3
                dataFrames[activeIndex].illustration4= illustration4
                setIsModify(false);
                setActiveDataFrame(null);
                setDataFrames(dataFrames);
            }
            else {
                dataFrames.push({ id: dataFrames.length - 1, 
                    typeOfFrame:typeOfFrame, 
                    title: title,
                    text1: text1,
                    text2: text2,
                    text3: text3,
                    text4: text4,
                    illustration1: illustration1,
                    illustration2: illustration2,
                    illustration3: illustration3,
                    illustration4: illustration4,
                })
                setDataFrames(dataFrames);
                setRemainingFrames(remainingFrames - 1);
            }
        }
        setFrameType("");
        setStepNumber(1);
        setIsNewFrame(!isNewFrame);
    }

    const modifyFrame = () => {
        if (activeIndex > -1) { 
            setActiveDataFrame(dataFrames[activeIndex]);
            setFrameType(dataFrames[activeIndex].typeOfFrame);
            setIsModify(true);
            setStepNumber(2);
            setIsNewFrame(true);
        }
    }

    const deleteFrame = () => {
        if (activeIndex > -1) { 
            dataFrames.splice(activeIndex, 1);
            setDataFrames(dataFrames);
            setRemainingFrames(remainingFrames + 1);
        }
    }

    const makeFrames = (props) => {
        let frames = [];
        dataFrames.forEach((frame) => {
    
            let images = [];
            if (frame.illustration1 != null)
                images.push(frame.illustration1);
            if (frame.illustration2 != null)
                images.push(frame.illustration2);
            if (frame.illustration3 != null)
                images.push(frame.illustration3);
            if (frame.illustration4 != null)
                images.push(frame.illustration4);
    
            switch (frame.typeOfFrame) {
                case "coverFrame":
                    frames.push(<CoverFrame title={frame.title} text={frame.text1} images={images} textColor={props.textColor}></CoverFrame>);
                    break;
                case "textImageFrame":
                    frames.push(<TextImageFrame text={frame.text1} images={images} textColor={props.textColor}></TextImageFrame>);
                    break;
                case "imageTextFrame":
                    frames.push(<ImageTextFrame text={frame.text1} images={images} textColor={props.textColor}></ImageTextFrame>);
                    break;
                case "textFrame":
                    frames.push(<TextFrame text={frame.text1} textColor={props.textColor}></TextFrame>);
                    break;
                case "imageFrame":
                    frames.push(<ImageFrame images={images} />);
                    break;
                case "textImageTextFrame":
                    frames.push(<TextImageTextFrame text={frame.text1} images={images} textColor={props.textColor}></TextImageTextFrame>);
              }
        })
        frames.push(
            <View className="h-full w-full flex justify-center">
                <TouchableOpacity className="w-[90%] h-[90%] border-4 rounded-lg p-1 flex-col justify-center items-center self-center space-y-2" style={{borderColor: props.complimentaryColor}} onPress={changeIsNewFrame}>
                    {
                        remainingFrames > 0 && (
                            <View className="flex-col justify-center items-center self-center space-y-2">
                                <Image source={addIcon} className="h-20 w-20"/>
                                <Text className="text-h5 text-primary font-bold self-center" style={{color: props.complimentaryColor}}>Add a Frame</Text>
                                <Text className="text-caption-text text-primary font-bold self-center" style={{color: props.complimentaryColor}}>You can still add {remainingFrames} frames</Text>
                            </View>
                        ) || (
                            <View className="flex-col justify-center items-center self-center space-y-2">
                                <Text className="text-caption-text text-primary font-bold self-center" style={{color: props.complimentaryColor}}>You can't add frames</Text>
                            </View>  
                        )
                    }
                </TouchableOpacity>
            </View>
        );
        return frames;
    }

    let data = makeFrames(props);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
      }).current;

    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] w-[366px] p-2 flex">
          {item}
        </View>
      );
    };

    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{borderColor: props.primaryColor}}>
            {
                isNewFrame && (
                    <View className="h-full w-full absolute top-0 left-0 z-10 border-4 border-light-1 rounded-xl" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                        {
                            stepNumber == 1 && (
                                <NewFrameStep1  changeFrameType={changeFrameType} changeIsNewFrame={changeIsNewFrame}/>
                            ) || (
                                <NewFrameStep2 changeStepNumber={changeStepNumber} addFrame={addFrame} frameType={frameType} data={activeDataFrame} isModify={isModify}/>
                            )
                        }
                    </View>
                )
            }
            <View className="flex items-center">
                <View className="w-full h-10 flex justify-center items-center rounded-t-xl" style={{backgroundColor: props.primaryColor}}>
                    <View className="w-1/2 h-[80%]">
                        <Image source={{ uri: props.logoMedia }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />
                    </View>
                </View>
                <View className="pb-3 h-[550px]">
                    <View className="py-1 justify-center flex pb-1" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className="self-center text-caption-text font-bold" style={{color: props.secondaryColor}}>Publication in progress</Text>
                    </View>
                    <View className="" style={{ backgroundColor: props.secondaryColor}}>
                        <FlatList
                        ref = {flatListRef}
                        data={data}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        onViewableItemsChanged={onViewableItemsChanged}
                        onContentSizeChange={()=> flatListRef.current.scrollToEnd()}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                        />
                        <View className="w-full flex justify-center">
                            <View className="w-3/4 self-center">
                                <View className="flex-row justify-center absolute bottom-6 left-0 right-0">
                                    {data.map((_, index) => (
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
            </View>
            <View className="w-full h-10 border-t-4 flex justify-center rounded-b-xl px-2" style={{ backgroundColor: props.primaryColor, borderColor: props.primaryColor}}>
            {
                activeIndex === (dataFrames.length) && (
                    <View className="w-full flex items-center">
                    {
                        data.length > 1 && (
                            <TouchableOpacity className="w-full py-1 justify-center flex border-2 rounded-lg" style={{borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}} onPress={() => props.changeArticleStep(dataFrames)}>
                                <Text className="self-center text-caption-text font-bold" style={{color: props.secondaryColor}}>Next</Text>
                            </TouchableOpacity>
                        ) || (
                            <View className="w-full py-1 justify-center flex">
                                <Text className="self-center text-caption-text font-bold" style={{color: props.complimentaryColor}}>You need to add one frame</Text>
                            </View>
                        )
                    }
                    </View>  
                ) || (
                    <View className="w-full flex-row justify-between items-center">
                        <TouchableOpacity className="w-[49%] py-1 justify-center flex border-2 rounded-lg" style={{borderColor: props.complimentaryColor, backgroundColor: props.secondaryColor}} onPress={(modifyFrame)}>
                            <Text className="self-center text-caption-text font-bold" style={{color: props.complimentaryColor}}>Modify this frame</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-[49%] py-1 justify-center flex border-2 rounded-lg" style={{borderColor: props.complimentaryColor, backgroundColor: props.complimentaryColor}} onPress={(deleteFrame)}>
                            <Text className="self-center text-caption-text font-bold" style={{color: props.secondaryColor}}>Delete this frame</Text>
                        </TouchableOpacity>
                    </View>    
                )
            }
            </View>
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


export default NewArticle