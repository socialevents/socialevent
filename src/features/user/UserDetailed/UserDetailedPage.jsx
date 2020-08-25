import React, {useState} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";
import {connect} from 'react-redux';
import "semantic-ui-css/semantic.min.css"
import './UserDetailedPage.css';
import ImageGrid from "../../nav/Profile/upload/ImageGrid";
import Modal from "../../nav/Profile/upload/Modal";



const mapStateToProps = reduxState => reduxState.users;

function UserDetailedPage(props) {
    const [selectedImg, setSelectedImg] = useState(null);

    
        const {name, profile_pic, gender, dob, state, profile_pics, email, description} = props.user;
        
        return(
          <div className='aboutme'>
        <div class='profile-container' >   
        <div class='ui center aligned segment' >
          
            
              
        <h1 className='profile'>{name}</h1>
            
                <div class='profile-photo-info'>
                <img class="ui small circular image" src ={profile_pic}/>
                <div class='profile-personal-info'>
                    {/* <div>Name: {name}</div> */}
                    <div className='basicdetails'>Gender: {gender}</div>
                    <div className='basicdetails'>Date of Birth: {dob}</div>
                    <div className='basicdetails'>Location: {state}</div>
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
                    <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
                </div>
            
          
        </div>
        </div> 
                
              
        )
    
}

export default connect(mapStateToProps)(UserDetailedPage);