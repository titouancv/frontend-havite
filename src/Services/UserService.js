import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";

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