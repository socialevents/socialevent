
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { NavLink} from 'react-router-dom'


class NavBar extends Component {
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
           
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
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
