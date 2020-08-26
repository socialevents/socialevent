import React from 'react'
import { Segment, Label, Item } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const EventDeatiledSidebar = ({attendees}) => {
    const isHost = false;
    return (
            <div>
              <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                
              >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
              </Segment>
              <Segment attached>
                <Item.Group divided>
                {attendees && attendees.map((attendee) => (
                    
                    <Item key={attendee.id} style={{ position: 'relative' }} as={Link} to={`/user/${attendee.id}`}>
                    
                    {isHost &&
                    <Label
                      style={{ position: 'absolute' }}
                      color='orange'
                      ribbon='right'
                    >
                      Host
                    </Label>}
                    <Item.Image size='tiny' circular src={attendee.photoURL} />
                    <Item.Content verticalAlign='middle'>
                      <Item.Header as='h3'>{attendee.name}</Item.Header>
                    </Item.Content>
                  </Item>
                  
                ))}
                  
                </Item.Group>
              </Segment>
            </div>
    )
}

export default EventDeatiledSidebar
