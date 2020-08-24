import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'

 class EventListItem extends Component {
    render() {
      const {event, deleteEvent} = this.props
        return (
          <div className="segment">
                <Segment.Group>
                  
                   <Segment>
                     <Item.Group>
                       <Item>
                         <Item.Image size="tiny" circular src={event.hostPhotoURL} />
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
                       <EventListAttendee key={attendee.id} attendee={attendee}/>
                     ))}
                       
                     </List>
                   </Segment>
                   <Segment clearing>
                    <span>{event.description}</span>
                    <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                    <Button as={Link} to={`/event/${event.id}`} color="inverted green" floated="right" content="View" />
                   </Segment>
                 </Segment.Group>
                 </div>
        )
    }
}

export default EventListItem;