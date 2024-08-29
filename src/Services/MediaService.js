import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";

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
    .catch(error => console.error('POST Article Error logging in:', error.request.response));
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