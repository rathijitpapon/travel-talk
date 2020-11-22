import React, {useState, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from 'react-toastify';

import  EditPost from '../../components/EditPost';
import Post  from '../../components/Post';
import LayoutWrapper from "../../layouts/LayoutWrapper";

import postService from "../../services/postService";
import userService from "../../services/userService";

const Home = () => {

    const [postData, setPostData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [profile, setProfile] = useState({});
    const limit = 10;

    const fetchData = (caller) =>{
        if(caller && skip > 0){
            return;
        }

        setTimeout( async () => {
            const query = {
                skip: skip,
                limit: limit,
                usertype: "all",
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
                return;
            }

            if(caller) {
                const fetchProfile = async () => {
                    const data = await userService.getProfile("my");        
                    if(data.status < 400) {
                        setProfile(data.user);
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
        // console.log("EDiting post");
    }

    return ( 
        <LayoutWrapper>
            <EditPost 
                postId={""}
            />
            <InfiniteScroll
                dataLength={postData.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<h2 style={{textAlign: "center"}}>Loading...</h2>}
            >
                {postData.map((post, index) => (
                    <Post
                        key={post._id}
                        postIndex={index}
                        post={post}
                        profile={profile}
                        updatePostReact={updatePostReact}
                        editPost={editPost}
                        deletePost={deletePost}
                    />
                ))}
            </InfiniteScroll>
        </LayoutWrapper>
     );
}
 
export default Home;