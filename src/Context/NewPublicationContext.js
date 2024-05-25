import React, {createContext, useState, useContext, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const NewPublicationContext = createContext();


export const NewPublicationProvider = (props) => {
    const [articleStep, setArticleStep] = useState(1);
    const [dataFrame, setDataFrame] = useState(null);

    const changeArticleStep = (data) => {
        setDataFrame(data);
        setArticleStep(2);
    }

    const previousStep = () => {
        setArticleStep(1);
    }

    const value = {
        dataFrame,
        articleStep,
        changeArticleStep,
        previousStep,
    }
    return (
        <NewPublicationContext.Provider value={value} >
            {props.children}
        </NewPublicationContext.Provider>
    )
}