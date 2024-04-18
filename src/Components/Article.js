import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { CoverFrame, SourceFrame } from '../Units';

let logomedia = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Le_monde_logo.svg/1280px-Le_monde_logo.svg.png"

const Article = ({ name, imageUrl, text }) => {

    const data = [
        <CoverFrame text={text}></CoverFrame>,
        <SourceFrame/>,
        <SourceFrame/>,
      ];

    const [activeIndex, setActiveIndex] = useState(0);

    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="w-[345px]">
          {item}
        </View>
      );
    };
  
    return (
        <View className="flex-col bg-light-2 rounded-2xl border-2 border-secondary mx-2 my-3">
            <View className="flex items-center space-y-4">
                <View className="w-full h-12 flex justify-center items-center bg-secondary rounded-t-xl">
                    <Image source={{ uri: logomedia }} className="w-1/2 h-3/4 object-contain" />
                </View>
                <View className="m-3 h-[450px]">
                    <View>
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
                                <View className="flex-row justify-center items-center absolute bottom-0 left-0 right-0">
                                    {data.map((_, index) => (
                                    <View
                                        key={index}
                                        className={`w-1/3 h-1 rounded-sm ${index === activeIndex && "bg-primary" || "bg-light-3"} mx-1`}
                                    />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-full h-10 bg-light-3 border-t-2 border-secondary bg-light-3 flex-row justify-between rounded-b-2xl px-2">
                <View  className="flex-row space-x-4 ml-2">
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                        <Text className="text-caption-text text-secondary font-bold">0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                        <Text className="text-caption-text text-secondary font-bold">0</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="self-center w-1/2">
                    <View className="bg-secondary rounded-lg p-1 pr-2">
                        <Text className="text-tiny-text text-light-1 text-center">Question ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Article