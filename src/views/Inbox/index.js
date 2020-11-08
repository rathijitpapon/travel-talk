import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

const profileData = require("../../assets/profileData.json");

const Inbox = (props) => {
    const {mainContainer, nameDivContainer, profileImageContainer,profileNameContainer, messageBoxContainer, inputContainer, sendButtonContainer, messageDivContainer, messageSubContainer, messageContainer} = style();
    
    // const inboxId = props.match.params.id;
    const message = profileData.messages[0];
    const [messageText, setMessageText] = useState("");

    const handleInputChange = (e) => {
        if(e.target.name === "message") {
            const value = e.target.value;

            value ? setMessageText(value) : setMessageText("");
        }
    };

    const onSendMessage = () => {
        console.log(messageText);
        setMessageText("");
    };

    return ( 
        <LayoutWrapper>
            
            <div className={mainContainer}>

                <div className={nameDivContainer}>
                    <NavLink exact to="/myprofile">
                        <img src={message.profileImage} alt="" className={profileImageContainer} />
                    </NavLink>
                    
                    <NavLink exact to="/myprofile" className={profileNameContainer}>{message.fullName}</NavLink>
                </div>

                <div className={messageDivContainer}>
                    <div className={messageSubContainer}>
                        {message.message.map(message => (
                            <div key={message._id} className={messageContainer} style={message.received === "true" ? {textAlign: "left"} : {textAlign: "right"}}>{message.text}</div>
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
        </LayoutWrapper>
     );
}
 
export default Inbox;