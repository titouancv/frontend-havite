import React, {useContext, useState} from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PageButton from './PageButton';
import { Edit } from '../assets/iconSVG/Icons';
import { LinearGradient } from 'react-native-gradients';
import { AuthContext } from '../Context/AuthContext';

function abbreviateNumber(number) {
  // Si le nombre est inférieur à 1000, on le retourne tel quel
  if (number < 1000) {
    return number.toString();
  }

  // Définir les suffixes
  const suffixes = ["", "K", "M", "B", "T"];
  let divisor = 1000;
  let suffixIndex = 0;

  // Trouver le bon suffixe et diviseur
  while (number >= divisor) {
    suffixIndex++;
    divisor *= 1000;
  }

  // Calculer le nombre abrégé et ajouter le suffixe
  const abbreviatedNumber = number / (divisor / 1000);
  let res =  abbreviatedNumber.toFixed(1) + suffixes[suffixIndex];
  return res;
} 

export default function MediaHeader(props) {
    const {signOut, authData} = useContext(AuthContext)
    let articleNb = abbreviateNumber(props.articleNb);
    let followers = abbreviateNumber(props.followers);
    let followed = abbreviateNumber(props.followed);
    let bio = props.bio
    let primaryColor = props.primaryColor;
    let secondaryColor = props.secondaryColor;
    let complementaryColor = props.complementaryColor;
    let textColor = props.textColor;
    let isMediaAccount = authData.name === props.name;
    let [isFollowed, setIsFollowed] = useState(false);
    let logo = props.logo;

    const colorList = [
        {offset: '10%', color: '#f9f4ea', opacity: '1'},
        {offset: '100%', color: primaryColor, opacity: '1'},
      ]

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');
  return (
      <View className="w-full space-y-2 pt-2" style={{backgroundColor: primaryColor}}>
        <View className="w-[95%] self-center flex-row space-x-2">
            <View className="" style={{width: width*0.50, height:width*0.20}}>
                {logo && (<Image source={{ uri: logo }} style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} />)}
            </View>
        </View>
        <View className="flex-row justify-between w-[95%] self-center">
            <TouchableOpacity className=" rounded-lg p-1 w-[32%]" style={{backgroundColor: secondaryColor}}>
                <Text className=" font-bold text-center text-body-text" style={{color: textColor}}>{articleNb}</Text>
                <Text className=" text-center text-caption-text" style={{color: textColor}}>Article</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" rounded-lg p-1 w-[32%]" style={{backgroundColor: secondaryColor}}>
                <Text className=" font-bold text-center text-body-text" style={{color: textColor}}>{followers}</Text>
                <Text className=" text-center text-caption-text" style={{color: textColor}}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" rounded-lg p-1 w-[32%]" style={{backgroundColor: secondaryColor}}>
                <Text className=" font-bold text-center text-body-text" style={{color: textColor}}>{followed}</Text>
                <Text className=" text-center text-caption-text" style={{color: textColor}}>Followed</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-between w-[95%] self-center">
        { isMediaAccount ?
        (
            <>
                <TouchableOpacity className=" rounded-lg p-2 w-[49%]" style={{backgroundColor: secondaryColor}} onPress={() => navigation.navigate("SettingsPage") }>
                <Text className=" font-bold text-center text-body-text" style={{color: textColor}}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" rounded-lg p-2 w-[49%]" style={{backgroundColor: complementaryColor}} onPress={() => navigation.navigate("MediaEditPage") }>
                <Text className="text-white font-bold text-center text-body-text">Edit profile</Text>
            </TouchableOpacity>
            </>
            ):(
                <>
                {isFollowed ? (
                    <TouchableOpacity className=" rounded-lg p-2 w-full" style={{backgroundColor: secondaryColor}} onPress={() => setIsFollowed(!isFollowed) }>
                        <Text className=" font-bold text-center text-body-text" style={{color: textColor}}>Followed</Text>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity className=" rounded-lg p-2 w-full" style={{backgroundColor: complementaryColor}} onPress={() => setIsFollowed(!isFollowed) }>
                        <Text className="text-white font-bold text-center text-body-text">Follow</Text>
                    </TouchableOpacity>
                )}
                </>
            )}
        </View>
        <View className="flex-row justify-between w-[95%] self-center py-2">
            <Text className="text-caption-text text-white">{bio}</Text>
        </View>
        <View className="mt-2 relative">
            <View className="absolute h-full w-full z-8 mt-4">
                <LinearGradient colorList={colorList} angle={90}/>
            </View>
            <View className="z-10">
                <MediaInfo 
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    complementaryColor={complementaryColor}
                    textColor={textColor}
                    isMediaAccount={isMediaAccount}

                />
            </View>
        </View>
      </View>
  );
} 

const Card = (props) => {
    const { width, height } = Dimensions.get('window');

    let title = props.title;
    let value = props.value;
    let primaryColor = props.primaryColor;
    let secondaryColor = props.secondaryColor;
    let complementaryColor = props.complementaryColor;
    let textColor = props.textColor;
    let isMediaAccount = props.isMediaAccount

    return (
        <View className="flex-row ml-2">
            <TouchableOpacity className="relative rounded-lg flex-col p-2" style={{height: height*0.08, width: width*0.45, backgroundColor: secondaryColor}}>
                {isMediaAccount && (<View className="absolute z-10 top-0 right-1 rounded-lg" style={{backgroundColor: secondaryColor}}><Edit color={textColor}/></View>)}
                <Text className=" text-center text-body-text" style={{color: textColor}}>{title}</Text>
                <View className="h-3/4">
                    <Text className=" font-bold text-center text-h5" style={{color: textColor}} adjustsFontSizeToFit numberOfLines={2}>{value}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const MediaInfo = (props) => {
    const { width, height } = Dimensions.get('window');

    let primaryColor = props.primaryColor;
    let secondaryColor = props.secondaryColor;
    let complementaryColor = props.complementaryColor;
    let textColor = props.textColor;
    let isMediaAccount = props.isMediaAccount

    return (
        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card 
                title={"Since"} 
                value ={"1944"}                     
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                complementaryColor={complementaryColor}
                textColor={textColor}
                isMediaAccount={isMediaAccount}
            />
            <Card 
                title={"Website"} 
                value ={"leparisien.fr"}                     
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                complementaryColor={complementaryColor}
                textColor={textColor}
                isMediaAccount={isMediaAccount}
            />
            <Card 
                title={"Editorial Address"} 
                value ={"67, avenue Pierre-Mendès-France, Paris, France"}                     
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                complementaryColor={complementaryColor}
                textColor={textColor}
                isMediaAccount={isMediaAccount}
            />
            <Card 
                title={"Founder"} 
                value ={"Hubert Beuve-Méry"}                     
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                complementaryColor={complementaryColor}
                textColor={textColor}
                isMediaAccount={isMediaAccount}
            />
            <Card 
                title={"Owner"} 
                value ={"Groupe le Monde"}                     
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                complementaryColor={complementaryColor}
                textColor={textColor}
                isMediaAccount={isMediaAccount}
            />
        </ScrollView>
        </View>
    )
}