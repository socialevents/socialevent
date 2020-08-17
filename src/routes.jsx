import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../src/app/layout/App';
import EventDashboard from './features/events/EventDashboard/EventDashboard';



export default (
  <Switch>
    <Route exact path='/' component={EventDashboard}/>
    <Route path='/event/:eventid' component={Event} />
    <Route path='/createevent' component={CreateEvent}/>
    <Route path='/profile/:userid' component={Profile} />
    <Route path='/settings/:userid' component={Settings}/>
  </Switch>
)