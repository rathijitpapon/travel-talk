import React from 'react';
import {NavLink} from "react-router-dom";

import LayoutWrapper from "../../layouts/LayoutWrapper";

import style from "./styles";
import AppIconBig from "../../assets/logo/appIconBig.png";

const Landing = () => {
    const { mainContainer, iconContainer, titleContainer, descriptionContainer, navlinkContainer } = style();

    return ( 
        <LayoutWrapper>
            <div className={mainContainer}>
                <img src={AppIconBig} alt="App Logo" className={iconContainer}/>
                <div className={titleContainer}>
                    Travel Talk
                </div>
                <div>
                    <p className={descriptionContainer}>
                        Travel talk is an open platform to talk about travel.
                    </p>
                    <p className={descriptionContainer}>
                        Share your travel experience with others. Ask any help for your next travel by sharing your travel plan.
                    </p>
                    <p className={descriptionContainer}>
                        Happy Travelling!
                    </p>
                </div>
                <NavLink to="/signup" className={navlinkContainer}>
                    <div className={navlinkContainer}>
                        Join The Community Now
                    </div>
                </NavLink>
            </div>
        </LayoutWrapper>
     );
}
 
export default Landing;