import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../../../src/firebase/config";
import { clearUser, getUser } from "../../../redux/authReducer";
import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";
import axios from "axios";
import authenticated from 'authenticated'
import { getEvents } from '../../event/eventActions'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    console.log("LOGGING IN")
    axios.get('/api/quickLogin')
    .then(res => {
      this.props.getUser(res.data);
    })
    axios.get('/api/events')
    .then(res => {
      this.props.getEvents(res.data);
    })
  }

  signOut() {
    firebase.auth().signOut();
    axios.get("/api/logout").then(() => {
      this.props.clearUser();
    });
  }

  render() {
    console.log(this.props);
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to='/'>
            <img  class="ui mini circular image" src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1598043049/sociallogoblack_rrijhs.png" alt="logo" />
            <div className='navevents'>
          Events
          </div>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {this.props.user.name ? (
            <SignedInMenu
              signOut={this.signOut}
              name={this.props.user.name}
              profile_pic={this.props.user.profile_pic}
            ></SignedInMenu>
          ) : (
            <SignedOutMenu />
          )}
          {/* <Menu.Item name="Profile" />
            <Menu.Item></Menu.Item> */}
        </Container>
      </Menu>
    );
  }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps, {clearUser, getUser, getEvents})(NavBar);
