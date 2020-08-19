import React, { Component } from "react";
import { Grid, Button, Segment, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AboutPage extends Component {
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
      
        <Segment>
          
            <Form>
              {/* profile image */}
              <h1>About Me</h1>
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
          
        </Segment>
      
    );
  }
}

export default AboutPage;