import React, { Component } from 'react';
import { Button, Grid, Header, Form, Message, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "semantic-ui-css/semantic.min.css";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {getUser} from '../../../redux/authReducer';

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
        console.log(user);
      })
    }

        login(){
            let user = {email: this.state.email, password: this.state.password}
            axios.post('/api/login', user).then(res=>{
                    this.props.getUser(res.data.user);
                    this.props.history.push('/');
                }).catch(res=>{
                 
                    console.log(res)
                })
        }

        
   render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='black' textAlign='center'>
                <img class="ui massive image"src='https://res.cloudinary.com/dfgz2wntk/image/upload/v1597780245/logo3icon_snbatb.png'  /> Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={event=>{this.setState({email: event.target.value})}} />
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