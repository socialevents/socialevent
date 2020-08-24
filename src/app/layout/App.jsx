import React   from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'
import routes from '../../routes'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage  from '../../features/event/EventDetails/EventDetailedPage'
import HomePage from '../../features/home/HomePage';
import Login from '../../features/nav/Login/Login';
import Register from '../../features/nav/Register/Register';



function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    </Switch>
        <Route path="/(.+)" render={ () => (
    <div>
        <NavBar/>
        <Container className="main">
        <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/events' component={EventDashboard} /> 
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/event/:id' component={EventDetailedPage} />
        <Route path='/manage/:id' component={EventForm} />
        <Route path='/people' component={PeopleDashboard} />
        <Route path='/profile/:id' component={UserDetailedPage} />
        <Route path='/settings' component={SettingsDashboard} />
        <Route path='/createEvent' component={EventForm} />
        </Switch>
        </Container>
      </div>
        
        )}/>
      
    </div> 
        
  );
}

export default App;
