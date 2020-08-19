
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink, Link} from 'react-router-dom'
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

const config = {
  apiKey: "AIzaSyCQ8ekSC_ihYteUPp5X6ZhbnUdkTiHo_Io",
  authDomain: "socailevent.firebaseapp.com",
  databaseURL: "https://socailevent.firebaseio.com",
  projectId: "socailevent",
  storageBucket: "socailevent.appspot.com",
  messagingSenderId: "820788796021",
  appId: "1:820788796021:web:c2e6a480ecae394db5763c",
  measurementId: "G-Q1J5VW2WKN"
}

firebase.initializeApp(config);

class NavBar extends Component {
  state= {
    authenticated: false
  }
  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }
  handleSignOut = () => {
    this.setState({
      authenticated:false
    })
    this.props.history.push('/')
  }

  render() {
    const {authenticated} = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to='/'>
            <img src="/assets/logo.png" alt="logo" />
            Social-events
          </Menu.Item>
            <Menu.Item as={NavLink} to='/events' name="Events" />
            <Menu.Item as={NavLink} to='/people' name="People" />
            <Menu.Item>
              <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
            </Menu.Item>
            {authenticated ? <SignedInMenu signOut={this.handleSignOut}/> : <SignedOutMenu signIn={this.handleSignIn}/>}
              {/* <Menu.Item name="Profile" />
            <Menu.Item></Menu.Item> */}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
