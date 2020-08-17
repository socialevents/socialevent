import React, { Component } from "react";
import { Grid, Button, Segment, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editView: false,
    };
  }

  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
  };

  //need endpoint to save changes jordan - 8/17

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
          <Grid.Column width={3}>
            <Form>
              {/* profile image */}
              <h1>AboutMe</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label>Hobbies</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Music Choice</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Movie</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Foods</label>
                  </Form.Field>
                  <Form.Field>
                    <label>Allergies</label>
                  </Form.Field>
                  <Button type="edit" onClick={this.toggleEditView}>
                    Edit
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>Hobbies</label>
                    <input placeholder="What do you like to do for fun?" />
                  </Form.Field>
                  <Form.Field>
                    <label>Music Choice</label>
                    <input placeholder="What do you like to listen to?" />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Movie</label>
                    <input placeholder="optional" />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Foods</label>
                    <input placeholder="optional" />
                  </Form.Field>
                  <Form.Field>
                    <label>Allergies</label>
                    <input placeholder="Tell us what you are allergic to" />
                  </Form.Field>
                  <Button type="button" onClick={this.toggleEditView}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={this.toggleEditView}>
                    Save Changes
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

export default AboutMe;
