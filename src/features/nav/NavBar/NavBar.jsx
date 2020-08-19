
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { NavLink} from 'react-router-dom'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    })
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  render() {
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
          
          <Menu.Item as={NavLink} to='/login' name="Login" position="right">
            <Button basic inverted content="Login"  />
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
              onClick={() => firebase.auth().signOut()}
            />
          </Menu.Item>
          <Menu.Item name="Profile" />
          <Menu.Item></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
