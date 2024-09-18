import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import ListOfButton from './ListOfButton';
import { AuthContext } from '../Context/AuthContext';
import { NewPublicationContext } from '../Context/NewPublicationContext';
import { FormRow } from './FormRow';
import Search from './Search';
import WidgetModal from './WidgetModal';

const CreditForm = (props) => {
    const [isInputAuthors, setIsInputAuthors] = useState(false);
    const [isInputSources, setIsInputSources] = useState(false);
    const [isInputTags, setIsInputTags] = useState(false);
    const [authors, setAuthors] = useState([]);
    const [sources, setSources] = useState([]);
    const [tags, setTags] = useState([]);
    const [text, setText]= useState("");
    const [textLength, setTextLength] = useState(0);
    let maxCharacteresTitle = 80;
    const {publish} = useContext(NewPublicationContext);
    const { width, height } = Dimensions.get('window');

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

    const changeText = (value) => {
        if (textLength <= maxCharacteresTitle || value.length < textLength){
            setText(value)
            setTextLength(value.length)
        }
    }

    return (
    <View className="h-full w-full flex items-center space-y-4 relative">
            {isInputAuthors && (
                <WidgetModal title={""} isUpdating={isInputAuthors} handleBack={() => setIsInputAuthors(!isInputAuthors)}  updateWidget={() => setIsInputAuthors(!isInputAuthors)}>
                    <Search placeholder={"Add an author"} onSubmitEditing={addAuthors}></Search>
                </WidgetModal>
                )}
            {isInputSources && (
                <WidgetModal title={""} isUpdating={isInputSources} handleBack={() => setIsInputAuthors(!isInputSources)}  updateWidget={() => setIsInputAuthors(!isInputSources)}>
                    <Search placeholder={"Add a sources"} onSubmitEditing={addSources}></Search>
                </WidgetModal>
            )}
            {isInputTags && (
                <WidgetModal title={""} isUpdating={isInputTags} handleBack={() => setIsInputAuthors(!isInputTags)}  updateWidget={() => setIsInputAuthors(!isInputTags)}>
                    <Search placeholder={"Add a tag"} onSubmitEditing={addTags}></Search>
                </WidgetModal>
            )}
        <View className="w-[95%] flex-row mt-4">
            <TouchableOpacity className="flex rounded-lg border-2 border-primary p-1" onPress={props.previousStep}>
                <Text className="text-body-text text-primary font-bold self-center">Back</Text>
            </TouchableOpacity>
        </View>
        <View className=" w-[95%]">
            <View className="h-full w-full space-y-4">
                <View className="relative w-full"  style={{height: height*0.15}}>
                    <Text className="absolute top-0 left-0 z-10 text-h5 text-left font-bold text-primary">Title</Text>
                    <Text className={`absolute top-2 right-1 z-10 text-caption-text ${maxCharacteresTitle >= textLength ? "text-gray-500" : "text-red-700"} font-bold text-right`}>{textLength+"/"+maxCharacteresTitle}</Text>
                    <View className="absolute bottom-0 left-0 z-6 h-[70%] w-full bg-primary opacity-80 rounded-lg flex justify-center items-center px-2 p-1"/>
                    <View className="absolute bottom-0 left-0 z-10 h-[70%] w-full p-2 flex">
                        <TextInput 
                            placeholder= {"Enter the title..."}
                            className="text-body-text font-bold text-light-1 h-full"
                            value={text}
                            onChangeText={changeText}
                            multiline={true}
                            textAlignVertical="top"
                            returnKeyType={"done"}
                            blurOnSubmit={true}
                        />
                        <View style={{ height: 30 }} />
                    </View>
                </View>
                <View className="w-full h-[1px] my-2 flex justify-center opacity-40 bg-primary"></View>
                <View className="w-full flex justify-top items-center">
                    <FormRow 
                        itemList={authors} 
                        title={"Author(s)"} 
                        openSearchModal={openAuthors}  
                        deleteValue={deleteAuthor} 
                        isModify={true}
                        color={'#305536'}
                        textColor={'#f9f4ea'}
                    />
                    <View className="w-full h-[1px] my-2 flex justify-center opacity-40 bg-primary"></View>
                    <FormRow 
                        itemList={sources} 
                        title={"Source(s)"} 
                        openSearchModal={openSources} 
                        deleteValue={deleteSource}                    
                        isModify={true}
                        color={'#305536'}
                        textColor={'#f9f4ea'}
                    />
                    <View className="w-full h-[1px] my-2 flex justify-center opacity-40 bg-primary"></View>
                    <FormRow 
                        itemList={tags} 
                        title={"Tag(s)"} 
                        openSearchModal={openTags} 
                        deleteValue={deleteTag}                    
                        isModify={true}
                        color={'#305536'}
                        textColor={'#f9f4ea'}
                    />
                </View>
                <View className="w-full py-2">
                    <TouchableOpacity className="w-full rounded-lg bg-secondary py-2" onPress={() => publish(authors, sources, tags, text)}>
                        <Text className="text-h5 text-light-1 font-bold self-center">Publish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
)};

export default CreditForm