import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import {NavLink} from "react-router-dom";

import style from "./styles";

const Post = (props) => {
    const {mainContainer, titleContainer, profileContainer, profileNameContainer, profileImageContainer, postImageContainer, postDescriptionContainer, reactContainer, reactItemContainer, reactCountContainer, reactIconContainer, popupContainer, popupItemContainer} = style();

    const [postData, setPostData] = useState({});

    


    useEffect(() => {

        function fetchPostData() {
            console.log(props.postId);
            
            const fetchedPostData =  {
                profileImage: "https://bityl.co/3vAx",
                fullName: "Rathijit Paul",
                title: "Himachal e Hattogol",
                description: "This was an impressive tour in my life. First time I went outside of my country for tour. It was about 2 weeks journey. I travelled with my 15 other friends. We explored Shimla, Manali, Kasol, Delhi, Agra & Kolkata.",
                postImage: "https://bityl.co/3vD4",
                loveReact: [
                    {"_id": "012334567890", "fullName": "Rathijit Paul"},
                    {"_id": "012334567891", "fullName": "Rathijit Paul"},
                    {"_id": "012334567892", "fullName": "Rathijit Paul"},
                    {"_id": "012334567893", "fullName": "Rathijit Paul"},
                    {"_id": "012334567894", "fullName": "Rathijit Paul"},
                    {"_id": "012334567895", "fullName": "Rathijit Paul"},
                    {"_id": "012334567896", "fullName": "Rathijit Paul"},
                    {"_id": "012334567897", "fullName": "Rathijit Paul"},
                    {"_id": "012334567898", "fullName": "Rathijit Paul"},
                ],
                likeReact: [
                    {"_id": "012334567890", "fullName": "Rathijit Paul"},
                    {"_id": "012334567891", "fullName": "Rathijit Paul"},
                    {"_id": "012334567892", "fullName": "Rathijit Paul"},
                    {"_id": "012334567893", "fullName": "Rathijit Paul"},
                    {"_id": "012334567894", "fullName": "Rathijit Paul"},
                    {"_id": "012334567895", "fullName": "Rathijit Paul"},
                ],
                disLikeReact: [
                    {"_id": "012334567890", "fullName": "Rathijit Paul"},
                    {"_id": "012334567891", "fullName": "Rathijit Paul"},
                    {"_id": "012334567892", "fullName": "Rathijit Paul"},
                ],
            }
    
            // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            // res.json()
            //     .then(res => setPostData(fetchedPostData))
            //     .catch(res => setPostData(fetchedPostData));

            setPostData(fetchedPostData)
        };

        fetchPostData();
        
    }, [props.postId]);

    const onClickLove = () => {
        console.log("Love Reacted!");
        
        const newReactList = postData.loveReact;
        const newId = parseInt(postData.loveReact[postData.loveReact.length - 1]._id) + 1;
        newReactList.push({"_id": newId.toString(), "fullName": "Rathijit Paul"});

        setPostData({
            profileImage: postData.profileImage,
            fullName: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: newReactList,
            likeReact: postData.likeReact,
            disLikeReact: postData.disLikeReact,
        });
    };

    const onClickLike = () => {
        console.log("Like Reacted!");
        const newReactList = postData.likeReact;
        const newId = parseInt(postData.likeReact[postData.likeReact.length - 1]._id) + 1;
        newReactList.push({"_id": newId.toString(), "fullName": "Rathijit Paul"});

        setPostData({
            profileImage: postData.profileImage,
            fullName: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: postData.loveReact,
            likeReact: newReactList,
            disLikeReact: postData.disLikeReact,
        });
    };

    const onClickDisLike = () => {
        console.log("DisLike Reacted!");
        const newReactList = postData.disLikeReact;
        const newId = parseInt(postData.disLikeReact[postData.disLikeReact.length - 1]._id) + 1;
        newReactList.push({"_id": newId.toString(), "fullName": "Rathijit Paul"});

        setPostData({
            profileImage: postData.profileImage,
            fullName: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: postData.loveReact,
            likeReact: postData.likeReact,
            disLikeReact: newReactList,
        });
    };

    return ( 
        <div className={mainContainer}>

            <div className={profileContainer}>
                <NavLink exact to="/myprofile">
                    <img src={postData.profileImage} alt="Profile" className={profileImageContainer}/>
                </NavLink>
                
                <NavLink exact to="/myprofile" className={profileNameContainer}>
                {postData.fullName}
                </NavLink>
            </div>

            <div className={titleContainer}>{postData.title}</div>
            <div className={postDescriptionContainer}>{postData.description}</div>
            <img src={postData.postImage} alt="" className={postImageContainer}/>

            <div className={reactContainer}>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickLove}>
                        <i className="fas fa-heart"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.loveReact ? postData.loveReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                            {postData.loveReact ? postData.loveReact.map(react => (
                                <NavLink to="/myprofile" className={popupItemContainer} key={react._id}>{react.fullName}</NavLink>
                            )) : null}
                        </div>
                    </Popup>
                </div>

                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickLike}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.likeReact ? postData.likeReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                            {postData.likeReact ? postData.likeReact.map(react => (
                                <NavLink to="/myprofile" className={popupItemContainer} key={react._id}>{react.fullName}</NavLink>
                            )) : null}
                        </div>
                    </Popup>
                </div>

                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickDisLike}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                    <Popup
                        trigger={<div className={reactCountContainer}>{postData.disLikeReact ? postData.disLikeReact.length : 0}</div>}
                        modal
                    >
                        <div className={popupContainer}>
                            {postData.disLikeReact ? postData.disLikeReact.map(react => (
                                <NavLink to="/myprofile" className={popupItemContainer} key={react._id}>{react.fullName}</NavLink>
                            )) : null}
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
     );
}
 
export default Post;