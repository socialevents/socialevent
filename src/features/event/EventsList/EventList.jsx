import React, { Component } from 'react'
import EventListItem from './EventListItem'


 class EventList extends Component {
    render() {
        const {events,  deleteEvent, findEvent} = this.props;

        return (
            <div className="eventlist">
              
                {events.map((event) => (
                    <EventListItem key={event.id} event={event} findEvent={findEvent} deleteEvent={deleteEvent} />
                ))}
                
            </div>
        )
    }
}

export default EventList;