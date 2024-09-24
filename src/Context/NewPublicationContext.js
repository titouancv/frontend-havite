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

    async function uploadImage(image) {
        try {
          // Create a new FormData object
          const formData = new FormData();
          let token = authData.accessToken;
          // Append the image file to the FormData object
          const uriParts = image.uri.split('/');
          const fileName = uriParts[uriParts.length - 1];
        
          // Infer the file type (MIME type) based on the file extension
          const fileType = fileName.split('.').pop(); // Extract the extension
          const mimeType = `image/${fileType}`; // Set the MIME type as image/jpeg or image/png
        
          // Append the image to the FormData object
          formData.append('image', {
            uri: image.uri, // Local file path
            name: fileName, // Dynamically inferred file name
            type: mimeType  // Dynamically inferred MIME type
          });
      
          // Send POST request using axios
          const response = await axios.post(backendURL + 'api/images/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            },
          });
      
          // Handle the response
          console.log('Image uploaded successfully:', response.data);
          return response.data;
        } catch (error) {
          console.error('Error uploading image:', error.response.data);
          throw error;
        }
    }

    const postArticle = async (article, token) => {
        let response = await axios.post(
            backendURL + 'api/articles/',
            article, 
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }
        )
        .catch(error => console.error('POST Article Error logging in:', error.request.response));
    }

    const publish = (authors, sources, tags, title) =>{
        let article = {
            id: 1,
            title: title,
            tags: tags,
            authors: authors,
            sources: sources,
            frames: dataFrame
        }
        console.log(dataFrame);
        console.log(article);
        let token = authData.accessToken;
        //postArticle(article, token);
    }

    const update = (authors, sources, tags, title, data) =>{
        let article = {
            id: 1,
            informations: {
                logo: "",
                title: title,
                date: "date",
                tags: tags,
                authors: authors,
                sources: sources,
                primaryColor: authData.primaryColor,
                secondaryColor: authData.secondaryColor,
                complimentaryColor: authData.complementaryColor,
                textColor: authData.textColor,
                likes: 0,
                dislikes: 0,
            },
            frames: data
        }
        let token = authData.accessToken;
        //postArticle(article, token);
    }

    const value = {
        dataFrame,
        articleStep,
        changeArticleStep,
        previousStep,
        publish,
        update,
        uploadImage,
    }
    return (
        <NewPublicationContext.Provider value={value} >
            {props.children}
        </NewPublicationContext.Provider>
    )
}