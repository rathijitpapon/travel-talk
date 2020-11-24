import React, {useState, useEffect} from 'react';
import io from "socket.io-client";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';

import authService from "../../services/authService";
import userService from "../../services/userService";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

let socket;

const Messages = (props) => {
    const {mainContainer, nameDivContainer, personContainer, profileIconContainer, textContainer, profileNameContainer, messageContainer} = style();

    const [messages, setMessages] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            const data = await userService.getProfile("my");        
            if(data.status < 400) {
                setProfile(data.user);
            }
        }

        fetchProfile();

        const endPoint = process.env.REACT_APP_API_BASE_URL;
        socket = io(endPoint);

        socket.emit("joinMessages", {
            token: authService.getJWT() ? authService.getJWT() : "",
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

    }, [props.match.params.id]);

    useEffect(() => {
        socket.on("getMessages", (data) => {
            setMessages(data.messages);
        });
    });

    return ( 
        <LayoutWrapper>
            {(messages && profile) ? (
                <div className={mainContainer}>
                    
                    <div className={nameDivContainer}>
                        {messages.map(message => {
                            let user = message.user1;
                            const lastMessage = message.message[message.message.length - 1];
                            if(profile.username === message.user1.username){
                                user = message.user2
                            }
                            
                            return (
                                <NavLink exact to={"/inbox/" + user.username} className={personContainer} key={message._id}>
                                    <img src={user.profileImage} alt="" className={profileIconContainer} />

                                    <div className={textContainer}>
                                        <div className={profileNameContainer}>
                                            {user.fullname}
                                        </div>

                                        <div className={messageContainer}>
                                            {lastMessage.sender.username !== profile.username ? "" : "You: "}  {lastMessage.messageText}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
                        )}
                    </div>
                    
                </div>
            ) : null}
        </LayoutWrapper>
     );
}
 
export default Messages;