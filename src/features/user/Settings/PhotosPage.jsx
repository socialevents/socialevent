import React, { Component } from "react";
import { Container, Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PhotosPage extends Component {
  render() {
    return (
      
      <Segment>
        <h1>My Photos</h1>
        <Button type="edit" onClick={this.toggleEditView}>Upload photos</Button>
      </Segment>
      
    );
  }
}

export default PhotosPage;