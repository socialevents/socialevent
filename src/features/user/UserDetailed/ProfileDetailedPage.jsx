import React, {useState, useEffect} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";
import {connect} from 'react-redux';
import "semantic-ui-css/semantic.min.css"
import './UserDetailedPage.css';
import ImageGrid from "../../nav/Profile/upload/ImageGrid";
import UserImageGrid from '../../nav/Profile/upload/UserImageGrid';
import Modal from "../../nav/Profile/upload/Modal";
import {withRouter} from 'react-router-dom';
import { motion } from "framer-motion";

import Axios from 'axios';




function UserDetailedPage({match}) {
    const [selectedImg, setSelectedImg] = useState(null),
          [name, setName] = useState(''),
          [profile_pic, setProfilePic] = useState(''),
          [gender, setGender] = useState(''),
          [dob, setDob] = useState(''),
          [state, setState] = useState(''),
          [profile_pics, setProfilePics] = useState(''),
          [email, setEmail] = useState(''),
          [description, setDescription] = useState('');

    
        // const {name, profile_pic, gender, dob, state, profile_pics, email, description} = props.user;
        
    useEffect(() => {

      if(match.params.id){
        Axios.get(`/api/profile/${match.params.id}`)
        .then(res => {
          setName(res.data.name);
          setProfilePic(res.data.profile_pic);
          setGender(res.data.gender);
          setDob(res.data.dob);
          setState(res.data.state);
          setProfilePics(res.data.profile_pics);
          setEmail(res.data.email);
          setDescription(res.data.description);
        })

      }
    })

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
                    
                <div className="img-grid">
   
   {profile_pics &&
     profile_pics.map((doc) => {
       
       return (
       <motion.div
         className="img-wrap"
         key={doc.id}
         layout
         whileHover={{ opacity: 1 }}
         s
         onClick={() => setSelectedImg(doc)}
       >
          
         <motion.img
           src={doc}
           alt="uploaded pic"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
         />
       </motion.div>
       
     )})}
         {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
 </div>
                </div>
            
          
        </div>
        </div> 
                
              
        )
    
}

export default withRouter(UserDetailedPage);