import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { CoverFrame, CreditFrame, TextImageFrame, ImageTextFrame, TextFrame, ImageFrame, TextImageTextFrame } from './Frames';
import { useNavigation } from '@react-navigation/native';

let dataFrames = [
    { id: '0', 
	typeOfFrame:'coverFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
	text2: '',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: '',
	illustration3: '',
	illustration4: '',
    },
    { id: '1', 
	typeOfFrame:'textImageFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
	text2: '',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
	illustration3: '',
	illustration4: '',
    },
    { id: '2', 
	typeOfFrame:'imageTextFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
	text2: '',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
	illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
	illustration4: '',
    },
    { id: '3', 
	typeOfFrame:'textFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars. Dans un arrêté du 19 avril obtenu par l’AFP, que Le Monde a pu consulter, le préfet du Gard a mis en demeure l’entreprise de « suspendre sans délai » l’exploitation de l’un de ses sept captages de Vergèze, ce dernier ayant présenté « un épisode de contamination à partir du 10 mars 2024 et sur plusieurs jours par des germes témoins d’une contamination d’origine fécale (coliformes, Escherichia coli) mais aussi par des germes de l’espèce Pseudomonas aeruginosa ». L’arrêté souligne également que la contamination de l’eau embouteillée « peut faire courir un risque pour la santé des consommateurs ».',
	text2: '',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
	illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
	illustration4: 'https://www.humanite.fr/wp-content/uploads/2024/04/Perrier.webp',
    },
    { id: '4', 
	typeOfFrame:'imageFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
	text2: '',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: 'https://static.actu.fr/uploads/2024/04/perrier1-960x640.jpg',
	illustration3: 'https://media.ouest-france.fr/v1/pictures/MjAyNDA0YWZkNDVmZWZjMTQ2MzY1NGZhNWM0YWI5MGEzMDYyM2I?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=786c4842f7e056bbcea87d985c03fdbcc8692c2e43cacb89f0ef2d791a2cc528',
	illustration4: 'https://www.humanite.fr/wp-content/uploads/2024/04/Perrier.webp',
    },
    { id: '5', 
	typeOfFrame:'textImageTextFrame', 
	title: 'Nestlé contraint de détruire deux millions de bouteilles de Perrier après une contamination bactérienne',
	text1: 'La crise des eaux minérales françaises a franchi un nouveau cap. La société Nestlé Waters a annoncé, à Franceinfo et au Monde, mercredi 24 avril, avoir détruit « par précaution » deux millions de bouteilles de sa marque Perrier, en raison de la présence de bactéries d’origine fécale dans l’un des puits exploités par la firme suisse sur son site de Vergèze (Gard). Selon Nestlé, cette situation est la conséquence des fortes pluies de la tempête Monica, qui a touché le département courant mars.',
	text2: 'Dans un arrêté du 19 avril obtenu par l’AFP, que Le Monde a pu consulter, le préfet du Gard a mis en demeure l’entreprise de « suspendre sans délai » l’exploitation de l’un de ses sept captages de Vergèze, ce dernier ayant présenté « un épisode de contamination à partir du 10 mars 2024 et sur plusieurs jours par des germes témoins d’une contamination d’origine fécale (coliformes, Escherichia coli) mais aussi par des germes de l’espèce Pseudomonas aeruginosa ». L’arrêté souligne également que la contamination de l’eau embouteillée « peut faire courir un risque pour la santé des consommateurs ».',
	text3: '',
	text4: '',
	illustration1: 'https://img.lemde.fr/2024/04/24/0/0/4000/2667/700/0/75/0/455a408_1713974577626-gettyimages-801749140.jpg',
	illustration2: '',
	illustration3: '',
	illustration4: '',
    },
  ];


const Article = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();

    const makeFrames = (props) => {
        let frames = [];
        dataFrames.forEach((frame) => {
    
            let images = [];
            if (frame.illustration1 != '')
                images.push(frame.illustration1);
            if (frame.illustration2 != '')
                images.push(frame.illustration2);
            if (frame.illustration3 != '')
                images.push(frame.illustration3);
            if (frame.illustration4 != '')
                images.push(frame.illustration4);
    
            switch (frame.typeOfFrame) {
                case "coverFrame":
                    frames.push(<CoverFrame title={frame.title} text={frame.text1} images={images} textColor={props.textColor}></CoverFrame>);
                    break;
                case "textImageFrame":
                    frames.push(<TextImageFrame text={frame.text1} images={images} textColor={props.textColor}></TextImageFrame>);
                    break;
                case "imageTextFrame":
                    frames.push(<ImageTextFrame text={frame.text1} images={images} textColor={props.textColor}></ImageTextFrame>);
                    break;
                case "textFrame":
                    frames.push(<TextFrame text={frame.text1} textColor={props.textColor}></TextFrame>);
                    break;
                case "imageFrame":
                    frames.push(<ImageFrame images={images} />);
                    break;
                case "textImageTextFrame":
                    frames.push(<TextImageTextFrame text={frame.text1} images={images} textColor={props.textColor}></TextImageTextFrame>);
              }
        })
        frames.push(<CreditFrame authors={props.authors} date={props.date} sources={props.sources} tags={props.tags} textColor={props.textColor}/>);
        return frames;
    }

    const data = makeFrames(props);

    const onViewableItemsChanged = ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    };
  
    const renderItem = ({ item }) => {
      return (
        <View className="h-[95%] w-[366px] p-2 flex">
          {item}
        </View>
      );
    };

    let logo = props.logoMedia;

    return (
        <View className="flex-col rounded-2xl border-4 mx-2 my-2" style={{backgroundColor: props.secondaryColor, borderColor: props.primaryColor}}>
            <View className="flex items-center">
                <TouchableOpacity className="w-full h-10 flex justify-center items-center rounded-t-xl" onPress={() => navigation.navigate("MediaAccountPage") } style={{backgroundColor: props.primaryColor}}>
                    <Image source={{ uri: props.logoMedia }} className="w-1/2 h-[80%]" />
                </TouchableOpacity>
                <View className="pb-3 h-[550px]">
                    <View className=" py-1 justify-center flex mb-1" style={{ backgroundColor: props.complimentaryColor}}>
                        <Text className="self-center text-caption-text font-bold" style={{color: props.primaryColor}}>{props.articleType}</Text>
                    </View>
                    <View className="">
                        <FlatList
                        data={data}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                        />
                        <View className="w-full flex justify-center">
                            <View className="w-3/4 self-center">
                                <View className="flex-row justify-center absolute bottom-6 left-0 right-0">
                                    {data.map((_, index) => (
                                        index === activeIndex && (
                                            <View
                                                key={index}
                                                className={`w-[6%] h-1 rounded-sm mx-1`}
                                                style={{ backgroundColor: props.complimentaryColor}}
                                            /> 
                                        ) || (
                                            <View
                                                key={index}
                                                className={`w-[6%] h-1 rounded-sm mx-1 opacity-30`}
                                                style={{ backgroundColor: props.complimentaryColor}}
                                            />
                                        )
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-full h-10 border-t-4 flex-row justify-between rounded-b-xl px-2" style={{ backgroundColor: props.primaryColor, borderColor: props.primaryColor}}>
                <View  className="flex-row space-x-4 ml-2">
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.complimentaryColor,}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25297.png" }} className="rotate-180 w-6 h-6" />
                        <Text className="text-caption-text font-bold" style={{color: props.complimentaryColor}}>0</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="self-center w-1/2">
                    <View className="border-2 rounded-lg p-1 pr-2" style={{ borderColor: props.complimentaryColor}}>
                        <Text className="text-tiny-text text-center font-bold" style={{color: props.complimentaryColor}}>Question ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Article