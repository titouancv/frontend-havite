import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMedia, setIsMedia] = useState(false);

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

    const login = async (emailAddress, password) => {
        /**
        let response = await fetch('http://172.20.10.3:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailAddress, password }),
            })
            .catch(error => console.error('Error logging in:', error));
        let tokens = response.json();
        **/
        if (emailAddress == "test" && password == "test"){
            let _authData = {
                token: 123, 
                email:emailAddress, 
                password:password, 
                firstName: "Titouan", 
                lastName: "Carion-Vignaud",
                logo: "https://s3.eu-west-3.amazonaws.com/ideel.images/logos/le_monde.png",
                primaryColor: "#000000",
                secondaryColor: "#222222",
                complementaryColor: "#ffc700",
                textColor: "#ffffff",
            };
            setAuthData(_authData); 
            setIsMedia(true);
            try {
                await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
                console.log("hello")
              } catch (error) {
                console.log(error)
              }
            return false;
        }
        return true;
      };
    
      const signOut = async () => {
        await AsyncStorage.removeItem('@AuthData');
        setAuthData(null);
      };

    const value = {
        authData,
        loading,
        isMedia,
        login,
        signOut
    }
    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}