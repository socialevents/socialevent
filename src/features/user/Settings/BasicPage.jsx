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



  render() {
    const {name, profile_pic, gender, dob, state, profile_pics, email, description} = this.props.user;
    console.log(this.props.user);
    return (
      
       <div className='basic'>
        <Segment>
          
            <Form>
              <h1 className='basicinfo'>Basic Info</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label className='basicdetails'>Name: {name} </label>
                  </Form.Field>
                  <Form.Field>
                    <label className='basicdetails'>Gender: {gender}</label>
                  </Form.Field>
                  <Form.Field>
              <label className='basicdetails'>Birthday: {dob}</label>
                  </Form.Field>
                  <Form.Field>
                    <label className='basicdetails'>Location: {state}</label>
                  </Form.Field>
                  <Button onClick={this.toggleEditView} type="button" color='inverted green'>
                    Edit
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label className='basicdetails'>Name</label>
                    <input onChange={(e) => this.setState({name: e.target.value})} placeholder="Full name" value={this.state.name} />
                  </Form.Field>
                  <Form.Field>
                    <label className='basicdetails'>Gender</label>
                    <input onChange={(e) => this.setState({gender: e.target.value})} placeholder="optional" value={this.state.gender} />
                  </Form.Field>
                  <Form.Field>
                    <label className='basicdetails'>Birthday</label>
                    <input onChange={(e) => this.setState({dob: e.target.value})} placeholder="Date of birth" value={this.state.dob} type="date"  />
                  </Form.Field>
                  <Form.Field>
                    <label className='basicdetails'>Hometown</label>
                    <input onChange={(e) => this.setState({state: e.target.value})} placeholder="Where are you from?" value={this.state.state} />
                  </Form.Field>
                  <Button onClick={this.handleSaveChanges}  color='inverted green' type="button">
                    Save Changes
                  </Button>
                  <Button onClick={this.toggleEditView} color='red' type="button">
                    Cancel
                  </Button>
                </div>
              )}
            </Form>
          
        </Segment>
        </div>
      
    );
  }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps, {getUser})(BasicPage);