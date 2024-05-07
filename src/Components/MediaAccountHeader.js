import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MediaAccountHeader(props) {
    const [isFollowed, onChangeIsFollowed] = React.useState(false);

    const changeFollowStatus = () => {
        onChangeIsFollowed(!isFollowed);
    };
      
  return (
    <View className="h-full w-full">
        <View className="h-full w-full flex-col space-y-2 justify-center" style={{ backgroundColor: props.data.secondaryColor}}>
            <View className="w-[90%] self-center flex-row justify-between">
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.data.primaryColor}}>
                    <Text className="text-body-text font-bold" style={{ color: props.data.secondaryColor}}>{props.data.numberOfArticles}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.secondaryColor}}>Publications</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.data.primaryColor}}>
                    <Text className="text-body-text font-bold" style={{ color: props.data.secondaryColor}}>{props.data.numberOfFollowers}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.secondaryColor}}>Followers</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.data.primaryColor}}>
                    <Text className="text-body-text text-light-1 font-bold" style={{ color: props.data.secondaryColor}}>{props.data.numberOfJournalist}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.secondaryColor}}>Journalists</Text>
                </View>
            </View>
            {
                !isFollowed && (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ borderColor: props.data.primaryColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold" style={{ color: props.data.primaryColor}}>Follow</Text>
                    </TouchableOpacity>
                ) || (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ backgroundColor: props.data.primaryColor, borderColor: props.data.primaryColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold" style={{ color: props.data.secondaryColor}}>Followed</Text>
                    </TouchableOpacity>
                )
            }
            <View className="w-[90%] self-center">
                <Text className="text-caption-text" style={{ color: props.data.primaryColor}}>{props.data.bio}</Text>
            </View>
        </View>
    </View>
  );
}