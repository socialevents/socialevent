import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import {connect} from 'react-redux';
import {getUser} from '../../../redux/authReducer'
import axios from 'axios';
import firebase from  "../../../../src/firebase/config"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

 class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            gender: '',
            state: '',
            password: ''
            
        }
         this.register=this.register.bind(this)
         
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        const {gender, state} = this.state;
        console.log(gender, state)
        if (user) {
          const {displayName, email, photoURL} = user;
          axios.post('/api/googleRegister', {id:user.uid, name:displayName, gender, state, email, profile_pic:photoURL})
          .then(res => {
            this.props.getUser(res.data);
            this.props.history.push('/events');
          })
        }
        console.log(user);
      })
    }

    uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: (e) => {
          return false
        }
      }
    }

    
    
    register(){
        const {name, email, gender, state, password} = this.state;
        let user = {"name": name, "email": email, "gender": gender, "state": state, "password": password}
        axios.post('/api/register', user).then(res=>{
                this.props.getUser(res.data);
                this.props.history.push('/events');
            }).catch(res=>{
               
                console.log(res)
            })
    }

    render() {
        return (
            <div class="ui form segment">
            <Header as='h2' color='black' textAlign='center'>
               <img class="ui massive image"src='https://res.cloudinary.com/dfgz2wntk/image/upload/v1597780245/logo3icon_snbatb.png'  /> Register your new account
             </Header>
             <div class="field">
   <label>Name</label>
   <input type="text" name="name" placeholder="Name" onChange={event=>{this.setState({name: event.target.value})}} required></input>
 </div>

 <div class="field">
   <label>Email</label>
   <input type="text" name="email" placeholder="Email" onChange={event=>{this.setState({email: event.target.value})}} required></input>
 </div>

 
 <div class="field">
 <div class="field">
   <select value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
     <option value="">Gender</option>
     <option value="Male">Male</option>
     <option value="Female">Female</option>
     <option value="Unicorn">Unicorn</option>
   </select>
 </div>
   </div>
   <div class="field">
     <label>State</label>
     <select class="ui fluid dropdown" value={this.state.state} onChange={(e) => this.setState({state: e.target.value})}>
       <option value="">State</option>
   <option value="Alabama">Alabama</option>
   <option value="Alaska">Alaska</option>
   <option value="Arizona">Arizona</option>
   <option value="Arkansas">Arkansas</option>
   <option value="California">California</option>
   <option value="Colorado">Colorado</option>
   <option value="Connecticut">Connecticut</option>
   <option value="Delaware">Delaware</option>
   <option value="District Of Columbia">District Of Columbia</option>
   <option value="Florida">Florida</option>
   <option value="Georgia">Georgia</option>
   <option value="Hawaii">Hawaii</option>
   <option value="Idaho">Idaho</option>
   <option value="Illinois">Illinois</option>
   <option value="Indiana">Indiana</option>
   <option value="Iowa">Iowa</option>
   <option value="Kansas">Kansas</option>
   <option value="Kentucky">Kentucky</option>
   <option value="Louisiana">Louisiana</option>
   <option value="Maine">Maine</option>
   <option value="Maryland">Maryland</option>
   <option value="Massachusetts">Massachusetts</option>
   <option value="Michigan">Michigan</option>
   <option value="Minnesota">Minnesota</option>
   <option value="Mississippi">Mississippi</option>
   <option value="Missouri">Missouri</option>
   <option value="Montana">Montana</option>
   <option value="Nebraska">Nebraska</option>
   <option value="Nevada">Nevada</option>
   <option value="New Hampshire">New Hampshire</option>
   <option value="New Jersey">New Jersey</option>
   <option value="New Mexico">New Mexico</option>
   <option value="New York">New York</option>
   <option value="North Carolina">North Carolina</option>
   <option value="North Dakota">North Dakota</option>
   <option value="Ohio">Ohio</option>
   <option value="Oklahoma">Oklahoma</option>
   <option value="Oregon">Oregon</option>
   <option value="Pennsylvania">Pennsylvania</option>
   <option value="Rhode Island">Rhode Island</option>
   <option value="South Carolina">South Carolina</option>
   <option value="South Dakota">South Dakota</option>
   <option value="Tennessee">Tennessee</option>
   <option value="Texas">Texas</option>
   <option value="Utah">Utah</option>
   <option value="Vermont">Vermont</option>
   <option value="Virginia">Virginia</option>
   <option value="Washington">Washington</option>
   <option value="West Virginia">West Virginia</option>
   <option value="Wisconsin">Wisconsin</option>
   <option value="Wyoming">Wyoming</option>
     </select>
   </div>
   <div class="field">
   <label>Password</label>
   <input name="password" type="password" onChange={event=>{this.setState({password: event.target.value})}} required></input>
 </div>
 <div class="inline field">
   <div class="ui checkbox">
     <input name="terms" type="checkbox"></input>
     <label>I agree to the terms and conditions</label>
     <div class="ui divider"></div>
     <button onClick={this.register} class="ui button" type="submit">Submit</button>
     <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
   </div>
   </div>

 
         
</div>
        )
    }
}

export default connect(null, {getUser}) (Register);