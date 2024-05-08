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
                    <Text className="text-body-text font-bold" style={{ color: props.data.textColor}}>{props.data.numberOfArticles}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.textColor}}>Publications</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.data.primaryColor}}>
                    <Text className="text-body-text font-bold" style={{ color: props.data.textColor}}>{props.data.numberOfFollowers}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.textColor}}>Followers</Text>
                </View>
                <View className="w-[30%] flex-col justify-center items-center rounded-lg p-1" style={{ backgroundColor: props.data.primaryColor}}>
                    <Text className="text-body-text font-bold" style={{ color: props.data.textColor}}>{props.data.numberOfJournalist}</Text>
                    <Text className="text-caption-text" style={{ color: props.data.textColor}}>Journalists</Text>
                </View>
            </View>
            {
                !isFollowed && (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ borderColor: props.data.textColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold" style={{ color: props.data.textColor}}>Follow</Text>
                    </TouchableOpacity>
                ) || (
                    <TouchableOpacity className="w-[90%] border-4 rounded-lg flex self-center items-center p-1" style={{ backgroundColor: props.data.textColor, borderColor: props.data.textColor}} onPress={changeFollowStatus}>
                        <Text className="text-caption-text font-bold" style={{ color: props.data.secondaryColor}}>Followed</Text>
                    </TouchableOpacity>
                )
            }
            <View className="w-[90%] self-center">
                <Text className="text-caption-text" style={{ color: props.data.textColor}}>{props.data.bio}</Text>
            </View>
        </View>
    </View>
  );
}