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
      axios.put(`/api/events/join/${event.id}`, {userId:user.id, photoURL: user.profile_pic, name:user.name})
      .then(res => {
        joinEvent({id:user.id, photoURL: user.profile_pic, name:user.name}, event);
      });
    }

    const leave = () => {
      axios.put(`/api/events/leave/${event.id}`, {userId:user.id, photoURL: user.profile_pic, name:user.name})
      .then(res => {
        leaveEvent({id:user.id, photoURL: user.profile_pic, name:user.name}, event);
      })
    }
    return (
      <div className='segmentevent'>
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={`/assets/${event.category}.jpg`} fluid style={eventImageStyle}/>
        
                <Segment basic style={eventImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <header className='title'>
                        <Header 
                          content={event.title}
                          style={{ color: 'white'}}
                        /></header>
                        <p>{event.date}</p>
                        <p className='login'>
                          Hosted by <strong className='register'>{event.hostedBy}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
              <div className='manageevent'>
              <Segment attached="bottom">
                {user.id !== event.userId ? <><Button onClick={leave} color="black">Cancel My Place</Button>
                <Button onClick={join} color="inverted green">JOIN THIS EVENT</Button></> : null}
                </Segment>
                </div>
                <div className='manageevent'>
                <Segment attached="bottom">
                {user.id === event.userId ? <Button as={Link} to={`/manage/${event.id}`} color="inverted orange" floated="right">
                  Manage Event
                </Button> : null }
                </Segment>
                </div>
              
            </Segment.Group>
            </div>
    )
}

const mapStateToProps = reduxState => reduxState.users;

export default connect(mapStateToProps, {joinEvent, leaveEvent})(EventDetailedHeader);
