import React, {useContext, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {NewArticle, CreditForm } from '../../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from '../../Context/AuthContext';
import { NewPublicationContext } from '../../Context/NewPublicationContext';
import * as ImagePicker from 'expo-image-picker';
import { MediaContext } from '../../Context/MediaContext';
import Headers from '../../Components/Header';

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";
const item = { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complimentaryColor: "#ffc700"};
let dataFrames = [];


export default function CreditsPage() {
    const {authData} = useContext(AuthContext);
    const {dataFrame, articleStep, previousStep, changeArticleStep, uploadImage} = useContext(NewPublicationContext);

    return (
        <View className="h-full w-full flex-col">
            <View className={`h-[6%]`}/>
            <Headers color={"#305536"} title={"Credits"}/>
            <CreditForm dataFrames={dataFrames} previousStep={previousStep}/>
        </View>
    );
}