import React from 'react';

import Post  from '../../components/Post';
import LayoutWrapper from "../../layouts/LayoutWrapper";

const Home = () => {
    return ( 
        <LayoutWrapper>
            <Post />
            <Post />
            <Post />
        </LayoutWrapper>
     );
}
 
export default Home;