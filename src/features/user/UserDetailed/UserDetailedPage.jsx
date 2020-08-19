import React, {Component} from 'react';
import { Grid, Container, Image, Segment, Form } from "semantic-ui-react";

//need to connect to backend and delete hardcoded data Jordan- 8/18/20

class UserDetailedPage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Grid>
        <Segment>
          <Grid.Column>
            <Form>
              
              <h1>WIEBO</h1>
            
                <Image as ='a' size='large' circular src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                <div>
                  <Form.Field>
                    <label>Name: Jordo Wiebo</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Gender: Unicorn</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Date of Birth: 1/1/2020</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Location: Wherever you are!</label>
                  </Form.Field>
                  <Form.Field>
                    <p>About Me:</p>
                    <label>I am Jorbo I like to have fun with my baby and I am allergic to peanut butter and i have a nice personality!</label>
                  </Form.Field>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                  <Image as ='a' size='small'  src = 'https://randomuser.me/api/portraits/men/20.jpg'/>
                </div>
            </Form>
          </Grid.Column>
        </Segment>
      </Grid>
              
                
              
        )
    }
}

export default UserDetailedPage