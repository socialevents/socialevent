// ON THE RIGHT WE HAVE THE AMOUNT OF PEOPLE GOING TO THE EVENT

//DISPLAY ALL INFORMATION ABOUT THE EVENT
//SHOW MAP TO LOCATION

//JOIN BUTTON TO JOIN THE EVENT

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class Event extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Left Column</h2>
               </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Right Column</h2>
               </Grid.Column>
            </Grid>
        )
    }
}

export default Event;