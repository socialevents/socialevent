import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';

 class EventListItem extends Component {

    eventDelete = (id) => {
      axios.delete(`/api/events/${id}`)
      .then(res => {
        this.props.deleteEvent(id);
      })
    }

    render() {
      const {event, user} = this.props
        return (
          <div className="segment">
                <Segment.Group>
                  
                   <Segment>
                     <Item.Group>
                       <Item>
                         <Item.Image size="tiny" circular src={event.hostPhotoURL ? event.hostPhotoURL : '/assets/user.png'} />
                         <Item.Content>
                           <Item.Header as="a"><div className='title'>{event.title}
                           </div></Item.Header>
                           <Item.Description>
                             <div className='login'>
                             Hosted by <a className='host'>{event.hostedBy}</a></div>
                           </Item.Description>
                         </Item.Content>
                       </Item>
                     </Item.Group>
                   </Segment>
                  
                   <Segment>
                     <span>
                       <Icon name="clock" /> {event.date} |
                       <Icon name="marker" /> {event.venue}
                     </span>
                   </Segment>
                   <Segment secondary>
                     <List horizontal>
                     {event.attendees && event.attendees.map((attendee) => (
                       <EventListAttendee key={attendee.id} attendee={attendee} name={attendee.name}/>
                     ))}
                       
                     </List>
                   </Segment>
                   <Segment clearing>
                    <span>{event.description}</span>
                    {user.id === event.userId ? <Button onClick={() => this.eventDelete(event.id)} as="a" color="red" floated="right" content="Delete" /> : null}
                    <Button as={Link} to={`/event/${event.id}`} color="inverted green" floated="right" content="View" />
                   </Segment>
                 </Segment.Group>
                 </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps)(EventListItem);