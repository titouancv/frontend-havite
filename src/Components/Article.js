import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { CoverFrame, CreditFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';

let logomedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png"

const Article = ({ name, imageUrl, text }) => {
    const navigation = useNavigation();

    const data = [
        <CoverFrame text={text}></CoverFrame>,
        <CreditFrame/>,
        <CreditFrame/>,
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
        <View className="flex-col bg-light-1 rounded-2xl border-4 border-primary mx-2 my-3">
            <View className="flex items-center">
                <TouchableOpacity className="w-full h-10 flex justify-center items-center bg-primary rounded-t-xl" onPress={() => navigation.navigate("MediaAccountPage") }>
                    <Image source={{ uri: logomedia }} className="w-1/2 h-[80%]" />
                </TouchableOpacity>
                <View className="pb-3 h-[475px]">
                    <View className="bg-light-3 py-1 justify-center flex mb-1">
                        <Text className="self-center text-caption-text text-primary font-bold">Article</Text>
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
                                    <View
                                        key={index}
                                        className={`w-[6%] h-1 rounded-sm ${index === activeIndex && "bg-primary" || "bg-light-3"} mx-1`}
                                    />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-full h-10 border-t-4 border-primary bg-light-3 flex-row justify-between rounded-b-xl px-2">
                <View  className="flex-row space-x-4 ml-2">
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                        <Text className="text-caption-text text-primary font-bold">0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                        <Text className="text-caption-text text-primary font-bold">0</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="self-center w-1/2">
                    <View className="border-2 border-primary rounded-lg p-1 pr-2">
                        <Text className="text-tiny-text text-primary text-center font-bold">Question ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Article