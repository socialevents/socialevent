import React, { Component } from 'react';
import { Button, Grid, Header, Form, Message, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            registered: true,
            email: '',
            password: ''
            
        }


       
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
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
        
                  <Button color='red' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        
)


       
  
                     
              
<<<<<<< HEAD
    }
    }
=======
        }
    }
>>>>>>> master


export default Login;