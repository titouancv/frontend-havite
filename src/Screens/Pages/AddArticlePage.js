import React, {useContext, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {NewArticle, CreditForm } from '../../Components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from '../../Context/AuthContext';
import { NewPublicationContext } from '../../Context/NewPublicationContext';
import * as ImagePicker from 'expo-image-picker';
import { MediaContext } from '../../Context/MediaContext';

let logoMedia = "https://assets.website-files.com/5c1922e22200fb24773c7093/5e8c510ac6500478b24f7161_547c2379c91499027c75e3c3_logo-_0004_defonce.png";
const item = { id: '0', logoMedia: logoMedia,  articleType: "Article", date: "12/03/2024", authors: ["jean-michel Azerty", "elisabeth WXCVB"], sources: ["https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"], tags: ["#France", "#Ecologie", "#Santé"], textColor: "#ffffff", primaryColor: "#000000", secondaryColor: "#222222", complimentaryColor: "#ffc700"};
let dataFrames = [];


export default function AddArticlePage() {
    const {authData} = useContext(AuthContext);
    const {dataFrame, articleStep, previousStep, changeArticleStep, uploadImage} = useContext(NewPublicationContext);
    /** 
    const {getImage} = useContext(MediaContext);

    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/992/992651.png");
    let imageNumber = 0;
    const handleImage = async () => {
        console.log("caca")
        let img = await getImage(2);
        setImage(img.image)
    }


                    <TouchableOpacity className="h-[20%] w-full border-2 border-light-1 bg-blue-200 rounded-lg" onPress={handleImage}>
                    <Image source={{ uri: image }} className="h-full w-full rounded-lg" />
                </TouchableOpacity>
    */

    return (
        <View className="h-full">
            <View className="flex h-full flex-col w-full">
                <View className="w-full h-[7%] bg-light-1"></View>
                <View className="w-full h-[5%] bg-light-1 flex justify-center items-center">
                    <Text className="text-h3 font-bold text-primary">New Publication</Text>
                </View>
                <View className="w-full h-[75%] bg-light-1 flex">
                    <View className="h-full w-full flex justify-center">
                        {
                            articleStep === 1 && (
                            <NewArticle  
                                logoMedia={authData.logo}
                                primaryColor={authData.primaryColor}
                                secondaryColor={authData.secondaryColor} 
                                complimentaryColor={authData.complementaryColor}
                                textColor={authData.textColor}
                                changeArticleStep={changeArticleStep}
                            />
                        ) ||  (
                            <CreditForm dataFrames={dataFrames} previousStep={previousStep}/>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}