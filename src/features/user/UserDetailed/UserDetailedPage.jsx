import React, {Component} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";
import {connect} from 'react-redux';
import ImageGrid from '../../nav/Profile/upload/ImageGrid'
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
            <div className='aboutme'>
        <div class='profile-container' >   
        <div class='ui center aligned segment' >
          
            
              
              <h1 className='profile'>{name}</h1>
            
                <div class='profile-photo-info'>
                <img class="ui small circular image" src ={profile_pic}/>
                <div class='profile-personal-info'>
                    {/* <div>Name: {name}</div> */}
                    <div>Gender: {gender}</div>
                    <div>Date of Birth: {dob}</div>
                    <div>Location: {state}</div>
                </div>
                </div>
                <div className='inverted'>
                <div class='ui segment'>
                    <h3 className='about'>About Me :</h3>
                    <div className='description'>
                    <p>{description}</p>
                    </div>
                </div>
                </div>
               
                    <h3 className='phototitle' >My Photos</h3>
                    
                 <ImageGrid/>
                  
                </div>
            
          
        </div>
        </div>
            
                
              
        )
    }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps)(UserDetailedPage);