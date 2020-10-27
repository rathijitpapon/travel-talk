import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import style from "./styles";

const Post = (props) => {
    const {mainContainer, titleContainer, profileContainer, profileNameContainer, profileImageContainer, postImageContainer, postDescriptionContainer, reactContainer, reactItemContainer, reactCountContainer, reactIconContainer} = style();

    const [postData, setPostData] = useState({});

    


    useEffect(() => {

        async function fetchPostData() {
            console.log(props.postId);
            
            const fetchedPostData =  {
                profileImage: "https://bityl.co/3vAx",
                fullname: "Rathijit Paul",
                title: "Himachal e Hattogol",
                description: "This was an impressive tour in my life. First time I went outside of my country for tour. It was about 2 weeks journey. I travelled with my 15 other friends. We explored Shimla, Manali, Kasol, Delhi, Agra & Kolkata.",
                postImage: "https://bityl.co/3vD4",
                loveReact: 10,
                likeReact: 5,
                disLikeReact: 2,
            }
    
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            res.json()
                .then(res => setPostData(fetchedPostData))
                .catch(res => setPostData(fetchedPostData));
        };

        fetchPostData();
        
    }, [props.postId]);

    const onClickLove = () => {
        console.log("Love Reacted!");
        setPostData({
            profileImage: postData.profileImage,
            fullname: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: postData.loveReact + 1,
            likeReact: postData.likeReact,
            disLikeReact: postData.disLikeReact,
        });
    };

    const onClickLike = () => {
        console.log("Like Reacted!");
        setPostData({
            profileImage: postData.profileImage,
            fullname: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: postData.loveReact,
            likeReact: postData.likeReact + 1,
            disLikeReact: postData.disLikeReact,
        });
    };

    const onClickDisLike = () => {
        console.log("DisLike Reacted!");
        setPostData({
            profileImage: postData.profileImage,
            fullname: postData.fullName,
            title: postData.title,
            description: postData.description,
            postImage: postData.postImage,
            loveReact: postData.loveReact,
            likeReact: postData.likeReact,
            disLikeReact: postData.disLikeReact + 1,
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
                    <div className={reactCountContainer}>{postData.loveReact}</div>
                </div>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickLike}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className={reactCountContainer}>{postData.likeReact}</div>
                </div>
                <div className={reactItemContainer}>
                    <div className={reactIconContainer} onClick={onClickDisLike}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                    <div className={reactCountContainer}>{postData.disLikeReact}</div>
                </div>
            </div>
        </div>
     );
}
 
export default Post;