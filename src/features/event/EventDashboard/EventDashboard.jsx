import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventsList/EventList'
import { connect } from 'react-redux'
import { deleteEvent, getEvents } from '../eventActions'
import axios from 'axios';
import {Link} from 'react-router-dom';


const mapState = (state) => ({
  events: state.events
});

const actions = {
  deleteEvent,
  getEvents
};

 class EventDashboard extends Component {

        


  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }

    render() {
      const {events} = this.props
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
