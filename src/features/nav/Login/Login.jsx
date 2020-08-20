import React, { Component } from 'react';
import { Button, Grid, Header, Form, Message, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "semantic-ui-css/semantic.min.css";
import {firebase} from '../../../../src/firebaseConfig/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {getUser} from '../../../redux/authReducer';
import axios from 'axios'





 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
            
        }
        this.login=this.login.bind(this)

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
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          axios.post(`/api/googleLogin`, {id:user.uid})
          .then(res => {

          }).catch(err => {
            firebase.auth().signOut();
            this.props.history.push('/register');
          })
        }
      })
    }

        login(){
            let user = {email: this.state.email, password: this.state.password}
            axios.post('/api/login', user).then(res=>{
                    this.props.getUser(res.data.user);
                    this.props.history.push('/events');
                }).catch(res=>{
                 
                    console.log(res)
                })
        }

        
   render() {
     console.log('hello')
        return (

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='black' textAlign='center'>
                <img class="ui massive image"src='https://res.cloudinary.com/dfgz2wntk/image/upload/v1597780245/logo3icon_snbatb.png'  /> Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'  
                  error={{
                      content: 'Please enter a valid email address',
                      pointing: 'below',
                    }} onChange={event=>{this.setState({email: event.target.value})}} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password' onChange={event=>{this.setState({password: event.target.value})}}
                  />
        
                  <Button color='red' fluid size='large'>
                    Login 
                  </Button>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        
)


       
  
                     
              
    }
    }


export default connect (null, {getUser})(Login);