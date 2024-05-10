import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import ListOfButton from './ListOfButton';


const CreditForm = (props) => {
    const [authorValue, setAuthorValue] = useState("");
    const [sourceValue, setSourceValue] = useState("");
    const [tagValue, setTagValue] = useState("");
    const [authors, setAuthors] = useState([]);
    const [sources, setSources] = useState([]);
    const [tags, setTags] = useState([]);

    const addAuthors = () => {
        authors.push(authorValue);
        setAuthors(authors);
        setAuthorValue("");
    }

    const addSources = () => {
        sources.push(sourceValue);
        setSources(sources);
        setSourceValue("");
    }

    const addTags = () => {
        tags.push(tagValue);
        setTags(tags);
        setTagValue("");
    }

    return (
    <View className="h-full w-full flex items-center justify-between">
        <View className="w-[95%] flex-row">
            <TouchableOpacity className="flex rounded-lg border-2 border-secondary p-1" onPress={props.previousStep}>
                <Text className="text-body-text text-secondary font-bold self-center">Back</Text>
            </TouchableOpacity>
        </View>
        <View className="h-[85%] w-[95%] bg-primary rounded-lg flex justify-top space-y-4 p-2 py-4">
            <View className="w-full flex items-center space-y-2">
                <ListOfButton data={authors} title="Author(s):" textColor={'#f9f4ea'}/>
                <View className="w-full border-2 border-secondary rounded-lg p-2">
                    <TextInput 
                        placeholder= "Add an author" 
                        value={authorValue}
                        placeholderTextColor={"#ff7d72"} 
                        className="text-body-text color-secondary" 
                        onChangeText={(text) => setAuthorValue(text)}
                    />
                </View>
                <TouchableOpacity className="w-full rounded-lg bg-secondary py-1" onPress={addAuthors}>
                    <Text className="text-body-text text-light-1 font-bold self-center">Add</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex items-center space-y-2">
                <ListOfButton data={sources} title="Source(s):" textColor={'#f9f4ea'}/>
                <View className="w-full border-2 border-secondary rounded-lg p-2">
                    <TextInput 
                        placeholder= "Add a source" 
                        value={sourceValue}
                        placeholderTextColor={"#ff7d72"} 
                        className="text-body-text color-secondary" 
                        onChangeText={(text) => setSourceValue(text)}
                    />
                </View>
                <TouchableOpacity className="w-full rounded-lg bg-secondary py-1" onPress={addSources}>
                    <Text className="text-body-text text-light-1 font-bold self-center">Add</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex items-center space-y-2">
                <ListOfButton data={tags} title="Tag(s):" textColor={'#f9f4ea'}/>
                <View className="w-full border-2 border-secondary rounded-lg p-2">
                    <TextInput 
                        placeholder= "Add a tag" 
                        value={tagValue}
                        placeholderTextColor={"#ff7d72"} 
                        className="text-body-text color-secondary" 
                        onChangeText={(text) => setTagValue(text)}
                    />
                </View>
                <TouchableOpacity className="w-full rounded-lg bg-secondary py-1" onPress={addTags}>
                    <Text className="text-body-text text-light-1 font-bold self-center">Add</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity className="w-[95%] rounded-lg bg-secondary py-2" onPress={addAuthors}>
            <Text className="text-h5 text-light-1 font-bold self-center">Publish</Text>
        </TouchableOpacity>
    </View>
)};

export default CreditForm