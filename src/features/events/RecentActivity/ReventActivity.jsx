//This should show the new events and canceled events
//Display on the right side of the EventDashboard **SIMPLE LIST**


import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


class RecentActivity extends Component {
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

export default RecentActivity;