<<<<<<< HEAD
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventsList/EventList'
import { connect } from 'react-redux'
import { deleteEvent } from '../eventActions'
import axios from 'axios';
const mapState = (state) => ({
=======
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions';
import EventList from '../EventsList/EventList';

const mapState = state => ({
>>>>>>> master
  events: state.events
});

const actions = {
  deleteEvent
};

<<<<<<< HEAD
 class EventDashboard extends Component {
   state = {
     events: []
   }

   componentDidMount = () => {
    axios.get('/api/events')
    .then(res => {
      this.setState({
        events: res.data
      })
    })
  }
        
=======
class EventDashboard extends Component {
>>>>>>> master
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

<<<<<<< HEAD
    render() {
      const {events} = this.state
      console.log(events);
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList deleteEvent={this.handleDeleteEvent} events={events}/>
                </Grid.Column>
                <Grid.Column width={6}>
                   
                    
                </Grid.Column>
            </Grid>
        )
    }
=======
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
>>>>>>> master
  }
}

export default connect(mapState, actions)(EventDashboard);
