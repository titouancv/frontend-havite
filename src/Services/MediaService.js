import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";

export const getMediaLogo = async (imageId, token, backendURL) => {
    let response = await axios.get(
        backendURL + `api/images/${imageId}/`, 
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }
    )
    .catch(error => console.error('Media Data Error logging in:', error.response.data));
    return response.data;
}

export const updtateMedia = async (dataUser, token, backendURL) => {
    console.log(dataUser);
    let response = await axios.put(
        backendURL + 'api/media/update/',
        dataUser, 
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }
    )
    .catch(error => console.error('POST updtate Article Error logging in:', error.response.data));
}

export const deleteMedia = async (token, backendURL) => {
    let response = await axios.delete(
        backendURL + 'api/media/update/',
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }
    )
    .catch(error => console.error('POST Article Error logging in:', error.request.response));
}