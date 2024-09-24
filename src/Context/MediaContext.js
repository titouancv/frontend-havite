import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const MediaContext = createContext();


export const MediaProvider = (props) => {
    const [mediaData, setMediaData] = useState({});
    const [loading, setLoading] = useState(true);
    const {backendURL, authData} = useContext(AuthContext);

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

    const getImage = async (imageUrl) => {
        let token = authData.accessToken
        let response = await axios.get(
            backendURL + `api/images/${imageUrl}/`, 
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }
        )
        .catch(error => console.error('Media Data Error logging in:', error.response.data));
        return response.data;
    }

    const value = {
        mediaData,
        loadMediaData,
        getImage,
    }
    return (
        <MediaContext.Provider value={value} >
            {props.children}
        </MediaContext.Provider>
    )
}