import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import NavBar from "../../components/NavBar";

import authService from "../../services/authService";
import userService from "../../services/userService";

import style from "./styles";

const LayoutWrapper = (props) => {
    const {mainContainer, contentContainer, content} = style();

    const [profile, setProfile] = useState(null);

    const onSignoutClick = async () => {
        const data = await userService.signout();
        if(data.status < 400) {
            setProfile({
                username: "",
            });
            window.location = '/';
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

    useEffect(() => {
        async function checkAuth() {
            if(!authService.getCurrentUser()) {
                setProfile({
                    username: "",
                });
            } else {
                const data = await userService.getProfile("my");
                setProfile(data.user);
            }
        }
        
        checkAuth();
    }, [props.children]);

    return ( 
        <div className={mainContainer}>
            {profile ? (
                <React.Fragment>
                    <NavBar 
                        profile={profile}
                        onSignoutClick={onSignoutClick}
                    />
                    <div style={{minHeight: window.innerHeight}} className={contentContainer}>
                        <div className={content}>
                            {props.children}
                        </div>
                    </div>
                </React.Fragment>
            ) : null}
            
        </div>
     );
}

LayoutWrapper.propTypes = {
    children: PropTypes.node
}
 
export default LayoutWrapper;