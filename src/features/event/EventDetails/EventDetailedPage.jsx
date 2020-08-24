import React, { useEffect, useState } from 'react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDeatiledSidebar from './EventDeatiledSidebar'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import axios from 'axios'

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {};

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0]
    }
    console.log("UPDATED", event);
    return {
        event
    }
}


const EventDetailedPage = (props) => {
    const [event, setEvent] = useState({});
    console.log(props.events)
    useEffect(() => {
        setEvent(props.events.filter(event => event.id === props.match.params.id)[0]);
    }, [])
    // const [event, setEvent] = useState({});
    
    // useEffect(() => {
    //     const eventId = props.match.params.id
    //     console.log(eventId);
    //     axios.get(`/api/events/${eventId}`)
    //     .then(res => {
    //         setEvent(res.data);
    //     })
    // }, [])

    return (
        <div className='grid'>
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
        </div>
    )
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(EventDetailedPage);