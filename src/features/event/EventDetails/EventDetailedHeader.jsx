import React from 'react'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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

const EventDetailedHeader = ({event}) => {
    return (
      <div className='segment'>
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
        
              <Segment attached="bottom">
                <Button color="black">Cancel My Place</Button>
                <Button color="inverted green">JOIN THIS EVENT</Button>
        
                <Button as={Link} to={`/manage/${event.id}`} color="inverted orange" floated="right">
                  Manage Event
                </Button>
              </Segment>
            </Segment.Group>
            </div>
    )
}

export default EventDetailedHeader
