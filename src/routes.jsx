import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../src/app/layout/App";
import EventDashboard from "./features/events/EventDashboard/EventDashboard";
import BasicInfo from "./features/nav/Profile/Settings/BasicInfo";
import AboutMe from "./features/nav/Profile/Settings/AboutMe";
import MyPhotos from "./features/nav/Profile/Settings/MyPhotos";
import Login from "./features/nav/Login/Login"
import Register from "./features/nav/Register/Register"

export default (
  <Switch>
    <Route exact path="/" component={EventDashboard} />
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/event/:eventid" component={Event} />
    {/* <Route path='/createevent' component={CreateEvent}/>
    <Route path='/profile' component={Profile} /> */}
    <Route path='/settings/aboutme' component = {AboutMe} />
    <Route path="/settings/basicinfo" component={BasicInfo} />
    <Route path='/settings/myphotos' component={MyPhotos}/>
  </Switch>
);
