import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/Login";
import Register from "../auth/Register";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";
import CreateProfile from "../profile-form/CreateProfile";
import AddExperience from "../profile-form/AddExperience";
import AddEducation from "../profile-form/AddEducation";
import Profiles from "../profiles/Profiles";
import EditProfile from "../profile-form/EditProfile";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profiles" exact component={Profiles} />
        <Route path="/profile/:id" exact component={Profile} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/create-profile" exact component={CreateProfile} />
        <PrivateRoute path="/edit-profile" exact component={EditProfile} />
        <PrivateRoute path="/add-experience" exact component={AddExperience} />
        <PrivateRoute path="/add-education" exact component={AddEducation} />
        <PrivateRoute path="/posts" exact component={Posts} />
        <PrivateRoute path="/posts/:id" exact component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
