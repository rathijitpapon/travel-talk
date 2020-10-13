import React from "react";
import {Switch, Route} from "react-router-dom";

import MyPosts from "../views/MyPosts";
import MyProfile from "../views/MyProfile";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Landing from "../views/Landing";
import NotFound from "../views/NotFound";

const MainLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/myposts" component={MyPosts} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Landing} />
        <Route to="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default MainLayout;
