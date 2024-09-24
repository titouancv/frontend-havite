import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import ListOfButton from './ListOfButton';
import { AuthContext } from '../Context/AuthContext';
import { NewPublicationContext } from '../Context/NewPublicationContext';
import { FormRow } from './FormRow';
import Search from './Search';
import WidgetModal from './WidgetModal';
import { Arrow } from '../assets/iconSVG/Icons';
import { TextInputButton2 } from './TextInputButton';

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
        <View className=" w-[95%] mt-2">
            <View className="h-full w-full space-y-4">
                <View className="relative w-full" >
                    <Text className={`absolute top-2 right-1 z-10 text-caption-text ${maxCharacteresTitle >= textLength ? "text-gray-500" : "text-red-700"} font-bold text-right`}>{textLength+"/"+maxCharacteresTitle}</Text>
                    <TextInputButton2 
                        TextInputHeight={height*0.10}
                        title="Title"
                        placeholder={"Enter the title"} 
                        placeholderTextColor="#f9f4ea"
                        color="#305536" 
                        backgroundColor="#305536"
                        onChangeText={changeText}
                        returnKeyType="done"
                        multiline={true}
                        isOnLayout={false}
                    />
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