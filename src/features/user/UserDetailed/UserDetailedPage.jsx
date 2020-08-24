import React, {Component} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";
import {connect} from 'react-redux';
import "semantic-ui-css/semantic.min.css"
import './UserDetailedPage.css';

//need to connect to backend and delete hardcoded data Jordan- 8/18/20

class UserDetailedPage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {name, profile_pic, gender, dob, state, profile_pics, email, description} = this.props.user;
        
        return(
        <div class='profile-container' >   
        <div class='ui center aligned segment' >
          
            
              
              <h1>{name}</h1>
            
                <div class='profile-photo-info'>
                <img class="ui small circular image" src ={profile_pic}/>
                <div class='profile-personal-info'>
                    {/* <div>Name: {name}</div> */}
                    <div>Gender: {gender}</div>
                    <div>Date of Birth: {dob}</div>
                    <div>Location: {state}</div>
                </div>
                </div>
                <div class='ui raised segment'>
                    <h3>About Me:</h3>
                    <p>{description}</p>
                </div>
                    <h3>My Photos</h3>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/21.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/22.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/23.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/24.jpg'/>
                </div>
            
          
        </div>
            
                
              
        )
    }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps)(UserDetailedPage);