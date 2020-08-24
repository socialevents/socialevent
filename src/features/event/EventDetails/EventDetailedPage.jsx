import React, { useEffect, useState } from 'react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDeatiledSidebar from './EventDeatiledSidebar'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import axios from 'axios'

const mapState = (state, ownProps) => {
    // let event = {};

    // if (eventId && state.events.length > 0) {
    //     event = state.events.filter(event => event.id === eventId)[0]
    // }
    // return {
    //     event
    // }
}


const EventDetailedPage = (props) => {
    const [event, setEvent] = useState({});
    
    useEffect(() => {
        const eventId = props.match.params.id
        console.log(eventId);
        axios.get(`/api/events/${eventId}`)
        .then(res => {
            setEvent(res.data);
        })
    }, [])

    return (
        <Grid>
            {event ? <><Grid.Column width={10}>
            <EventDetailedHeader event={event}/>
            <EventDetailedInfo event={event}/>
            <EventDetailedChat event={event}/>
            </Grid.Column>
            <Grid.Column width={6}>
            <EventDeatiledSidebar attendees={event.attendees}/>
            </Grid.Column></> : null}
        </Grid>
    )
}

export default connect(mapState)(EventDetailedPage);