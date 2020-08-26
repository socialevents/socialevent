import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

 class EventListAttendee extends Component {
    render() {
        const{attendee, name} =this.props;
        return (
            <List.Item>
                <span class='ui icon' data-tooltip={name}><Image as ='a' as={Link} to={`/user/${attendee.id}`} size='mini' circular src = {attendee.photoURL}/></span>
                
            </List.Item>
        )
    }
}

export default EventListAttendee;