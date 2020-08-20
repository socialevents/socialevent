
import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {firebase} from '../../../firebaseConfig/firebase';
import {clearUser} from '../../../redux/authReducer';
import axios from "axios";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase.auth().signOut();
    axios.get('/api/logout')
    .then(() => {
      this.props.clearUser();
    })
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
           
            <Button
              onClick={this.signOut}
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
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {clearUser})(NavBar);
