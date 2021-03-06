import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import style from "./styles";
import AppIcon from "../../assets/logo/appIconSmall.png";

const NavBar = (props) => {
  const { container, mainContainer, leftContainer, rightContainer, logoContainer, iconContainer, titleContainer, menuIconContainer, menuItemWrapper, menuItemContainer,  optionContainer, itemContainer } = style();

  const [mobileMenu, setMobileMenu] = useState(true);

  const onMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const onSignoutClick = props.onSignoutClick;
  const username = props.profile.username;
  const isLoggedIn = ((username !== "") ? true : false);

  return (
    <div className={container}>
      <div className={mainContainer}>
        <div className={leftContainer}>
          <NavLink exact activeStyle={{opacity: "0.5"}} to="/" className={logoContainer} >
            <img src={AppIcon} alt="Icon" className={iconContainer} />
            <div className={titleContainer} style={ window.innerWidth >800 && !isLoggedIn ? {marginTop: "5.6%"} : null} >Travel Talk</div>
          </NavLink>
        </div>

        <div className={rightContainer}>
          <div className={menuIconContainer} onClick={onMenuClick}>
            {mobileMenu ? <i className="fas fa-bars fa-2x"></i> : <i className="fas fa-times fa-2x"></i>}
          </div>
          <div className={optionContainer}>
            {isLoggedIn ? (<React.Fragment>
                <NavLink exact activeStyle={{color: "#bc8989"}} to="/messages" className={itemContainer}>
                  Messages
                </NavLink>
                <NavLink exact activeStyle={{color: "#bc8989"}} to={"/profile/" + username} className={itemContainer}>
                {username ? username[0].toUpperCase() + username.slice(1) : username}
                </NavLink>
                <div className={itemContainer} onClick={onSignoutClick}>
                  Logout
                </div>
              </React.Fragment>) : null}

              {!isLoggedIn ? (<React.Fragment>
                  <NavLink style={{marginTop: "11%"}} exact activeStyle={{color: "#bc8989"}} to="/signup" className={itemContainer}>
                    Join
                  </NavLink>
                  <NavLink style={{marginTop: "11%"}} exact activeStyle={{color: "#bc8989"}} to="/signin" className={itemContainer}>
                    Login
                  </NavLink>
                </React.Fragment>) : null}
          </div>
        </div>
      </div>
      {mobileMenu ? null : (
        <div className={menuItemWrapper}>

          {isLoggedIn ? (<React.Fragment>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to="/messages"  className={menuItemContainer}>Messages</NavLink>
            </div>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to={"/profile/" + username}  className={menuItemContainer}>{username ? username[0].toUpperCase() + username.slice(1) : username}</NavLink>
            </div>
            <div className={menuItemContainer} onClick={onSignoutClick}>
                  Logout
            </div>
          </React.Fragment>) : null}

          {!isLoggedIn ? (<React.Fragment>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to="/signup"  className={menuItemContainer}>Join</NavLink>
            </div>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to="/signin"  className={menuItemContainer}>Login</NavLink>
            </div>
          </React.Fragment>) : null}
        </div>
      )}
    </div>
  );
};

export default NavBar;
