import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { CoverFrame, CreditFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';

let logomedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png"

const Article = (props) => {
    const navigation = useNavigation();

    const data = [
        <CoverFrame text={props.text} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} complimentaryColor={props.complimentaryColor} textColor={props.textColor}></CoverFrame>,
        <CreditFrame authors={props.authors} date={props.date} sources={props.sources} tags={props.tags} textColor={props.textColor}/>,
        <CreditFrame authors={props.authors} date={props.date} sources={props.sources} tags={props.tags} textColor={props.textColor}/>,
      ];

    const [activeIndex, setActiveIndex] = useState(0);

    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] w-[365px] p-3 ">
          {item}
        </View>
      );
    };

  
    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{backgroundColor: props.secondaryColor, borderColor: props.primaryColor}}>
            <View className="flex items-center">
                <TouchableOpacity className="w-full h-10 flex justify-center items-center rounded-t-xl" onPress={() => navigation.navigate("MediaAccountPage") } style={{backgroundColor: props.primaryColor}}>
                    <Image source={{ uri: logomedia }} className="w-1/2 h-[80%]" />
                </TouchableOpacity>
                <View className="pb-3 h-[550px]">
                    <View className=" py-1 justify-center flex mb-1" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className="self-center text-caption-text font-bold" style={{color: props.primaryColor}}>{props.articleType}</Text>
                    </View>
                    <View className="">
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
                                                style={{ backgroundColor: props.primaryColor}}
                                            /> 
                                        ) || (
                                            <View
                                                key={index}
                                                className={`w-[6%] h-1 rounded-sm mx-1`}
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
            <View className="w-full h-10 border-t-4 flex-row justify-between rounded-b-xl px-2" style={{ backgroundColor: props.complimentaryColor, borderColor: props.primaryColor}}>
                <View  className="flex-row space-x-4 ml-2">
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.textColor,}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.textColor}}>0</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="self-center w-1/2">
                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.textColor}}>
                        <Text className="text-tiny-text text-center font-bold" style={{color: props.textColor}}>Question ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Article