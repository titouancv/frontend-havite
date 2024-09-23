import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);

    let backendURL = "https://backend-havite.onrender.com/"

    useEffect(() => {
        loadStorageData();
      }, []);
    
    async function loadStorageData() {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData = JSON.parse(authDataSerialized);
                const refreshToken = _authData.refreshToken;
                let newToken = await getNewToken(refreshToken);
                if (newToken){
                    _authData.refreshToken = newToken.refresh;
                    _authData.accessToken = newToken.access;
                    setAuthData(_authData);
                }
                else {
                    await AsyncStorage.removeItem('@AuthData');
                    setAuthData(null);
                }
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    const getNewToken = async (refreshToken) => {
        let response = await axios.post(
            backendURL + 'api/login/refresh/', 
            {
                "refresh": refreshToken,
            }
        )
        .catch(error => {
            console.error('Token Updated Error logging in:', error)
            return null;
        });
        if (response)
            return response.data;
        return null;
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
        .catch(error => console.error('User Data Error logging in:', error));
        return response.data;
    }

    const getMediaData = async (accessToken) => {
        let response = await axios.get(
            backendURL + 'api/media/', 
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`
                }
            }
        )
        .catch(error => console.error('Media Data Error logging in:', error));
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
        .catch(error => console.error('Token Error logging in:', error));
        return response.data;
    }

    async function setStorageData(accessToken, refreshToken, isMedia) {
        try {
            let _authData = {};
            if (isMedia){
                let userData = await getMediaData(accessToken);
                _authData = {
                    refreshToken: refreshToken, 
                    accessToken: accessToken,
                    username:  userData.username, 
                    email: userData.email,
                    name: userData.media.name,
                    isMedia: isMedia,
                    logo: userData.media.logo,
                    bio: userData.media.bio,
                    primaryColor: userData.media.primary_color,
                    secondaryColor: userData.media.secondary_color,
                    complementaryColor: userData.media.complementary_color,
                    textColor: userData.media.text_color,
                };     
            }
            else {
                let userData = await getUserData(accessToken);
                _authData = {
                    refreshToken: refreshToken, 
                    accessToken: accessToken, 
                    username:  userData.username,
                    email: userData.email,
                    firstName: userData.customer.first_name, 
                    lastName: userData.customer.last_name,
                    isMedia: isMedia,
                    birthday: userData.customer.birthday,
                    gender: userData.customer.gender,
                    profilePicture: userData.customer.profile_picture,
                };
            }
            setAuthData(_authData); 
            await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
        } catch (error) {
            console.error(error)
        }
    }
    //---------------------------------------------------------------------------------- Login

    const login = async (emailAddress, password) => {
        setLoading(true);
        let tokens = await getTokens(emailAddress, password);
        if (tokens.access !== null && tokens.refresh !== null){
            await setStorageData(tokens.access, tokens.refresh, tokens.is_media);
            setLoading(false)
            return false;
        }
        setLoading(false)
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

    const setLogIdentity = (firstName, lastName) => {
        
            let _authData = 
            {
                "username": authData.email,
                "email": authData.email,
                "password1": authData.password1,
                "password2": authData.password2,
                firstName,
                lastName,
            }
            setAuthData(_authData);
            return true
    }; 

    const registerUser = async (userData) => {
        let response = await axios.post(
            backendURL + 'api/register/users/',
            {
                "username": userData.username,
                "email": userData.email,
                "password1": userData.password1,
                "password2": userData.password2,
                "first_name": userData.first_name,
                "last_name": userData.last_name,
                "birthday": userData.birthday,
                "gender": userData.gender,
                "followed_medias": [],
                "liked_articles": []
            }
        )
        .catch(error => console.error('Register User Error logging in:', error.response.data));
        return response.data;
    }

    const signInUser = async (birthday, gender) => {
        let userData = 
        {
            "username": authData.username,
            "email": authData.email,
            "password1": authData.password1,
            "password2": authData.password1,
            "first_name": authData.firstName,
            "last_name": authData.lastName,
            "birthday": birthday.toISOString().split('T')[0],
            gender,
        }
        setLoading(true);
        await registerUser(userData);
        let tokens = await getTokens(userData.email, userData.password1);
        if (tokens.access !== null && tokens.refresh !== null){
            await setStorageData(tokens.access, tokens.refresh, tokens.is_media);
        }
        setLoading(false);
        console.log(userData);
    };

    const value = {
        authData,
        loading,
        backendURL,
        login,
        signOut,
        signInUser,
        setLogInformation,
        setStorageData,
        setLogIdentity,
    }
    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}