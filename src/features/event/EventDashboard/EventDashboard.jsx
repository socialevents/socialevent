import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventsList/EventList'
import { connect } from 'react-redux'
import { deleteEvent } from '../eventActions'
import axios from 'axios';
import {Link} from 'react-router-dom';
import AboutSite from '../../nav/AboutSite/AboutSite'

const mapState = (state) => ({
  events: state.events
});

const actions = {
  deleteEvent
};

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
        
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

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
                <div class="ui  vertical footer segment">
              <div class="ui container">
                     copyright 2020. All Rights Reserved
                <header className="login-header">
                    <div className="host"><Link to='/AboutSite'><b>About Events</b></Link></div>
                </header>
   
                   </div>
            </div> 
            </Grid>


        )
    }
  }

export default connect(mapState, actions)(EventDashboard);
