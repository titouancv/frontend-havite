import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';

const Article = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();

    const makeFrames = (props) => {
        let frames = [];
        props.dataFrames.forEach((frame) => {
    
            let images = [];
            if (frame.illustration1 != '')
                images.push(frame.illustration1);
            if (frame.illustration2 != '')
                images.push(frame.illustration2);
            if (frame.illustration3 != '')
                images.push(frame.illustration3);
            if (frame.illustration4 != '')
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
        frames.push(<CreditFrame authors={props.authors} date={props.date} sources={props.sources} tags={props.tags} textColor={props.textColor}/>);
        return frames;
    }

    const data = makeFrames(props);

    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] w-[366px] p-2 flex">
          {item}
        </View>
      );
    };

    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{borderColor: props.primaryColor}}>
            <View className="flex items-center">
                <TouchableOpacity className="w-full h-10 flex justify-center items-center rounded-t-xl" onPress={() => navigation.navigate("MediaAccountPage") } style={{backgroundColor: props.primaryColor}}>
                    <Image source={{ uri: props.logoMedia }} className="w-1/2 h-[80%]" />
                </TouchableOpacity>
                <View className="pb-3 h-[550px]">
                    <View className=" py-1 justify-center flex pb-1" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className="self-center text-caption-text font-bold" style={{color: props.primaryColor}}>{props.articleType}</Text>
                    </View>
                    <View className="" style={{ backgroundColor: props.secondaryColor}}>
                        <FlatList
                        data={data}
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
            <View className="w-full h-10 border-t-4 flex-row justify-between rounded-b-xl px-2" style={{ backgroundColor: props.primaryColor, borderColor: props.primaryColor}}>
                <View  className="flex-row space-x-4 ml-2">
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.complimentaryColor,}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.complimentaryColor}}>0</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="self-center w-1/2">
                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                        <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Question ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Article