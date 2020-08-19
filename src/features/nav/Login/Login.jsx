import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';

 class Login extends Component {
    render() {
        return (
           <Container>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='' /> Log-in to your account
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
        New to us? <a href=''>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)


           </Container>
  
                     
              
    }
    }


export default Login;