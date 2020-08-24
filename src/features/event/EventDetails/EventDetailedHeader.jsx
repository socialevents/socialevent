import React from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import {leaveEvent, joinEvent} from '../../event/eventActions';


const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = ({event, user, leaveEvent, joinEvent}) => {

    const join = () => {
      console.log(user.id, user.profile_pic, user.name)
      axios.put(`/api/events/join/${event.id}`, {userId:user.id, photoURL: user.profile_pic, name:user.name})
      .then(res => {
        joinEvent({userId:user.id, photoURL: user.profile_pic, name:user.name}, event);
      });
    }

    const leave = () => {
      axios.put(`/api/events/leave/${event.id}`, {userId:user.id, photoURL: user.profile_pic, name:user.name})
      .then(res => {
        leaveEvent({userId:user.id, photoURL: user.profile_pic, name:user.name}, event);
      })
    }

    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={`/assets/${event.category}.jpg`} fluid style={eventImageStyle}/>
        
                <Segment basic style={eventImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={event.title}
                          style={{ color: 'white' }}
                        />
                        <p>{event.date}</p>
                        <p>
                          Hosted by <strong>{event.hostedBy}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button onClick={leave}>Cancel My Place</Button>
                <Button onClick={join} color="teal">JOIN THIS EVENT</Button>
        
                <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
                  Manage Event
                </Button>
              </Segment>
            </Segment.Group>
    )
}

const mapStateToProps = reduxState => reduxState.users;

export default connect(mapStateToProps, {joinEvent, leaveEvent})(EventDetailedHeader);
