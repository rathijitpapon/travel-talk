import React from 'react';

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

const profileData = require("../../assets/profileData.json");

const Inbox = (props) => {
    const {mainContainer, nameDivContainer, personContainer, profileIconContainer, textContainer, profileNameContainer, messageContainer} = style();
    
    const inboxId = props.match.params.id;

    return ( 
        <LayoutWrapper>
            
                <div className={mainContainer}>
                    
                    <div className={nameDivContainer}>
                        {profileData.messages.map(message => (
                            <div className={personContainer} key={message._id}>
                                <img src={message.profileImage} alt="" className={profileIconContainer} />

                                <div className={textContainer}>
                                    <div className={profileNameContainer}>
                                        {message.fullName + " " + inboxId}
                                    </div>

                                    <div className={messageContainer}>
                                        {message.message[0].received ? "" : "You: "}  {message.message[0].text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
        </LayoutWrapper>
     );
}
 
export default Inbox;