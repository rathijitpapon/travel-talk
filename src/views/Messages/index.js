import React from 'react';
import {NavLink} from "react-router-dom";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

const profileData = require("../../assets/profileData.json");

const Messages = () => {
    const {mainContainer, nameDivContainer, personContainer, profileIconContainer, textContainer, profileNameContainer, messageContainer} = style();

    return ( 
        <LayoutWrapper>
            
                <div className={mainContainer}>
                    
                    <div className={nameDivContainer}>
                        {profileData.messages.map(message => (
                            <NavLink exact to={"/inbox/" + message._id} className={personContainer} key={message._id}>
                                <img src={message.profileImage} alt="" className={profileIconContainer} />

                                <div className={textContainer}>
                                    <div className={profileNameContainer}>
                                        {message.fullName}
                                    </div>

                                    <div className={messageContainer}>
                                        {message.message[0].received ? "" : "You: "}  {message.message[0].text}
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    
                </div>
        </LayoutWrapper>
     );
}
 
export default Messages;