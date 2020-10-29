import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import {NavLink} from "react-router-dom";

import Post  from '../../components/Post';
import  EditPost from '../../components/EditPost';

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

const profileData = require("../../assets/profileData.json");

const MyProfile = () => {
    const { mainContainer, profileContainer, profileImageContainer, profileDescriptionContainer, nameContainer, descriptionContainer, followContainer, followerContainer, followingContainer, buttonContainer, followButtonContainer, messageButtonContainer, editPostContainer, profileBottomContainer, bottomButtonContainer, photosContainer, photosItemContainer, popupContainer, popupItemContainer, popupProfileIconContainer, popupProfileNameContainer } = style();

    const [showOption, setShowOption] = useState("posts");

    const [postsOptionColor, setPostsOptionColor] = useState({
        backgroundColor: "#bc8989",
    });
    
    const [photosOptionColor, setPhotosOptionColor] = useState({
        backgroundColor: "lightgray",
    });

    const onClickPosts = () => {
        setShowOption("posts");
        setPostsOptionColor({backgroundColor: "#bc8989"});
        setPhotosOptionColor({backgroundColor: "lightgray"});
    };

    const onClickPhotos = () => {
        setShowOption("photos");
        setPostsOptionColor({backgroundColor: "lightgray"});
        setPhotosOptionColor({backgroundColor: "#bc8989"});
    };

    const onFollowClick = () => {
        console.log("Following");
    }

    const onMessageClick = () => {
        console.log("Messaging");
    }

    return ( 
        <LayoutWrapper>
            <div className={mainContainer}>
                <div className={profileContainer}>
                    <img src={profileData.profileImage} alt="Profile" className={profileImageContainer}/>
                    <div className={profileDescriptionContainer}>
                        <div className={nameContainer}>{profileData.fullName}</div>
                        <div className={descriptionContainer}>{profileData.description}</div>
                        <div className={followContainer}>
                            <Popup
                                trigger={<div className={followerContainer}>{profileData.followers.length + 100} followers</div>}
                                modal
                            >
                                <div className={popupContainer}>
                                    {profileData.followers.map(follower => (
                                        <div key={follower.ownerId} className={popupItemContainer}>

                                            <NavLink exact to="/myprofile">
                                                <img src={profileData.profileImage} alt="Profile" className={popupProfileIconContainer}/>
                                            </NavLink>

                                            <NavLink to="/myprofile" className={popupProfileNameContainer}>
                                                {follower.fullName}
                                            </NavLink>

                                        </div>
                                    ))}
                                </div>
                            </Popup>
                            <Popup
                                trigger={<div className={followingContainer}>{profileData.following.length + 100} following</div>}
                                modal
                                nested
                            >
                                <div className={popupContainer}>
                                    {profileData.following.map(following => (
                                        <div key={following.ownerId} className={popupItemContainer}>

                                            <NavLink exact to="/myprofile">
                                                <img src={profileData.profileImage} alt="Profile" className={popupProfileIconContainer}/>
                                            </NavLink>

                                            <NavLink to="/myprofile" className={popupProfileNameContainer}>
                                                {following.fullName}
                                            </NavLink>

                                        </div>
                                    ))}
                                </div>
                            </Popup>
                        </div>
                        <div className={buttonContainer}>
                            <NavLink style={{display: 'none'}} to="/editprofile">
                                <button className={messageButtonContainer} onClick={onMessageClick}>Edit Profile</button>
                            </NavLink>
                            <button className={messageButtonContainer} onClick={onMessageClick}>Message</button>
                            <button className={followButtonContainer} onClick={onFollowClick}>Follow</button>
                        </div>
                    </div>
                </div>

                <div className={editPostContainer}>
                    <EditPost
                        postId={""}
                    />
                </div>
            
                <div className={profileBottomContainer}>
                    <button style={postsOptionColor}  className={bottomButtonContainer} onClick={onClickPosts}>Posts</button>
                    <button style={photosOptionColor} className={bottomButtonContainer} onClick={onClickPhotos}>Photos</button>
                </div>

                {showOption === "posts"? (
                    <div>
                        {profileData.posts.map((post) => (
                            <Post
                                key={post._id}
                                postId={post._id}
                            />
                        ))}
                    </div>
                    
                ) : null}

                {showOption === "photos"? (
                    <div className={photosContainer}>
                        {profileData.posts.map((post) => (
                            <img key={post._id} src={post.photo} alt="" className={photosItemContainer}/>
                        ))}
                    </div>
                ) : null}
            </div>
        </LayoutWrapper>
     );
}
 
export default MyProfile;