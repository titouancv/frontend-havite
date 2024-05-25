import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { ListOfButton } from '../../Components';


const MediaInformationPage = (props) => {

    let datas = props.data;
    return (
    <View className="h-full w-full py-2 bg-light-1">
        <View className="w-[90%] self-center space-y-2">
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.primaryColor}}>Name:</Text>
                <Text className="text-caption-text" style={{color: datas.primaryColor}}>{datas.name}</Text>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.primaryColor}}>Website:</Text>
                <View className="flex-row">
                    <TouchableOpacity className="border-2 rounded-lg p-1" style={{borderColor: datas.primaryColor}}>
                        <Text className="text-caption-text" style={{color: datas.primaryColor}}>{datas.website}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.primaryColor}}>Foundation Date:</Text>
                <Text className="text-caption-text" style={{color: datas.primaryColor}}>{datas.foundationDate}</Text>
            </View>
            <View className="w-full">
                <Text className="text-body-text font-bold mb-1" style={{color: datas.primaryColor}}>Editorial Adress:</Text>
                <Text className="text-caption-text" style={{color: datas.primaryColor}}>{datas.editorialAddress}</Text>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.owner} title="Owner(s)" primaryColor={datas.primaryColor} textColor={'#f9f4ea'}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.founder} title="Founder(s)"  primaryColor={datas.primaryColor} textColor={'#f9f4ea'}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.managingEditor} title="Managing Editor(s)"  primaryColor={datas.primaryColor} textColor={'#f9f4ea'}/>
            </View>
            <View className="w-full">
                <ListOfButton data={datas.publishingDirector} title="Publishing Director(s)"  primaryColor={datas.primaryColor} textColor={'#f9f4ea'}/>
            </View>
        </View>
    </View>
)};

export default MediaInformationPage