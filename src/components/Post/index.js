import React from 'react';
import Popup from 'reactjs-popup';
import {NavLink} from "react-router-dom";

import style from "./styles";

const Post = (props) => {
    const {mainContainer, titleContainer, profileContainer, profileInnerContainer, profileNameContainer, profileImageContainer, postImageContainer, postDescriptionContainer, reactContainer, reactItemContainer, reactCountContainer, reactIconContainer, popupContainer, popupItemContainer, popupProfileIconContainer, popupProfileNameContainer} = style();

    const postData = props.post;
    const profile = props.profile;
    
    let isLoved = false;
    let isliked = false;
    let isDisliked = false;

    const onLoveClicked = () => {
        props.updatePostReact({
            loveReact: !isLoved,
            likeReact: false,
            dislikeReact: false,
        }, props.postIndex);
    }

    const onlikeClicked = () => {
        props.updatePostReact({
            loveReact: false,
            likeReact: !isliked,
            dislikeReact: false,
        }, props.postIndex);
    }

    const onDislikeClicked = () => {
        props.updatePostReact({
            loveReact: false,
            likeReact: false,
            dislikeReact: !isDisliked,
        }, props.postIndex);
    }

    const onEditPost = () => {
        props.editPost(props.posIndex);
    }

    const onDeletePost = () => {
        props.deletePost(props.postIndex);
    }

    for (let i = 0; i < postData.loveReact.length; i++) {
        if(postData.loveReact[i].reactId.username === profile.username) {
            isLoved = true;
        }
    }

    for (let i = 0; i < postData.likeReact.length; i++) {
        if(postData.likeReact[i].reactId.username === profile.username) {
            isliked = true;
        }
    }

    for (let i = 0; i < postData.dislikeReact.length; i++) {
        if(postData.dislikeReact[i].reactId.username === profile.username) {
            isDisliked = true;
        }
    }

    return ( 
        <div className={mainContainer}>

            <div className={profileContainer}>
                <div className={profileInnerContainer}>
                    <NavLink exact to={"/profile/" + postData.ownerId.username}>
                        <img src={postData.ownerId.profileImage ? ("data:image/jpg;base64," + postData.ownerId.profileImage) : ""} alt="" className={profileImageContainer}/>
                    </NavLink>
                    <NavLink exact to={"/profile/" + postData.ownerId.username} className={profileNameContainer}>
                    {postData.ownerId.fullname}
                    </NavLink>
                </div>
                
                {profile.username === postData.ownerId.username ?
                    (<div className={profileInnerContainer} >
                        <i className="fas fa-edit fa-2x" style={{
                            marginRight: "10px",
                            cursor: "pointer",

                            "&:hover": {
                                opacity: "0.1",
                            }
                        }} onClick={onEditPost}></i>
                        <i className="fas fa-trash fa-2x" style={{
                            marginRight: "5px",
                            cursor: "pointer",

                            "&:hover": {
                                opacity: "0.1",
                            }
                        }} onClick={onDeletePost}></i>
                    </div>) : null
                }
                
            </div>

            <div className={titleContainer}>{postData.title}</div>
            <div className={postDescriptionContainer}>{postData.description}</div>
            <img src={postData.postImage ? ("data:image/jpg;base64," + postData.postImage) : ""} alt="" className={postImageContainer}/>

            <div className={reactContainer}>
                <div className={reactItemContainer} style={isLoved ? {backgroundColor: "#8b5e93"} : null}>
                    <div className={reactIconContainer} onClick={onLoveClicked}>
                        <i className="fas fa-heart"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.loveReact ? postData.loveReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                        {postData.loveReact ? postData.loveReact.map(react => (
                                <div key={react._id} className={popupItemContainer}>

                                    <NavLink exact to={"/profile/" + react.reactId.username}>
                                        <img src={react.reactId.profileImage ?( "data:image/jpg;base64," + react.reactId.profileImage) : ""} alt="" className={popupProfileIconContainer}/>
                                    </NavLink>

                                    <NavLink to={"/profile/" + react.reactId.username} className={popupProfileNameContainer}>
                                        {react.reactId.fullname}
                                    </NavLink>

                                </div>
                            )) : null}
                        </div>
                    </Popup>
                </div>

                <div className={reactItemContainer} style={isliked ? {backgroundColor: "#8b5e93"} : null}>
                    <div className={reactIconContainer} onClick={onlikeClicked}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.likeReact ? postData.likeReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                        {postData.likeReact ? postData.likeReact.map(react => (
                                <div key={react._id} className={popupItemContainer}>

                                    <NavLink exact to={"/profile/" + react.reactId.username}>
                                        <img src={react.reactId.profileImage ? ("data:image/jpg;base64," + react.reactId.profileImage) : ""} alt="" className={popupProfileIconContainer}/>
                                    </NavLink>

                                    <NavLink to={"/profile/" + react.reactId.username} className={popupProfileNameContainer}>
                                        {react.reactId.fullname}
                                    </NavLink>

                                </div>
                            )) : null}
                        </div>
                    </Popup>
                </div>

                <div className={reactItemContainer} style={isDisliked ? {backgroundColor: "#8b5e93"} : null}>
                    <div className={reactIconContainer} onClick={onDislikeClicked}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.dislikeReact ? postData.dislikeReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                            {postData.dislikeReact ? postData.dislikeReact.map(react => (
                                <div key={react._id} className={popupItemContainer}>

                                    <NavLink exact to={"/profile/" + react.reactId.username}>
                                        <img src={react.reactId.profileImage ? ("data:image/jpg;base64," + react.reactId.profileImage) : ""} alt="" className={popupProfileIconContainer}/>
                                    </NavLink>

                                    <NavLink to={"/profile/" + react.reactId.username} className={popupProfileNameContainer}>
                                        {react.reactId.fullname}
                                    </NavLink>

                                </div>
                            )) : null}
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
     );
}
 
export default Post;