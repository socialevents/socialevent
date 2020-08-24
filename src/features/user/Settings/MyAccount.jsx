//component for My Account on profile settings page

import React, { Component } from "react";
import { Grid, Button, Segment, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import {getUser} from '../../../redux/authReducer';
import {connect} from 'react-redux';
import axios from 'axios';

//need to add functionality to updating password 8/21 Jordan

class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editEmail: false,
      editPassword: false,
      email: '',
      verifyEmail: '',
      password: '',
      verifyPass: '',
      emailMatchDisplay: false,
      passMatchDisplay: false
    };
  }

  componentDidMount = () => {
    this.setState({
      email: this.props.user.email
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.user !== this.props.user) {
      this.setState({
        email: this.props.user.email
      })
    }
  }

  handleEmailChanges = () => {
    if(this.state.email === this.state.verifyEmail){
    const {email} = this.state;
    console.log(this.state.id);
    axios.put(`/api/users/${this.props.user.id}`, {email})
      .then((res) => this.props.getUser(res.data))
      .catch(err => console.log(err));
      
      this.toggleEditView();
    }
    else{
      this.setState({emailMatchDisplay: true})
    }  
  }

  handleDeleteUser = () => {
    axios.delete(`/api/users/${this.props.user.id}`)
      .then(() => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  handlePasswordChanges = () => {
    if(this.state.password === this.state.verifyPass){
      //need to add functionality here//
      this.togglePasswordView();
    }
    else{
      this.setState({passMatchDisplay: true})
    }  
  }


  toggleEditView = () => {
    this.setState({ editEmail: !this.state.editEmail, emailMatchDisplay: false });
  };

  togglePasswordView = () => {
    this.setState({editPassword: !this.state.editPassword});
  };

  

  render() {
    const {email} = this.props.user;
    return (
        <div>
        <Segment>
          
            <Form>
              {/* profile image */}
              <h1>My Account</h1>
              <div class="ui divider"></div>

              {this.state.editEmail === false ? (
                <div>
                  <Form.Field>
                    <h3>Email: {email}</h3>
                  </Form.Field>
                  <Button type="edit" onClick={this.toggleEditView}>
                    Change Email
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>New Email</label>
                    <input
                    // value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                     placeholder='enter new email'></input>
                     <label>Re-enter new email</label>
                    <input
                    // value={this.state.verifyEmail}
                    onChange={(e) => this.setState({verifyEmail: e.target.value})}
                     placeholder='enter new email'></input>
                     {this.state.emailMatchDisplay === true
                     ?(
                     <div class="ui negative message">
                        <i class="close icon"></i>
                          
                           <p>New emails must match!</p>
                          </div>
                     )
                      :null}
                  </Form.Field>
                  <Button type="button" onClick={this.toggleEditView}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={this.handleEmailChanges}>
                    Save Changes
                  </Button>
                </div>
              )}

                
                  <div class="ui divider"></div>

                 {/* PASSWORD EDIT FORM */}
                  {this.state.editPassword === false ? (
                <div>
                  <Form.Field>
                    <h3>Password</h3>
                  </Form.Field>
                  <Button type="edit" onClick={this.togglePasswordView}>
                    Change Password
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>New Password</label>
                    <input
              
                    onChange={(e) => this.setState({password: e.target.value})}
                     placeholder='enter new email'></input>
                     <label>Re-enter new password</label>
                    <input
                    
                    onChange={(e) => this.setState({verifyPass: e.target.value})}
                     placeholder='enter new email'></input>
                     {this.state.passMatchDisplay === true
                     ?(
                     <div class="ui negative message">
                        <i class="close icon"></i>
                          
                           <p>New password fields must match!</p>
                          </div>
                     )
                      :null}
                  </Form.Field>
                  <Button type="button" onClick={this.togglePasswordView}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={this.handlePasswordChanges}>
                    Save Changes
                  </Button>
                </div>
              )}
            </Form>
          
        </Segment>
        
        <Segment>
          <Button type="button" color='red' onClick={(e) => { if (window.confirm('Are you sure you wish to delete your account?')) if (window.confirm('Are you really sure you want to delete your account?')) this.handleDeleteUser(e) } }>Delete Account</Button>
        </Segment>
        </div>
    );
  }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps, {getUser})(MyAccount);