import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Joi from "joi-browser";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';

import style from "./styles";

const Post = (props) => {
    const {mainContainer, addpostContainer, expandPostContainer, profileImageContainer, postInputContainer, titleInputContainer, descriptionInputContainer, fieldContainer, errorContainer, buttonDivContainer, buttonContainer, profileContainer, profileNameContainer, uploadImageContainer, ImageButtonContainer, postImageContainer, ImagelabelContainer} = style();

    const [expand, setExpand] = useState(false);

    const schema = {
        title: Joi.string().trim().required().max(100).label("title"),
        description: Joi.string().trim().required().min(100).label("description"),
    };

    const [postData, setPostData] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [errorTitle, setErrorTitle] = useState("");
    const [errorDescription, setErrorDescription] = useState("");

    const validateProperty = (name, value) => {
        const obj = {
            [name]: String(value),
        };
        const fieldSchema = {
            [name]: schema[name],
        };

        const result = Joi.validate(obj, fieldSchema);
        return result;
    };

    const handleInputChange = (e) => {
        if(e.target.name === "title") {
            const result = validateProperty(e.target.name, e.target.value);
            const value = e.target.value;

            result.error ? setErrorTitle(result.error.details[0].message) : setErrorTitle("");

            value ? setTitle(value) : setTitle("");
        }
        else if(e.target.name === "description") {
            const result = validateProperty(e.target.name, e.target.value);
            const value = e.target.value;

            if(result.error) {
                setErrorDescription(result.error.details[0].message);
            }
            else {
                setErrorDescription("");
            }
            
            value ? setDescription(value) : setDescription("");
        }
        else if(e.target.name === "image") {
            const value = e.target.value;
            
            value ? setImage(value) : setImage("");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title: title,
            description: description,
        };

        const result = Joi.validate(obj, schema, {abortEarly: false});
        obj.image = image;

        if(result.error) {
            toast.error("Please fillup the form correctly", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            console.log(obj);
            setTitle("");
            setDescription("");
            setImage("");
            setExpand(false);
        }
    };

    const handleUploadImage = (e) => {
        if(!e.target.files.length)
            return;

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleRemoveImage = () => {
        setImage("");
    };

    const onCancel = () => {
        setTitle("");
        setDescription("");
        setImage("");
        setExpand(false);
    };

    const onClickExpand = () => {
        setExpand(true);
    };

    useEffect(() => {

        function fetchPostData() {
            
            const fetchedPostData =  {
                profileImage: "https://bityl.co/3vAx",
                fullName: "Rathijit Paul",
                title: "Himachal e Hattogol",
                description: "This was an impressive tour in my life. First time I went outside of my country for tour. It was about 2 weeks journey. I travelled with my 15 other friends. We explored Shimla, Manali, Kasol, Delhi, Agra & Kolkata.",
                postImage: "https://bityl.co/3vD4",
            };

            setPostData(fetchedPostData);
            if(props.postId){
                setTitle(fetchedPostData.title);
                setDescription(fetchedPostData.description);
                setImage(fetchedPostData.image);
                setExpand(true);
            }
        };

        fetchPostData();
        
    }, [props.postId]);

    return ( 
        <div className={mainContainer}>

            {!expand ? (
                <div className={expandPostContainer}>
                    <NavLink exact to="/myprofile">
                        <img src={postData.profileImage} alt="Profile" className={profileImageContainer}/>
                    </NavLink>
                    <div className={addpostContainer} onClick={onClickExpand}>
                        Share your travel story
                    </div>
                </div>
                ) : null}

            {expand ? (
                <div className={postInputContainer}>
                    <div className={profileContainer}>
                        <NavLink exact to="/myprofile">
                            <img src={postData.profileImage} alt="Profile" className={profileImageContainer}/>
                        </NavLink>
                        
                        <NavLink exact to="/myprofile" className={profileNameContainer}>
                        {postData.fullName}
                        </NavLink>
                    </div>
                    <div className={fieldContainer}>
                        <input 
                            type="text" 
                            id="title"  
                            name="title"  
                            placeholder="Travel title"
                            value={title}
                            onChange={handleInputChange} 
                            className={titleInputContainer}
                        />
                        <div className={errorContainer}>{errorTitle}</div>
                    </div>
                    <div className={fieldContainer}>
                        <textarea 
                            type="text" 
                            id="description"  
                            name="description"  
                            placeholder="Share your travel story"
                            value={description}
                            onChange={handleInputChange} 
                            className={descriptionInputContainer}
                        />
                        <div className={errorContainer}>{errorDescription}</div>
                    </div>

                    {image ? (
                        <img src={image} alt="" className={postImageContainer}/> 
                    ) : null}

                    {!image ? (
                        <div className={buttonDivContainer}>
                            <input
                                type="file"
                                accept="image/*"
                                id="image"
                                name="image"
                                onChange={handleUploadImage}
                                hidden
                            />
                            <label htmlFor="image" className={uploadImageContainer}>
                                <div className={ImagelabelContainer}>Add Image</div>
                            </label>
                        </div>
                    ) : null}

                    {image ? (
                        <div className={buttonDivContainer}>
                            <input
                                type="file"
                                accept="image/*"
                                id="image"
                                name="image"
                                onChange={handleUploadImage}
                                hidden
                            />
                            <label htmlFor="image" className={ImageButtonContainer}>
                                <div className={ImagelabelContainer}>Change Image</div>
                            </label>
                            <label className={ImageButtonContainer} onClick={handleRemoveImage}>
                                <div className={ImagelabelContainer}>Remove Image</div>
                            </label>
                        </div>
                    ) : null}

                    <div className={buttonDivContainer}>
                        <button className={buttonContainer} onClick={onSubmit}>Save</button>
                        <button className={buttonContainer} onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            ) : null}
        </div>
     );
}
 
export default withRouter(Post);