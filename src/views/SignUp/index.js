import React, {useState} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import Joi from "joi-browser";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';

import authService from "../../services/authService";
import userService from "../../services/userService";

import LayoutWrapper from "../../layouts/LayoutWrapper";
import style from "./styles";

const defaultProfileImage = require("../../assets/defaultProfileImage.json");

const SignUp = (props) => {
    const {mainContainer, titleContainer, navlinkContainer, fieldContainer, buttonDivContainer, buttonContainer, fieldTitleContainer, inputContainer, errorContainer} = style();

    const schema = {
        fullName: Joi.string().trim().required().max(30).label("fullName"),
        username: Joi.string().trim().required().min(5).max(10).label("username"),
        emailAddress: Joi.string().trim().required().email().label("emailAddress"),
        password: Joi.string().required().min(6).label("password"),
        confirmPassword: Joi.string().required().min(6).label("confirmPassword"),
    };

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [errorFullName, setErrorFullName] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorpasswordConfirm, setErrorPasswordConfirm] = useState("");

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
        const result = validateProperty(e.target.name, e.target.value);

        if(e.target.name === "fullName") {
            const value = e.target.value;

            result.error ? setErrorFullName(result.error.details[0].message) : setErrorFullName("");

            value ? setFullName(value) : setFullName("");
        }
        else if(e.target.name === "username") {
            const value = e.target.value;

            result.error ? setErrorUsername(result.error.details[0].message) : setErrorUsername("");

            value ? setUsername(value) : setUsername("");
        }
        else if(e.target.name === "emailAddress") {
            const value = e.target.value;

            result.error ? setErrorEmail(result.error.details[0].message) : setErrorEmail("");

            value ? setEmail(value) : setEmail("");
        }
        else if(e.target.name === "password") {
            const value = e.target.value;

            if(result.error) {
                setErrorPassword(result.error.details[0].message);
            }
            else if(value !== passwordConfirm) {
                setErrorPassword("password doesn't match with confirm password");
                setErrorPasswordConfirm("password doesn't match with confirm password");
            }
            else {
                setErrorPassword("");
                setErrorPasswordConfirm("");
            }
            
            value ? setPassword(value) : setPassword("");
        }
        else if(e.target.name === "confirmPassword") {
            const value = e.target.value;

            if(result.error) {
                setErrorPasswordConfirm(result.error.details[0].message);
            }
            else if(value !== password) {
                setErrorPassword("password doesn't match with confirm password");
                setErrorPasswordConfirm("password doesn't match with confirm password");
            }
            else {
                setErrorPassword("");
                setErrorPasswordConfirm("");
            }

            value ? setPasswordConfirm(value) : setPasswordConfirm("");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            fullName: fullName,
            username: username,
            emailAddress: email,
            password: password,
            confirmPassword: passwordConfirm,
        };

        const result = Joi.validate(obj, schema, {abortEarly: false});

        if(result.error || password !== passwordConfirm) {
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
            const data = await userService.signup(obj);
            if(data.status < 400) {
                const imageData = await userService.updateProfileImage(defaultProfileImage.profileImage)
                if(imageData.status < 400) {
                    props.history.push("/");
                }
            }
            else {
                toast.error(data.message, {
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

    if(authService.getCurrentUser()){
        return <Redirect to="/" />;
    }

    return ( 
        <LayoutWrapper>
            
            <div className={mainContainer}>

                <div className={titleContainer}>Sign Up</div>

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
                        <label htmlFor="username">Username</label>
                    </div>
                    <input
                        type="text"
                        id="username"
                        name="username" 
                        placeholder="Username"
                        value={username}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorUsername}</div>
                </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="emailAddress">Email</label>
                    </div>
                    <input 
                        type="email" 
                        id="emailAddress"  
                        name="emailAddress"  
                        placeholder="Email" 
                        value={email}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorEmail}</div>
                </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="password">Password</label>
                    </div>
                    <input 
                        type="password" 
                        id="password"  
                        name="password"  
                        placeholder="Password" 
                        value={password}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorPassword}</div>
                </div>

                <div className={fieldContainer}>
                    <div className={fieldTitleContainer}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <input 
                        type="password" 
                        id="confirmPassword"  
                        name="confirmPassword"  
                        placeholder="Confirm Password" 
                        value={passwordConfirm}
                        onChange={handleInputChange}
                        className={inputContainer} 
                    />
                    <div className={errorContainer}>{errorpasswordConfirm}</div>
                </div>

                <form onSubmit={onSubmit}>
                    <div className={buttonDivContainer}>
                        <button className={buttonContainer} onSubmit={onSubmit}>Sign Up</button>
                    </div>
                </form>

                <NavLink exact to="/signin" className={navlinkContainer
                }>
                    <div className={navlinkContainer}>
                    Already have an account? Sign In
                    </div>
                </NavLink>
                
            </div>
            
            
        </LayoutWrapper>
     );
}
 
export default withRouter(SignUp);