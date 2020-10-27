import React from "react";
import {Switch, Route} from "react-router-dom";

import Messages from "../views/Messages";
import Notifications from "../views/Notifications";
import MyProfile from "../views/MyProfile";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import EditProfile from "../views/EditProfile";
import Landing from "../views/Landing";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const MainLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={Home} />
        <Route to="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default MainLayout;
