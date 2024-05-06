import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { ListOfButton } from '../../Components';


const MediaInformationPage = (props) => {

    let datas = props.data;
    return (
    <View className="h-full w-full py-2" style={{backgroundColor: datas.secondaryColor}}>
        <View className="w-[90%] self-center space-y-2">
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.textColor}}>Name:</Text>
                <Text className="text-caption-text" style={{color: datas.textColor}}>{datas.name}</Text>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.textColor}}>Website:</Text>
                <View className="flex-row">
                    <TouchableOpacity className="border-2 rounded-lg p-1" style={{borderColor: datas.textColor}}>
                        <Text className="text-caption-text" style={{color: datas.textColor}}>{datas.website}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.textColor}}>Foundation Date:</Text>
                <Text className="text-caption-text" style={{color: datas.textColor}}>{datas.foundationDate}</Text>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.textColor}}>Editorial Adress:</Text>
                <Text className="text-caption-text" style={{color: datas.textColor}}>{datas.editorialAddress}</Text>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.owner} title="Owner(s):" textColor={datas.textColor}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.founder} title="Founder(s):" textColor={datas.textColor}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.managingEditor} title="Managing Editor(s):" textColor={datas.textColor}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.publishingDirector} title="Publishing Director(s):" textColor={datas.textColor}/>
            </View>
        </View>
    </View>
)};

export default MediaInformationPage