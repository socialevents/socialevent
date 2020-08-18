import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../src/app/layout/App";
import EventDashboard from "./features/events/EventDashboard/EventDashboard";
import BasicInfo from "./features/nav/Profile/Settings/BasicInfo";
import AboutMe from "./features/nav/Profile/Settings/AboutMe";
import MyPhotos from "./features/nav/Profile/Settings/MyPhotos";

export default (
  <Switch>
    <Route exact path="/" component={EventDashboard} />
    <Route path="/event/:eventid" component={Event} />
    {/* <Route path='/createevent' component={CreateEvent}/>
    <Route path='/profile' component={Profile} /> */}
    <Route path='/settings/aboutme' component = {AboutMe} />
    <Route path="/settings/basicinfo" component={BasicInfo} />
    <Route path='/settings/myphotos' component={MyPhotos}/>
  </Switch>
);
