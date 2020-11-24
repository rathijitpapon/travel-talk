import React, { useState, useRef, useEffect } from 'react';
import io from "socket.io-client";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';

import userService from "../../services/userService";
import authService from "../../services/authService";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

let socket;

const Inbox = (props) => {
    const {mainContainer, nameDivContainer, profileImageContainer,profileNameContainer, messageBoxContainer, inputContainer, sendButtonContainer, messageDivContainer, messageSubContainer, messageContainer} = style();

    const [message, setMessage] = useState({
        message: [],
    });
    const [messageText, setMessageText] = useState("");
    const [profile, setProfile] = useState(null);
    const [myProfile, setMyProfile] = useState(null);
    const inboxId = props.match.params.id;
    const messageScroll = useRef(null);

    const handleInputChange = (e) => {
        if(e.target.name === "message") {
            const value = e.target.value;

            value ? setMessageText(value) : setMessageText("");
        }
    };

    const onSendMessage = () => {
        socket.emit("sendText", {
            token: authService.getJWT() ? authService.getJWT() : "",
            username: props.match.params.id,
            messageText: messageText,
        }, (error) => {
            if(error) {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
        setMessageText("");
    };

    useEffect(() => {
        async function fetchProfile() {
            const data = await userService.getProfile(inboxId);        
            if(data.status < 400) {
                setProfile(data.user);
            }

            const mydata = await userService.getProfile("my");        
            if(mydata.status < 400) {
                setMyProfile(mydata.user);
            }

            if(data.status >= 400) {
                window.location = "/404";
            }
        }

        fetchProfile();
        
        const endPoint = process.env.REACT_APP_API_BASE_URL;
        socket = io(endPoint);

        socket.emit("joinInbox", {
            token: authService.getJWT() ? authService.getJWT() : "",
            username: props.match.params.id,
        }, (error) => {
            if(error) {
                toast.error("No Message Found", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    }, [inboxId, props.match.params.id]);

    useEffect(() => {
        socket.on("getInbox", (data) => {
            setMessage(data.inbox);
        });

        if (messageScroll && messageScroll.current && messageScroll.current.addEventListener && message.message.length > 0) {
            messageScroll.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    });

    return ( 
        <LayoutWrapper>
            {(profile && myProfile) ? (
                <div className={mainContainer}>

                    <div className={nameDivContainer}>
                        <NavLink exact to={"/profile/" + profile.username}>
                            <img src={profile.profileImage} alt="" className={profileImageContainer} />
                        </NavLink>
                        
                        <NavLink exact to={"/profile/" + profile.username} className={profileNameContainer}>{profile.fullname}</NavLink>
                    </div>

                    <div className={messageDivContainer}>
                        <div className={messageSubContainer} ref={messageScroll}>
                            {message.message.map(message => (
                                <div key={message._id} className={messageContainer} style={message.sender.username === profile.username ? {textAlign: "left"} : {textAlign: "right"}}>{message.messageText}</div>
                            ))}
                        </div>
                    </div>

                    <div className={messageBoxContainer}>
                        <textarea 
                            type="text" 
                            id="message"  
                            name="message"  
                            placeholder="Type your message"
                            value={messageText}
                            onChange={handleInputChange}
                            className={inputContainer} />
                        <div className={sendButtonContainer} onClick={onSendMessage}>Send</div>
                    </div>
                        
                </div>
            ) : null}
        </LayoutWrapper>
     );
}
 
export default Inbox;