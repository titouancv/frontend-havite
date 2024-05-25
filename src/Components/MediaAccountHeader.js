import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MediaAccountHeader(props) {
    const [isFollowed, onChangeIsFollowed] = React.useState(false);

    const changeFollowStatus = () => {
        onChangeIsFollowed(!isFollowed);
    };
      
  return (
    <View className="h-full w-full">
        <View className="h-full w-full flex-col space-y-2 pt-2 bg-light-1">
            <View className="w-[90%] self-center flex-row justify-between">
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.colorData.primaryColor}}>
                    <Text className="text-body-text font-bold text-light-1">{props.data.numberOfArticles}</Text>
                    <Text className="text-caption-text text-light-1">Publications</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.colorData.primaryColor}}>
                    <Text className="text-body-text font-bold text-light-1">{props.data.numberOfFollowers}</Text>
                    <Text className="text-caption-text text-light-1">Followers</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.colorData.primaryColor}}>
                    <Text className="text-body-text font-bold text-light-1">{props.data.numberOfJournalist}</Text>
                    <Text className="text-caption-text text-light-1">Journalists</Text>
                </View>
            </View>
            {
                !isFollowed && (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ borderColor: props.colorData.primaryColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold" style={{ color: props.colorData.primaryColor}}>Follow</Text>
                    </TouchableOpacity>
                ) || (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ backgroundColor: props.colorData.primaryColor, borderColor: props.colorData.primaryColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold text-light-1">Followed</Text>
                    </TouchableOpacity>
                )
            }
            <View className="w-[90%] self-center">
                <Text className="text-caption-text" style={{ color: props.colorData.primaryColor}}>{props.data.bio}</Text>
            </View>
        </View>
    </View>
  );
}