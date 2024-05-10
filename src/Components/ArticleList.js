import React from 'react';
import { View, ScrollView, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Article from './Article';

import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function ArticleList(props) {

  let data = props.data;

  const renderItem = ({ item }) => (
    <Article 
    date={item.date} 
    logoMedia={item.logoMedia}
    articleType={item.articleType}
    authors={item.authors} 
    sources={item.sources}
    tags={item.tags} 
    primaryColor={item.primaryColor}
    secondaryColor={item.secondaryColor} 
    complimentaryColor={item.complimentaryColor}
    textColor={item.textColor}
    dataFrames={props.dataFrames}  
    likes={item.likes}
    dislikes={item.dislikes}      
    />
  );

  return (
      <View className="h-full">
        <View className="flex h-full flex-col w-full">
            <View className="w-full flex justify-center" style={{ backgroundColor: props.secondaryColor}}>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
      </View>
  );
}