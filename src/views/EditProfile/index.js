import React, {useState, useEffect} from 'react';
import Joi from "joi-browser";
import imageCompression from 'browser-image-compression';
import { toast } from 'react-toastify';

import userService from "../../services/userService";

import LayoutWrapper from "../../layouts/LayoutWrapper";
import style from "./styles";

const defaultProfileImage = require("../../assets/defaultProfileImage.json");

const EditProfile = (props) => {
    const {mainContainer, titleContainer, imageChangeContainer, profileImageContainer, sideTextContainer, textContainer, imageButtonContainer, ImagelabelContainer, uploadImageContainer, fieldContainer, buttonDivContainer, buttonContainer, fieldTitleContainer, inputContainer, descriptionInputContainer, errorContainer} = style();

    const informationSchema = {
        fullName: Joi.string().trim().required().max(30).label("fullName"),
        description: Joi.string().trim().required().max(300).label("description"),
    };

    const passwordSchema = {
        newPassword: Joi.string().required().min(6).label("password"),
        newConfirmPassword: Joi.string().required().min(6).label("confirmPassword"),
    };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profileImage, setProfileImage] = useState(defaultProfileImage.profileImage);
    const [fullName, setFullName] = useState("");
    const [description, setDescription] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

    const [errorFullName, setErrorFullName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorNewPassword, setErrorNewPassword] = useState("");
    const [errorNewPasswordConfirm, setErrorNewPasswordConfirm] = useState("");

    useEffect(() => {
        async function fetchProfile() {
            const data = await userService.getProfile("my");
            if(data.status < 400) {
                const emailData = await userService.getEmail();
                if(emailData.status < 400) {
                    setProfileImage(data.user.profileImage);
                    setFullName(data.user.fullname);
                    setUsername(data.user.username);
                    setEmail(emailData.email);
                    if(data.user.description)
                        setDescription(data.user.description);
                }
            }
        }

        fetchProfile();
    }, [props.match.params.id])

    const validateProperty = (name, value, schema) => {
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
        if(e.target.name === "image") {
            const value = e.target.value;

            value ? setProfileImage(value) : setProfileImage(defaultProfileImage.profileImage);
        }
        else if(e.target.name === "fullName") {
            const result = validateProperty(e.target.name, e.target.value, informationSchema);
            const value = e.target.value;

            result.error ? setErrorFullName(result.error.details[0].message) : setErrorFullName("");

            value ? setFullName(value) : setFullName("");
        }
        else if(e.target.name === "description") {
            const result = validateProperty(e.target.name, e.target.value, informationSchema);
            const value = e.target.value;

            result.error ? setErrorDescription(result.error.details[0].message) : setErrorDescription("");

            value ? setDescription(value) : setDescription("");
        }
        else if(e.target.name === "newPassword") {
            const result = validateProperty(e.target.name, e.target.value, passwordSchema);
            const value = e.target.value;

            if(result.error) {
                setErrorNewPassword(result.error.details[0].message);
            }
            else if(value !== newPasswordConfirm) {
                setErrorNewPassword("password doesn't match with confirm password");
                setErrorNewPasswordConfirm("password doesn't match with confirm password");
            }
            else {
                setErrorNewPassword("");
                setErrorNewPasswordConfirm("");
            }
            
            value ? setNewPassword(value) : setNewPassword("");
        }
        else if(e.target.name === "newConfirmPassword") {
            const result = validateProperty(e.target.name, e.target.value, passwordSchema);
            const value = e.target.value;

            if(result.error) {
                setErrorNewPasswordConfirm(result.error.details[0].message);
            }
            else if(value !== newPassword) {
                setErrorNewPassword("password doesn't match with confirm password");
                setErrorNewPasswordConfirm("password doesn't match with confirm password");
            }
            else {
                setErrorNewPassword("");
                setErrorNewPasswordConfirm("");
            }

            value ? setNewPasswordConfirm(value) : setNewPasswordConfirm("");
        }
    };

    const onSubmitInformation = async (e) => {
        e.preventDefault();
        const obj = {
            fullName: fullName,
            description: description,
        };

        const result = Joi.validate(obj, informationSchema, {abortEarly: false});
        obj.profileImage = profileImage;

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
            const data = await userService.editProfile({
                fullName: obj.fullName,
                description: obj.description,
            });

            if(data.status < 400){
                const imageData = await userService.updateProfileImage(obj.profileImage);
                if(imageData.status < 400) {
                    data.user.profileImage = imageData.profileImage;
                }

                setFullName(data.user.fullname);
                setDescription(data.user.description);
                setProfileImage(data.user.profileImage);

                toast.success("Profile information saved successfully!", {
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
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    const onSubmitPassword = async (e) => {
        e.preventDefault();
        const obj = {
            newPassword: newPassword,
            newConfirmPassword: newPasswordConfirm,
        };

        const result = Joi.validate(obj, passwordSchema, {abortEarly: false});

        if(result.error || newPassword !== newPasswordConfirm) {
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
            const data = await userService.editPassword({
                password: obj.newPassword,
            });
            if(data.status < 400) {
                toast.success("Password saved successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setNewPassword("");
                setNewPasswordConfirm("");
            }
            else {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            
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
            setProfileImage("");
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
                setProfileImage(reader.result);
            }
        }
        reader.readAsDataURL(compressedFile);
    };

    const handleRemoveImage = () => {
        setProfileImage(defaultProfileImage.profileImage);
    };

    return ( 
        <LayoutWrapper>
            
            <div className={mainContainer}>

                <div className={titleContainer}>Change Profile Information</div>

                <div className={imageChangeContainer}>
                    <img src={profileImage ? profileImage : ""} alt="" className={profileImageContainer}/>

                    <div className={sideTextContainer}>
                        <div className={textContainer}>Username: {username}</div>
                        <div className={textContainer}>Email: {email}</div>

                        {profileImage === defaultProfileImage.profileImage ? (
                            <div className={imageButtonContainer}>
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

                        {profileImage !== defaultProfileImage.profileImage ? (
                            <div className={imageButtonContainer}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="image"
                                    name="image"
                                    onChange={handleUploadImage}
                                    hidden
                                />
                                <label htmlFor="image" className={uploadImageContainer}>
                                    <div className={ImagelabelContainer}>Change Image</div>
                                </label>
                                <label className={uploadImageContainer} onClick={handleRemoveImage}>
                                    <div className={ImagelabelContainer}>Remove Image</div>
                                </label>
                            </div>
                        ) : null}
                    </div>
                </div>

                

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="fullName">Full Name</label>
                    </div>
                    <input
                        type="text" 
                        id="fullName"  
                        name="fullName"  
                        placeholder="Full Name" 
                        value={fullName}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorFullName}</div>
                </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="description">Description</label>
                    </div>
                    <textarea
                        type="text" 
                        id="description"  
                        name="description"  
                        placeholder="Description" 
                        value={description}
                        onChange={handleInputChange}
                        className={descriptionInputContainer} 
                    />
                    <div className={errorContainer}>{errorDescription}</div>
                </div>

                <form onSubmit={onSubmitInformation}>
                    <div className={buttonDivContainer}>
                        <button className={buttonContainer} onSubmit={onSubmitInformation}>Save Information</button>
                    </div>
                </form>

                <div className={titleContainer}>Change Password </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="newPassword">New Password</label>
                    </div>
                    <input 
                        type="password" 
                        id="newPassword"  
                        name="newPassword"  
                        placeholder="New Password" 
                        value={newPassword}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorNewPassword}</div>
                </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="newConfirmPassword">Confirm New Password</label>
                    </div>
                    <input 
                        type="password" 
                        id="newConfirmPassword"  
                        name="newConfirmPassword"  
                        placeholder="Confirm New Password" 
                        value={newPasswordConfirm}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorNewPasswordConfirm}</div>
                </div>

                <form onSubmit={onSubmitPassword}>
                    <div className={buttonDivContainer}>
                        <button className={buttonContainer} onSubmit={onSubmitPassword}>Save Password</button>
                    </div>
                </form>
                
            </div>
            
            
        </LayoutWrapper>
     );
}
 
export default EditProfile;