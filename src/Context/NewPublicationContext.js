import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";


export const NewPublicationContext = createContext();


export const NewPublicationProvider = (props) => {
    const [articleStep, setArticleStep] = useState(1);
    const [dataFrame, setDataFrame] = useState(null);
    const [dataArticle, setDataArticle] = useState(null);
    const {backendURL, authData} = useContext(AuthContext);

    const changeArticleStep = (data) => {
        setDataFrame(data);
        setArticleStep(2);
    }

    const previousStep = () => {
        setArticleStep(1);
    }

    const postArticle = async (dataArticle, token) => {
        let response = await axios.post(
            backendURL + 'api/articles/',
            dataArticle, 
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }
        )
        .catch(error => console.error('POST Article Error logging in:', error.request.response));
    }

    const publish = (authors, sources, tags) =>{
        let dataArticle = {
            "tags": tags,
            "authors": authors,
            "sources": "sources",
            "frames": dataFrame
        }
        let token = authData.accessToken;
        postArticle(dataArticle, token);
    }

    const value = {
        dataFrame,
        articleStep,
        changeArticleStep,
        previousStep,
        publish,
    }
    return (
        <NewPublicationContext.Provider value={value} >
            {props.children}
        </NewPublicationContext.Provider>
    )
}