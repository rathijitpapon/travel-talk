import React from "react";
import {Switch, Route} from "react-router-dom";

import ProtectedRoute from "./protectedRoute";

import Messages from "../views/Messages";
import Inbox from "../views/Inbox";
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
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/landing" component={Landing} />

        <ProtectedRoute exact path="/messages" component={Messages} ></ProtectedRoute>
        <ProtectedRoute exact path="/inbox/:id" component={Inbox} ></ProtectedRoute>
        <ProtectedRoute exact path="/profile/:id" component={MyProfile} ></ProtectedRoute>
        <ProtectedRoute exact path="/editprofile" component={EditProfile} ></ProtectedRoute>
        <ProtectedRoute exact path="/" component={Home} ></ProtectedRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default MainLayout;
