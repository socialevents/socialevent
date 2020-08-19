
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink, Link} from 'react-router-dom'
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import {firebase} from '../../../firebaseConfig/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from "axios";

class NavBar extends Component {
  state= {
    authenticated: false,
    auth: null
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
  componentDidMount = () => {

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
    console.log(this.state.auth)
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
            <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              {/* <Menu.Item name="Profile" />
            <Menu.Item></Menu.Item> */}
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
