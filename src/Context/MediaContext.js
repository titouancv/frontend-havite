import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MediaContext = createContext();


export const MediaProvider = (props) => {
    const [mediaData, setMediaData] = useState({});
    const [loading, setLoading] = useState(true);

    const loadMediaData = (logo, primaryColor, secondaryColor,complementaryColor, textColor) => {
        setMediaData(
            {  
                logo: logo,
                primaryColor: primaryColor, 
                secondaryColor: secondaryColor, 
                complementaryColor: complementaryColor,
                textColor: textColor,
            }
        )
    }

    const value = {
        mediaData,
        loadMediaData,
    }
    return (
        <MediaContext.Provider value={value} >
            {props.children}
        </MediaContext.Provider>
    )
}