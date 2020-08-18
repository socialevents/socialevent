import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import routes from "../../routes";
import NavBar from "../../features/nav/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container className="main">{routes}</Container>
    </div>
  );
}

export default App;
