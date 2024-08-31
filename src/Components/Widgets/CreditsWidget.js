import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Modal} from 'react-native';
import { BlurView } from 'expo-blur';
import ModifyWidgetOverlay from '../ModifyWidgetOverlay';
import UpdateModal from '../UpdateModal';
import { FormRow } from '../FormRow';

const CreditsWidget = (props) => {
    const { width, height } = Dimensions.get('window');
    const [isInputAuthors, setIsInputAuthors] = useState(false);
    const [isInputSources, setIsInputSources] = useState(false);
    const [isInputTags, setIsInputTags] = useState(false);
    const [authors, setAuthors] = useState(props.authors);
    const [sources, setSources] = useState(props.sources);
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

    const SearchModal = (props) => {
        const [value, setValue] = useState("");
        let inputRef = useRef();
        return (
            <View className="h-full w-full pt-4 p-2 rounded-t-xl bg-primary absolute bottom-0 z-10">
            <ScrollView automaticallyAdjustKeyboardInsets={true} scrollEnabled={false} className="h-full w-full">
                <View className="">
                    <View className=" w-full border-2 border-secondary rounded-lg p-2">
                        <TextInput 
                            ref={inputRef}
                            onLayout={() => inputRef.current.focus()}
                            placeholder={props.placeholder} 
                            value={value}
                            placeholderTextColor={"#ff7d72"} 
                            className="text-body-text color-secondary" 
                            onChangeText={(text) => setValue(text)}
                            returnKeyType={"done"}
                            onSubmitEditing={() => props.onSubmitEditing(value)}
                        />
                    </View>
                </View>
            </ScrollView>
            </View>
        )
    }

    return (
        <View className="h-full w-full">
            <ScrollView className="h-full w-full space-y-2 pt-2" scrollEnabled={false}>
                <View className="w-full">
                    <Text className="text-caption-text text-left" style={{color: props.color}} >{"Published on "+ date}</Text>        
                </View>
                <View className="w-full space-x-2 flex-row">
                    <View className="w-[48%] rounded-lg py-1" style={{backgroundColor: props.color}}>
                        <Text className="text-body-text text-center font-bold" style={{color: props.textColor}} >{likes+" likes"}</Text>
                    </View>
                    <View className="w-[48%] rounded-lg py-1" style={{backgroundColor: props.color}}>
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
                        itemList={sources} 
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