import React from 'react';

import Post  from '../../components/Post';
import LayoutWrapper from "../../layouts/LayoutWrapper";

const profileData = require("../../assets/profileData.json");

const Home = () => {
    return ( 
        <LayoutWrapper>
            {profileData.posts.map((post) => (
                <Post
                    key={post._id}
                    postId={post._id}
                 />
            ))}
        </LayoutWrapper>
     );
}
 
export default Home;