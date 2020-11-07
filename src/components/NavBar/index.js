import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import style from "./styles";
import AppIcon from "../../assets/logo/appIconSmall.png";

const NavBar = () => {
  const { container, mainContainer, leftContainer, rightContainer, logoContainer, iconContainer, titleContainer, menuIconContainer, menuItemWrapper, menuItemContainer,  optionContainer, itemContainer } = style();

  const isLoggedIn = true;

  const [mobileMenu, setMobileMenu] = useState(true);

  const onMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={container}>
      <div className={mainContainer}>
        <div className={leftContainer}>
          <NavLink exact activeStyle={{opacity: "0.5"}} to="/" className={logoContainer} >
            <img src={AppIcon} alt="Icon" className={iconContainer} />
            <div className={titleContainer}>Travel Talk</div>
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
                <NavLink exact activeStyle={{color: "#bc8989"}} to="/myprofile" className={itemContainer}>
                  Rathijit
                </NavLink>
              </React.Fragment>) : null}

              {!isLoggedIn ? (<React.Fragment>
                  <NavLink style={{marginTop: "10%"}} exact activeStyle={{color: "#bc8989"}} to="/signup" className={itemContainer}>
                    Join
                  </NavLink>
                  <NavLink style={{marginTop: "10%"}} exact activeStyle={{color: "#bc8989"}} to="/signin" className={itemContainer}>
                    Sign In
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
              <NavLink exact activeStyle={{color: "#bc8989"}} to="myprofile"  className={menuItemContainer}>Rathijit</NavLink>
            </div>
          </React.Fragment>) : null}

          {!isLoggedIn ? (<React.Fragment>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to="/signup"  className={menuItemContainer}>Join</NavLink>
            </div>
            <div className={menuItemContainer}>
              <NavLink exact activeStyle={{color: "#bc8989"}} to="/signin"  className={menuItemContainer}>SignIn</NavLink>
            </div>
          </React.Fragment>) : null}
        </div>
      )}
    </div>
  );
};

export default NavBar;
