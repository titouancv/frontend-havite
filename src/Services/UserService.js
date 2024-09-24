import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";

export const getUserProfilePicture = async (imageId, token, backendURL) => {
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

export const updtateUser = async (dataUser, token, backendURL) => {
    let response = await axios.put(
        backendURL + 'api/customer/update/',
        dataUser, 
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }
    )
    .catch(error => console.error('POST Article Error logging in:', error.request.response));
}

export const deleteUser = async (token, backendURL) => {
    let response = await axios.delete(
        backendURL + 'api/customer/update/',
        {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        }
    )
    .catch(error => console.error('POST Article Error logging in:', error.request.response));
}