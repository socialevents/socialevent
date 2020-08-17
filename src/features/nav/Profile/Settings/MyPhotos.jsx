import React, { Component } from "react";
import { Container, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MyPhotos extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
        <Segment>
        <h2>Settings</h2>
            <Link to='/settings/basicinfo'>
              <div>Basic Info</div>
            </Link>

            <Link to='/settings/aboutme'>
            <div>About Me</div>
            </Link>

            <Link to='/settings/myphotos'>
            <div>My Photos</div>
            </Link>
        </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
      <Segment>
        <h1>My Photos</h1>
        <Button type="edit" onClick={this.toggleEditView}>Upload photos</Button>
      </Segment>
      </Grid.Column>
      </Grid>
    );
  }
}

export default MyPhotos;
