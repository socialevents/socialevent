import React, { Component } from "react";
import {
  Button,
  Grid,
  Header,
  Form,
  Message,
  Image,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import firebase from "../../../../src/firebase/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getUser } from "../../../redux/authReducer";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        axios
          .post(`/api/googleLogin`, { id: user.uid })
          .then((res) => {
            this.props.getUser(res.data);
            this.props.history.push("/events");
          })
          .catch((err) => {
            console.log(err);
            this.props.history.push("/register");
          });
      }
    });
  };

  login() {
    let user = { email: this.state.email, password: this.state.password };
    axios
      .post("/api/login", user)
      .then((res) => {
        this.props.getUser(res.data);
        this.props.history.push("/events");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
       
        <Grid.Column style={{ maxWidth: 620 }}>
        <Form size="large">
          <Header as="h2" color="black" textAlign="center">
            <img
              class="ui massive circular image"
              src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1598043093/socialogowhite_p8ql3j.png"
            />{" "}
             <div className='login'>
          Log-in to your account
              </div>
          </Header>
          
            <Segment stacked>
              <Form.Input
              
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                error={{
                  content: "Please enter a valid email address",
                  pointing: "below",
                }}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />

              <Button onClick={this.login} color="red" fluid size="large">
                Login
              </Button>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/register'><b>Sign Up</b></Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null, { getUser })(Login);
