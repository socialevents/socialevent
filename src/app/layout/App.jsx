import React   from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'
import routes from '../../routes'

function App() {
  return (
    <div>
      <NavBar/>
      <Container className="main">
      {routes}
      </Container>
    </div>
  );
}

export default App;
