import React, {Component} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"
import './UserDetailedPage.css';

//need to connect to backend and delete hardcoded data Jordan- 8/18/20

class UserDetailedPage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
        <div class='profile-container' >   
        <div class='ui center aligned segment' >
          
            
              
              <h1>WIEBO</h1>
            
                <div class='profile-photo-info'>
                <img class="ui small circular image" src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                <div class='profile-personal-info'>
                    <div>Name: Jordan Wiebe</div>
                    <div>Gender: Unicorn</div>
                    <div>Date of Birth: 1/1/20</div>
                    <div>Location: Utah</div>
                </div>
                </div>
                <div class='ui raised segment'>
                    <h3>About Me:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet porta orci. Praesent blandit libero in mi elementum, vitae pretium nibh auctor. Duis accumsan maximus mauris, sit amet egestas purus eleifend sed. Donec tempus augue in arcu aliquet congue ut sollicitudin lectus. Duis at fringilla sapien. Sed egestas, orci et molestie tristique, ipsum mi interdum erat, ut tristique libero quam vel enim. Duis eros tortor, condimentum vitae metus sit amet, ornare blandit arcu. In tempus elit eget justo aliquet pulvinar. Mauris vestibulum bibendum nisl. Suspendisse et elit quis leo suscipit gravida vitae porttitor nibh. Fusce ornare neque erat, non efficitur eros congue et. </p>
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

export default UserDetailedPage