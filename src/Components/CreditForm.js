import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import ListOfButton from './ListOfButton';
import { AuthContext } from '../Context/AuthContext';
import { NewPublicationContext } from '../Context/NewPublicationContext';


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

const FormRow = (props) => {
    return (
        <View className="w-full flex items-left">
        <View className="w-full space-x-2 flex-row justify-between">
            <Text className="text-h5 font-bold text-light-1">{props.title}</Text>
            <TouchableOpacity className="bg-secondary p-1 px-4 rounded-lg " onPress={props.openSearchModal}>
                <Text className="text-caption-text text-center font-bold text-light-1">Add</Text>
            </TouchableOpacity>
        </View>
        {props.itemList.length !== 0 && (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full space-x-1 flex-row">
            {props.itemList.map((item) => {
                return (
                    <View className="flex relative py-1 pr-2">
                        <TouchableOpacity className="absolute h-4 w-4 z-10 top-0 right-0 bg-red-500 rounded-md flex justify-center items-center" onPress={() => props.deleteValue(item)}><Text className="font-bold">X</Text></TouchableOpacity>
                        <View className="p-1 rounded-lg border-2 border-light-1">
                        <Text className="text-light-1">{item}</Text>
                        </View>
                    </View>
                )}
            )}
            </ScrollView>
        )}
    </View>
    )
}

const CreditForm = (props) => {
    const [isInputAuthors, setIsInputAuthors] = useState(false);
    const [isInputSources, setIsInputSources] = useState(false);
    const [isInputTags, setIsInputTags] = useState(false);
    const [authors, setAuthors] = useState([]);
    const [sources, setSources] = useState([]);
    const [tags, setTags] = useState([]);
    const {publish} = useContext(NewPublicationContext);

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

    return (
    <View className="h-full w-full flex items-center space-y-4 relative">
        {isInputAuthors && (<SearchModal placeholder={"Add an author"} onSubmitEditing={addAuthors}></SearchModal>)}
        {isInputSources && (<SearchModal placeholder={"Add a source"} onSubmitEditing={addSources}></SearchModal>)}
        {isInputTags && (<SearchModal placeholder={"Add a tag"} onSubmitEditing={addTags}></SearchModal>)}
        <View className="w-[95%] flex-row">
            <TouchableOpacity className="flex rounded-lg border-2 border-secondary p-1" onPress={props.previousStep}>
                <Text className="text-body-text text-secondary font-bold self-center">Back</Text>
            </TouchableOpacity>
        </View>
        <View className="h-[90%] w-[95%]">
            <ScrollView className="h-full w-full space-y-4" scrollEnabled={false}>
                <View className=" w-full bg-primary rounded-lg flex justify-top items-center p-2 py-4">
                    <FormRow itemList={authors} title={"Author(s)"} openSearchModal={openAuthors}  deleteValue={deleteAuthor}></FormRow>
                    <View className="w-full h-[1px] my-4 bg-light-1 flex justify-center"></View>
                    <FormRow itemList={sources} title={"Source(s)"} openSearchModal={openSources} deleteValue={deleteSource}></FormRow>
                    <View className="w-full h-[1px] my-4 bg-light-1 flex justify-center"></View>
                    <FormRow itemList={tags} title={"Tag(s)"} openSearchModal={openTags} deleteValue={deleteTag}></FormRow>

                </View>
                <TouchableOpacity className="w-full rounded-lg bg-secondary py-2" onPress={() => publish(authors, sources, tags)}>
                    <Text className="text-h5 text-light-1 font-bold self-center">Publish</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)};

export default CreditForm