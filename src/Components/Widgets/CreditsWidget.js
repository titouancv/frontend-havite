import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Modal} from 'react-native';
import Search from '../Search';
import { FormRow } from '../FormRow';
import WidgetModal from '../WidgetModal';

const CreditsWidget = (props) => {
    const { width, height } = Dimensions.get('window');
    const [isInputAuthors, setIsInputAuthors] = useState(false);
    const [isInputSources, setIsInputSources] = useState(false);
    const [isInputTags, setIsInputTags] = useState(false);
    const [authors, setAuthors] = useState(props.authors);
    const [sources, setSources] = useState(props.sources);
    const [sourcesReduce, setSourcesReduce] = useState(reduceUrls(props.sources));
    const [tags, setTags] = useState(props.tags);
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);
    const [date, setDate] = useState(props.date);

    const openAuthors = () => {
        setIsInputAuthors(true);
    }

    const openSources = () => {
        setIsInputSources(true);
    }

    const openTags = () => {
        setIsInputTags(true);
    }

    const addAuthors = (value) => {
        setIsInputAuthors(false)
        if (value !== "" && !authors.find(element => (element == value)))
            authors.unshift(value);
        setAuthors(authors);
    }

    const addSources = (value) => {
        setIsInputSources(false);
        if (value !== "" && !sources.find(element => (element == value)))
            sources.unshift(value);
        setSourcesReduce(reduceUrls(sources));
        setSources(sources);
    }

    const addTags = (value) => {
        setIsInputTags(false);
        if (value !== "" && !tags.find(element => (element == value)))
            tags.unshift(value);
        setTags(tags);
    }

    const deleteAuthor = (value) => {
        let updatedList = [];
        authors.forEach(element => {
            if (element !== value)
                updatedList.push(element);
        });
        setAuthors(updatedList);
    }

    const deleteSource = (value) => {
        let updatedList = [];
        sources.forEach(element => {
            if (element !== value)
                updatedList.push(element);
        });
        setSourcesReduce(reduceUrls(updatedList));
        setSources(updatedList);
    }

    const deleteTag = (value) => {
        let updatedList = [];
        tags.forEach(element => {
            if (element !== value)
                updatedList.push(element);
        });
        setTags(updatedList);
    }

    function reduceUrl(url) {
        try {
          const parsedUrl = new URL(url);
          
          const domain = parsedUrl.hostname;
      
          const domainParts = domain.split('.');
      
          if (domainParts.length > 2) {
            return domainParts.slice(-2).join('.');
          }
      
          return domain;
        } catch (error) {
          console.error("URL invalide :", error);
          return url;
        }
      }
      
      function reduceUrls(urls) {
        return urls.map(reduceUrl);
      }

    return (
        <View className="h-full w-full">
            {isInputAuthors && (
                <WidgetModal title={""} isUpdating={isInputAuthors} handleBack={() => setIsInputAuthors(!isInputAuthors)}  updateWidget={() => setIsInputAuthors(!isInputAuthors)}>
                    <Search placeholder={"Add an author"} onSubmitEditing={addAuthors}></Search>
                </WidgetModal>
                )}
            {isInputSources && (
                <WidgetModal title={""} isUpdating={isInputSources} handleBack={() => setIsInputSources(!isInputSources)}  updateWidget={() => setIsInputSources(!isInputSources)}>
                    <Search placeholder={"Add a sources"} onSubmitEditing={addSources}></Search>
                </WidgetModal>
            )}
            {isInputTags && (
                <WidgetModal title={""} isUpdating={isInputTags} handleBack={() => setIsInputTags(!isInputTags)}  updateWidget={() => setIsInputTags(!isInputTags)}>
                    <Search placeholder={"Add a tag"} onSubmitEditing={addTags}></Search>
                </WidgetModal>
            )}
            <ScrollView className="h-full w-full space-y-2 pt-2" scrollEnabled={false}>
                <View className="w-full">
                    <Text className="text-caption-text text-left" style={{color: props.color}} >{"Published on "+ date}</Text>        
                </View>
                <View className="w-full flex-row justify-between flex-row">
                    <View className="w-[49%] rounded-lg py-1" style={{backgroundColor: props.color}}>
                        <Text className="text-body-text text-center font-bold" style={{color: props.textColor}} >{likes+" likes"}</Text>
                    </View>
                    <View className="w-[49%] rounded-lg py-1" style={{backgroundColor: props.color}}>
                        <Text className="text-body-text text-center font-bold" style={{color: props.textColor}} >{dislikes+" dislikes"}</Text>
                    </View>              
                </View>
                <View className="w-full flex justify-top items-center pt-2">
                    <FormRow 
                        itemList={authors} 
                        title={"Author(s)"} 
                        openSearchModal={openAuthors}  
                        deleteValue={deleteAuthor} 
                        isModify={props.isModify}
                        color={props.color}
                        textColor={props.textColor}
                    />
                    <View className="w-full h-[1px] my-2 flex justify-center opacity-40" style={{backgroundColor: props.color}}></View>
                    <FormRow 
                        itemList={sourcesReduce} 
                        title={"Source(s)"} 
                        openSearchModal={openSources} 
                        deleteValue={deleteSource}                    
                        isModify={props.isModify}
                        color={props.color}
                        textColor={props.textColor}
                    />
                    <View className="w-full h-[1px] my-2 flex justify-center opacity-40" style={{backgroundColor: props.color}}></View>
                    <FormRow 
                        itemList={tags} 
                        title={"Tag(s)"} 
                        openSearchModal={openTags} 
                        deleteValue={deleteTag}                    
                        isModify={props.isModify}
                        color={props.color}
                        textColor={props.textColor}
                    />

                </View>
            </ScrollView>
        </View>
)};

const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 8,
    }});

export default CreditsWidget