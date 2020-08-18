import React, { Component } from "react";
import { Container, Button, Form, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editView: false,
    };
  }

  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
  };

  //need endpoint to save changes Jordan-8/17

  render() {
    return (
      <Grid>
        <Grid.Column width={3}>
          <Segment>
            <h2>Settings</h2>
            <Link to="/settings/basicinfo">
              <div>Basic Info</div>
            </Link>

            <Link to="/settings/aboutme">
              <div>About Me</div>
            </Link>

            <Link to="/settings/myphotos">
              <div>My Photos</div>
            </Link>
          </Segment>
        </Grid.Column>
        <Segment>
          <Grid.Column width={10}>
            <Form>
              <h1>Basic Info</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label>Name:</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Gender:</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Birthday:</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Hometown:</label>
                  </Form.Field>
                  <Button onClick={this.toggleEditView} type="button">
                    Edit
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>Name</label>
                    <input placeholder="Full name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Gender</label>
                    <input placeholder="optional" />
                  </Form.Field>
                  <Form.Field>
                    <label>Birthday</label>
                    <input placeholder="Date of birth" />
                  </Form.Field>
                  <Form.Field>
                    <label>Hometown</label>
                    <input placeholder="Where are you from?" />
                  </Form.Field>
                  <Button onClick={this.toggleEditView} type="button">
                    Save Changes
                  </Button>
                  <Button onClick={this.toggleEditView} type="button">
                    Cancel
                  </Button>
                </div>
              )}
            </Form>
          </Grid.Column>
        </Segment>
      </Grid>
    );
  }
}

export default BasicInfo;
