import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const [authData, setAuthData] = useState(null);
    const [loading, setLoading] = useState(true);

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
        if (emailAddress == "test" && password == "test"){
            let _authData = {token: "12345", email:emailAddress, password:password};
            setAuthData(_authData); 
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
        login,
        signOut
    }
    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}