import React from 'react';
import {NavLink} from "react-router-dom";

import style from "./styles";

const Post = (props) => {
    const {mainContainer, titleContainer, profileContainer, profileNameContainer, profileImageContainer, postImageContainer, postDescriptionContainer, reactContainer, reactItemContainer, reactCountContainer, reactIconContainer} = style();

    const onClickLove = () => {
        console.log("Love Reacted!");
    };

    const onClickLike = () => {
        console.log("Like Reacted!");
    };

    const onClickDisLike = () => {
        console.log("DisLike Reacted!");
    };

    return ( 
        <div className={mainContainer}>
            <div className={profileContainer}>
                <NavLink exact to="/myprofile">
                    <img src="https://bityl.co/3vAx" alt="Profile" className={profileImageContainer}/>
                </NavLink>
                
                <NavLink exact to="/myprofile" className={profileNameContainer}>
                Rathijit Paul
                </NavLink>
            </div>
            <div className={titleContainer}>Himachal e Hattogol</div>
            <div className={postDescriptionContainer}>This was an impressive tour in my life. First time I went outside of my country for tour. It was about 2 weeks journey. I travelled with my 15 other friends. We explored Shimla, Manali, Kasol, Delhi, Agra & Kolkata.</div>
            <img src="https://bityl.co/3vD4" alt="Himachal" className={postImageContainer}/>
            <div className={reactContainer}>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickLove}>
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className={reactCountContainer}>10</div>
                </div>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickLike}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className={reactCountContainer}>5</div>
                </div>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickDisLike}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                    <div className={reactCountContainer}>3</div>
                </div>
            </div>
        </div>
     );
}
 
export default Post;