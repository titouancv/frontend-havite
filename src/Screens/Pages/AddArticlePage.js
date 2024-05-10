import React, {useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {NewArticle, CreditForm } from '../../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";
const item = { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complimentaryColor: "#ffc700"};
let dataFrames = [];


export default function AddArticlePage() {
    const [articleStep, setArticleStep] = useState(1);
    const [dataFrame, setDataFrame] = useState(null);

    const changeArticleStep = (data) => {
        setDataFrame(data);
        setArticleStep(2);
    }

    const previousStep = () => {
        setArticleStep(1);
    }

    return (
        <View className="h-full">
            <View className="flex h-full flex-col w-full">
                <View className="w-full h-[5%] bg-light-1"></View>
                <View className="w-full h-[7%] bg-light-1 flex justify-center items-center">
                    <Text className="text-h3 font-bold text-primary">New Publication</Text>
                </View>
                <View className="w-full h-[75%] bg-light-1 flex">
                    <View className="h-full w-full flex justify-center">
                        {
                            articleStep === 1 && (
                            <NewArticle  
                                logoMedia={item.logoMedia}
                                primaryColor={item.primaryColor}
                                secondaryColor={item.secondaryColor} 
                                complimentaryColor={item.complimentaryColor}
                                textColor={item.textColor}
                                changeArticleStep={changeArticleStep}
                                dataFrame={dataFrame}
                            />
                        ) || (
                            <CreditForm dataFrames={dataFrames} previousStep={previousStep}/>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}