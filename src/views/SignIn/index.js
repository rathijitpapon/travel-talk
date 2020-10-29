import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Joi from "joi-browser";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';


import LayoutWrapper from "../../layouts/LayoutWrapper";
import style from "./styles";

const SignIn = (props) => {
    const {mainContainer, titleContainer, navlinkContainer, fieldContainer, buttonDivContainer, buttonContainer, fieldTitleContainer, inputContainer, errorContainer} = style();

    const schema = {
        username: Joi.string().trim().required().label("username"),
        password: Joi.string().required().label("password"),
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

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

        if(e.target.name === "username") {
            const value = e.target.value;

            result.error ? setErrorUsername(result.error.details[0].message) : setErrorUsername("");

            value ? setUsername(value) : setUsername("");
        }
        else if(e.target.name === "password") {
            const value = e.target.value;

            if(result.error) {
                setErrorPassword(result.error.details[0].message);
            }
            else {
                setErrorPassword("");
            }
            
            value ? setPassword(value) : setPassword("");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            username: username,
            password: password,
        };

        const result = Joi.validate(obj, schema, {abortEarly: false});

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
            props.history.push("/");
        }
    };

    return ( 
        <LayoutWrapper>
            
            <div className={mainContainer}>

                <div className={titleContainer}>Sign In</div>

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

                

                <form onSubmit={onSubmit}>
                    <div className={buttonDivContainer}>
                        <button className={buttonContainer} onSubmit={onSubmit}>Sign In</button>
                    </div>
                </form>

                <NavLink exact to="/signup" className={navlinkContainer
                }>
                    <div className={navlinkContainer}>
                    Don't have a account? Sign Up
                    </div>
                </NavLink>
                
            </div>
            
            
        </LayoutWrapper>
     );
}
 
export default withRouter(SignIn);