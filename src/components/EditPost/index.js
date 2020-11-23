import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Joi from "joi-browser";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';

import style from "./styles";

const Post = (props) => {
    const {mainContainer, addpostContainer, expandPostContainer, profileImageContainer, postInputContainer, titleInputContainer, descriptionInputContainer, fieldContainer, errorContainer, buttonDivContainer, buttonContainer, profileContainer, profileNameContainer, uploadImageContainer, ImageButtonContainer, postImageContainer, ImagelabelContainer} = style();

    const [expand, setExpand] = useState(props.isExpand);

    const schema = {
        title: Joi.string().trim().required().max(100).label("title"),
        description: Joi.string().trim().required().min(100).label("description"),
    };

    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [image, setImage] = useState(props.postImage);

    const [errorTitle, setErrorTitle] = useState("");
    const [errorDescription, setErrorDescription] = useState("");

    const profile = props.profile;

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

    const handleInputChange = async (e) => {
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
            props.savePost(props.postIndex, obj.title, obj.description, obj.image);
            setTitle("");
            setDescription("");
            setImage("");
            setExpand(false);
        }
    };

    const handleUploadImage = async (e) => {
        if(!e.target.files.length)
            return;

        const imageFile = e.target.files[0];
        if((imageFile.size / 1024 / 1024) >= 2.0) {
            toast.error("Image size can't be bigger than 2mb.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setImage("");
            return;
        }

        const options = {
            maxSizeMB: 0.1,
            maxWidthOrHeight: 500,
            useWebWorker: true
        }
        const compressedFile = await imageCompression(imageFile, options);

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result);
            }
        }
        reader.readAsDataURL(compressedFile);
    };

    const handleRemoveImage = () => {
        setImage("");
    };

    const onCancel = () => {
        setTitle("");
        setDescription("");
        setImage("");
        if(props.postIndex !== -1) {
            props.savePost(props.postIndex);
        }
        setExpand(false);
    };

    const onClickExpand = () => {
        setExpand(true);
    };

    return ( 
        <div className={mainContainer}>

            {!expand ? (
                <div className={expandPostContainer}>
                    <NavLink exact to={"/profile/" + profile.username}>
                        <img src={profile.profileImage ? ( profile.profileImage) : ""} alt="" className={profileImageContainer}/>
                    </NavLink>
                    <div className={addpostContainer} onClick={onClickExpand}>
                        Share your travel story
                    </div>
                </div>
                ) : null}

            {expand ? (
                <div className={postInputContainer}>
                    <div className={profileContainer}>
                        <NavLink exact to={"/profile/" + profile.username}>
                            <img src={profile.profileImage ? ( profile.profileImage) : ""} alt="" className={profileImageContainer}/>
                        </NavLink>
                        
                        <NavLink exact to={"/profile/" + profile.username} className={profileNameContainer}>
                        {profile.fullname}
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