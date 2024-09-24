import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import PageButton from './PageButton';

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

export default function UserHeader(props) {
    let firstName = props.firstname;
    let lastName = props.lastname;
    let profilePicture = props.profilePicture;
    let mediaNb = abbreviateNumber(props.mediaNb);
    let followers = abbreviateNumber(props.followers);
    let followed = abbreviateNumber(props.followed);
    const navigation = useNavigation();


    const { width, height } = Dimensions.get('window');
  return (
      <View className="w-full h-full space-y-2 pt-2">
        <View className="w-[95%] self-center flex-row space-x-2">
            <View className="border border-primary rounded-lg bg-red-500" style={{width: width*0.25, height:width*0.25}}>
              <Image source={{ uri: profilePicture }} className="h-full w-full rounded-lg" />
            </View>
            <View className="flex-col self-end">
                <Text className="text-primary text-h4">{firstName}</Text>
                <Text className="text-primary font-bold text-h3">{lastName}</Text>  
            </View>
        </View>
        <View className="flex-row justify-between w-[95%] self-center">
            <TouchableOpacity className="bg-primary rounded-lg p-1 w-[32%]">
                <Text className="text-light-1 font-bold text-center text-body-text">{mediaNb}</Text>
                <Text className="text-light-1 text-center text-caption-text">Media</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary rounded-lg p-1 w-[32%]">
                <Text className="text-light-1 font-bold text-center text-body-text">{followers}</Text>
                <Text className="text-light-1 text-center text-caption-text">Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary rounded-lg p-1 w-[32%]">
                <Text className="text-light-1 font-bold text-center text-body-text">{followed}</Text>
                <Text className="text-light-1 text-center text-caption-text">Followed</Text>
            </TouchableOpacity>
        </View>
        <View className="w-[95%] self-center">
            <TouchableOpacity className="bg-secondary rounded-lg p-2 w-full" onPress={()=> navigation.navigate("UserEditPage")}>
                <Text className="text-light-1 font-bold text-center text-body-text">Edit profile</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
} 