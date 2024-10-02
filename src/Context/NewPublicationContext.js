import React, {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";


export const NewPublicationContext = createContext();


export const NewPublicationProvider = (props) => {
    const [dataFrame, setDataFrame] = useState([]);
    const {backendURL, authData} = useContext(AuthContext);

    //-------------------------------------------------------------- widgets ---------------------------------------------------------

    const UpdateTextWidget = (text, frameIndex, widgetPosition) => {
        let frames = dataFrame;
        let frame = frames.at(frameIndex);
        let widgetIndex = frame.textWidget.findIndex(obj => obj.position === widgetPosition);
        let textWidget = frame.textWidget.at(widgetIndex);
        textWidget.text = text;

        frame.textWidget.map(obj =>
            obj.position === widgetPosition ? textWidget : obj
        );
        frames.map(obj =>
            obj.index === frameIndex ? frame : obj
        );

        setDataFrame(frames);
    }   

    const UpdateImagesWidget = (images, frameIndex, widgetPosition) => {
        let frames = dataFrame;
        let frame = frames.at(frameIndex);
        let widgetIndex = frame.imagesWidget.findIndex(obj => obj.position === widgetPosition);
        let imagesWidget = frame.imagesWidget.at(widgetIndex);
        imagesWidget.images = images;

        frame.imagesWidget.map(obj =>
            obj.position === widgetPosition ? imagesWidget : obj
        );
        frames.map(obj =>
            obj.index === frameIndex ? frame : obj
        );

        setDataFrame(frames);
    }   

    //-------------------------------------------------------------- images ---------------------------------------------------------
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

    const publishImages = () => {
        let frames = dataFrame;
        frames.forEach(frame => {
            let imagesWidget = frame.imagesWidget;
            imagesWidget.forEach(widget => {
                let images = widget.images;
                let newImages = [];
                images.forEach(async image => {
                    let res = await uploadImage(image);
                    newImages.push(res.image);
                })
                widget.images = newImages;
            })
        });
        console.log("end of publishImages")
        return frames
    }

    //-------------------------------------------------------------- articles ---------------------------------------------------------

    const postArticle = async (article, token) => {
        console.log("postArticle:")
        let response = await axios.post(
            backendURL + 'api/articles/',
            article, 
            {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            }
        )
        .catch(error => console.error('POST Article Error logging in:', error.response.data));
    }

    const publish = (authors, sources, tags, title) =>{
        let frames = publishImages();
        let article = {
            id: 1,
            title: title,
            tags: tags,
            authors: authors,
            sources: sources,
            media: authData.name,
            frames: frames,
        }
        let token = authData.accessToken;
        postArticle(article, token);
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
        publish,
        update,
        uploadImage,
        setDataFrame,
        UpdateTextWidget,
        UpdateImagesWidget,
    }
    return (
        <NewPublicationContext.Provider value={value} >
            {props.children}
        </NewPublicationContext.Provider>
    )
}