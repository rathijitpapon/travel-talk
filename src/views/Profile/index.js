import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import {NavLink} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from 'react-toastify';


import Post  from '../../components/Post';
import  EditPost from '../../components/EditPost';

import postService from "../../services/postService";
import userService from "../../services/userService";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";

const Profile = (props) => {
    const { mainContainer, profileContainer, profileImageContainer, profileDescriptionContainer, nameContainer, descriptionContainer, followContainer, followerContainer, followingContainer, buttonContainer, followButtonContainer, messageButtonContainer, editPostContainer, profileBottomContainer, bottomButtonContainer, photosContainer, photosItemContainer, popupContainer, popupItemContainer, popupProfileIconContainer, popupProfileNameContainer } = style();

    const [postData, setPostData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [profile, setProfile] = useState(null);
    const [myProfile, setMyProfile] = useState(null);
    const [editPostIndex, setEditPostIndex] = useState(-1);
    const limit = 10;

    const [showOption, setShowOption] = useState("posts");
    const [openFollowing, setOpenFollowing] = useState(false);
    const [openFollowers, setOpenFollowers] = useState(false);

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

    const onFollowClick = async () => {
        const myData = await userService.updateFollowUser(profile.username);
        if(myData.status < 400) {
            const data = await userService.getProfile(props.match.params.id);
            if(data.status < 400) {
                setProfile(data.user);
                setMyProfile(myData.user);
            }
            else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        else {
            toast.error(myData.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const fetchData = (caller) =>{
        if(caller && skip > 0){
            return;
        }

        setTimeout( async () => {
            const query = {
                skip: skip,
                limit: limit,
                usertype: props.match.params.id,
            };
            let newPosts = await postService.getPost(query);
            if(newPosts.status < 400 && newPosts.posts.length > 0){
                newPosts = postData.concat(newPosts.posts);
                setSkip(skip + limit);
                setPostData(newPosts);
            }
            else if(newPosts.status < 400 && newPosts.posts.length === 0){
                setHasMore(false);
            }
            else {
                window.location = "/404";
                return;
            }

            if(caller) {
                const fetchProfile = async () => {
                    const data = await userService.getProfile(props.match.params.id);        
                    if(data.status < 400) {
                        setProfile(data.user);
                    }

                    const mydata = await userService.getProfile("my");        
                    if(mydata.status < 400) {
                        setMyProfile(mydata.user);
                    }
                }
                fetchProfile();
            }
        }, 100)
    }
    
    useEffect(() => {       
        fetchData("useEffect");
    });

    const updatePostReact = async (react, index) => {
        const post = postData[index];
        const data = await postService.updatePostReact(post._id, react);
        if(data.status >= 400) {
            toast.error(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const newPostData = [...postData];
            newPostData[index] = data.post;
            setPostData(newPostData);
        }
    }

    const deletePost = async (index) => {
        const post = postData[index];
        const data = await postService.deletePost(post._id);
        if(data.status >= 400) {
            toast.error(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const newPostData = [...postData];
            newPostData.splice(index, 1);
            setPostData(newPostData);
        }
    }

    const editPost = async (index) => {
        setEditPostIndex(index);
    }

    const savePost = async (index, title, description, postImage) => {
        setEditPostIndex(-1);
        if(title && description) {
            let data;
            if(index === -1) {
                data = await postService.uploadPost({
                    title, 
                    description,
                });
            }
            else {
                const post = postData[index];
                data = await postService.editPost(post._id, {
                    title, 
                    description,
                });
            }

            if(data.status < 400 && postImage) {
                const imageData = await postService.updatePostImage(data.post._id, postImage);
                if(imageData.status < 400) {
                    data.post.postImage = postImage;
                }
                else {
                    toast.error(imageData.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
            else if(data.status < 400 && !postImage) {
                const imageData = await postService.deletePostImage(data.post._id);
                if(imageData.status < 400 && data.post.postImage) {
                    delete data.post.postImage;
                }
            }
            else if(data.status >= 400) {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

            if(index === -1) {
                const newPostData = [...postData];
                newPostData.unshift(data.post);
                setPostData(newPostData);
            }
            else {
                const newPostData = [...postData];
                newPostData[index] = data.post;
                setPostData(newPostData);
            }
        }
    }

    const onClose = () => {
        setOpenFollowing(false);
        setOpenFollowers(false);
    }

    const onOpenFollowing = () => {
        setOpenFollowing(true);
        setOpenFollowers(false);
    }

    const onOpenFollowers = () => {
        setOpenFollowing(false);
        setOpenFollowers(true);
    }

    useEffect(() => {
        setOpenFollowing(false);
        setOpenFollowers(false);
        setProfile(null);
        setPostData([]);
        setHasMore(true);
        setSkip(0);
        window.scrollTo(0, 0);
    }, [props.match.params.id]);

    return ( 
        <LayoutWrapper>
        {(myProfile && profile) ? (
            <div className={mainContainer}>
                <div className={profileContainer}>
                    <img src={profile.profileImage ? profile.profileImage : ""} alt="" className={profileImageContainer}/>
                    <div className={profileDescriptionContainer}>
                        <div className={nameContainer}>{profile.fullname}</div>
                        <div className={descriptionContainer}>{profile.description}</div>
                        <div className={followContainer}>
                            <div className={followerContainer} onClick={onOpenFollowers}>{profile.followers.length} followers</div>
                            <Popup
                                open={openFollowers}
                                onClose={onClose}
                                modal
                                nested
                            >
                                <div className={popupContainer}>
                                    {profile.followers.map(follower => (
                                        <div key={follower._id} className={popupItemContainer}>

                                            <NavLink exact to={"/profile/" + follower.userId.username}>
                                                <img src={follower.userId.profileImage ? follower.userId.profileImage : ""} alt="" className={popupProfileIconContainer}/>
                                            </NavLink>

                                            <NavLink to={"/profile/" + follower.userId.username} className={popupProfileNameContainer}>
                                                {follower.userId.fullname}
                                            </NavLink>

                                        </div>
                                    ))}
                                </div>
                            </Popup>

                            <div className={followingContainer} onClick={onOpenFollowing}>{profile.following.length} following</div>
                            <Popup
                                open={openFollowing}
                                onClose={onClose}
                                modal
                                nested
                            >
                                <div className={popupContainer}>
                                    {profile.following.map(following => (
                                        <div key={following._id} className={popupItemContainer}>

                                            <NavLink exact to={"/profile/" + following.userId.username}>
                                                <img src={following.userId.profileImage ? following.userId.profileImage : ""} alt="" className={popupProfileIconContainer}/>
                                            </NavLink>

                                            <NavLink to={"/profile/" + following.userId.username} className={popupProfileNameContainer}>
                                                {following.userId.fullname}
                                            </NavLink>

                                        </div>
                                    ))}
                                </div>
                            </Popup>
                        </div>
                        <div className={buttonContainer}>
                            {myProfile.username === profile.username ? (
                                <NavLink to="/edit/profile">
                                    <button className={messageButtonContainer}>Edit Profile</button>
                                </NavLink>
                            ) : (
                                <React.Fragment>
                                    <NavLink to={"/inbox/" + profile.username}>
                                        <button className={messageButtonContainer}>Message</button>
                                    </NavLink>
                                    <button className={followButtonContainer} onClick={onFollowClick}>Follow</button>
                                </React.Fragment>
                            )}
                            
                        </div>
                    </div>
                </div>

                {myProfile.username === profile.username ? (
                    <div className={editPostContainer}>
                        <EditPost 
                            postIndex={-1}
                            title=""
                            description=""
                            postImage=""
                            profile={profile}
                            savePost={savePost}
                            isExpand={false}
                        />
                    </div>
                ) : null}
            
                <div className={profileBottomContainer}>
                    <button style={postsOptionColor}  className={bottomButtonContainer} onClick={onClickPosts}>Posts</button>
                    <button style={photosOptionColor} className={bottomButtonContainer} onClick={onClickPhotos}>Photos</button>
                </div>

                {showOption === "posts"? (
                    <InfiniteScroll
                        dataLength={postData.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<h2 style={{textAlign: "center"}}>Loading...</h2>}
                    >
                        {postData.map((post, index) => {
                            if(editPostIndex === index) {
                                return (
                                    <div key={post._id} style={{marginTop: "50px"}}>
                                        <EditPost 
                                            postIndex={index}
                                            title={post.title}
                                            description={post.description}
                                            postImage={post.postImage}
                                            profile={profile}
                                            savePost={savePost}
                                            isExpand={true}
                                        />
                                    </div>
                                );
                            }

                            return (
                                <Post
                                    key={post._id}
                                    postIndex={index}
                                    post={post}
                                    profile={profile}
                                    myProfile={myProfile}
                                    updatePostReact={updatePostReact}
                                    editPost={editPost}
                                    deletePost={deletePost}
                                />
                            );
                        })}
                    </InfiniteScroll>
                    
                ) : null}

                {showOption === "photos"? (
                    <InfiniteScroll
                        dataLength={postData.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<h2 style={{textAlign: "center"}}>Loading...</h2>}
                    >
                        <div className={photosContainer}>
                            {postData.map((post) => (
                                <img key={post._id} src={post.postImage ? post.postImage : ""} alt="" className={photosItemContainer}/>
                            ))}
                        </div>
                    </InfiniteScroll>
                    
                ) : null}
            </div>
        ) : null }
        </LayoutWrapper>
     );
}
 
export default Profile;