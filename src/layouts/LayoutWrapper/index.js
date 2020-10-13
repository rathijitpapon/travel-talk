import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../components/NavBar";

import style from "./styles";

const LayoutWrapper = (props) => {
    const {mainContainer, contentContainer, content} = style();

    return ( 
        <div className={mainContainer}>
            <NavBar />
            <div style={{minHeight: window.innerHeight}} className={contentContainer}>
                <div className={content}>
                    {props.children}
                </div>
            </div>
            
        </div>
     );
}

LayoutWrapper.propTypes = {
    children: PropTypes.node
}
 
export default LayoutWrapper;