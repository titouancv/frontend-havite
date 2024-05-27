import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);

    let backendURL = "http://172.20.10.3:8000/"

    useEffect(() => {
        loadStorageData();
      }, []);
    
    async function loadStorageData() {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    const getUserData = async (accessToken) => {
        let response = await axios.get(
            backendURL + 'api/profile/', 
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`
                }
            }
        )
        .catch(error => console.error('Error logging in:', error));
        return response.data;
    }

    const getTokens = async (emailAddress, password) => {
        let response = await axios.post(
            backendURL + 'api/login/', 
            {
                "username": emailAddress,
                "password": password
            }
        )
        .catch(error => console.error('Error logging in:', error));
        return response.data;
    }

    async function setStorageData(accessToken) {
        try {
            let userData = await getUserData(accessToken);
            let _authData = {
                token: accessToken, 
                email: userData.email,
                firstName: userData.first_name, 
                lastName: userData.last_name,
                isMedia: userData.is_media,
                birthday: userData.birthday,
                sexe: userData.sexe,
                logo: "https://s3.eu-west-3.amazonaws.com/ideel.images/logos/le_monde.png",
                primaryColor: "#000000",
                secondaryColor: "#222222",
                complementaryColor: "#ffc700",
                textColor: "#ffffff",
            };
            setAuthData(_authData); 
            await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
        } catch (error) {
            console.log(error)
        }
    }
    //---------------------------------------------------------------------------------- Login

    const login = async (emailAddress, password) => {
        let tokens = await getTokens(emailAddress, password);
        if (tokens.access !== null && tokens.refresh !== null){
            await setStorageData(tokens.access);
            return false;
        }
        return true;
      };

    //---------------------------------------------------------------------------------- Sign Out

    const signOut = async () => {
        await AsyncStorage.removeItem('@AuthData');
        setAuthData(null);
    };
    
    //---------------------------------------------------------------------------------- Sign in

    const setLogInformation = (email, pwd1, pwd2) => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

        if (emailRegex.test(email) && pwd1 === pwd2 && passwordRegex.test(pwd1)){
            let _authData = 
            {
                "username": email,
                "email": email,
                "password1": pwd1,
                "password2": pwd2,
            }
            setAuthData(_authData);
            return true
        }
        return false;
    }; 

    const registerUser = async (userData) => {
        let response = await axios.post(
            backendURL + 'api/register/users/',
            userData
        )
        .catch(error => console.error('Error logging in:', error));
        return response.data;
    }

    const signInUser = async (firstName, lastName, birthday) => {
        let userData = 
        {
            "username": authData.username,
            "email": authData.email,
            "password1": authData.password1,
            "password2": authData.password1,
            "first_name": firstName,
            "last_name": lastName,
            "birthday": birthday,
            "followed_medias": [],
            "liked_articles": []
        }
        await registerUser(userData);
        let tokens = await getTokens(userData.email, userData.password1);
        if (tokens.access !== null && tokens.refresh !== null){
            await setStorageData(tokens.access);
        }
    };

    const value = {
        authData,
        loading,
        login,
        signOut,
        signInUser,
        setLogInformation
    }
    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}