import React, { Component } from "react";
import { Container, Button, Form, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getUser} from '../../../redux/authReducer';
import axios from 'axios';

class BasicPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      editView: false,
      name: '',
      gender: '',
      dob: '',
      state: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      name: this.props.user.name,
      gender: this.props.user.gender,
      dob: this.props.user.dob,
      state: this.props.user.state,
      id: this.props.user.id
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.user !== this.props.user) {
      this.setState({
        name: this.props.user.name,
        gender: this.props.user.gender,
        dob: this.props.user.dob,
        state: this.props.user.state,
        id: this.props.user.id
      })
    }
  }

  handleSaveChanges = () => {
    const {name, gender, dob, state} = this.state;
    console.log(this.state.id);
    axios.put(`/api/users/${this.props.user.id}`, {name, gender, dob, state})
      .then((res) => this.props.getUser(res.data))
      .catch(err => console.log(err));
      
      this.toggleEditView();

  }

  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
  };

  //need endpoint to save changes Jordan-8/17

  render() {
    const {name, profile_pic, gender, dob, state, profile_pics, email, description} = this.props.user;
    console.log(this.props.user);
    return (
      
       
        <Segment>
          
            <Form>
              <h1>Basic Info</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label>Name: {name} </label>
                  </Form.Field>
                  <Form.Field>
                    <label>Gender: {gender}</label>
                  </Form.Field>
                  <Form.Field>
              <label>Birthday: {dob}</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Location: {state}</label>
                  </Form.Field>
                  <Button onClick={this.toggleEditView} type="button">
                    Edit
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>Name</label>
                    <input onChange={(e) => this.setState({name: e.target.value})} placeholder="Full name" value={this.state.name} />
                  </Form.Field>
                  <Form.Field>
                    <label>Gender</label>
                    <input onChange={(e) => this.setState({gender: e.target.value})} placeholder="optional" value={this.state.gender} />
                  </Form.Field>
                  <Form.Field>
                    <label>Birthday</label>
                    <input onChange={(e) => this.setState({dob: e.target.value})} placeholder="Date of birth" value={this.state.dob} />
                  </Form.Field>
                  <Form.Field>
                    <label>Hometown</label>
                    <input onChange={(e) => this.setState({state: e.target.value})} placeholder="Where are you from?" value={this.state.state} />
                  </Form.Field>
                  <Button onClick={this.handleSaveChanges} type="button">
                    Save Changes
                  </Button>
                  <Button onClick={this.toggleEditView} type="button">
                    Cancel
                  </Button>
                </div>
              )}
            </Form>
          
        </Segment>
      
    );
  }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps, {getUser})(BasicPage);