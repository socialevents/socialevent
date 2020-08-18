
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import Login from '../Login/Login'
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";


class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Social-events
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
            
          </Menu.Item>
          <Link to='/login'>
          <Menu.Item position="right">
            <Button basic inverted content="Login"  />
           
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item></Link>
          <Menu.Item name="Profile" />
          <Menu.Item></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
