import React, { Component } from "react";
import { Container, Button, Form, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

class BasicPage extends Component {
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
      
       
        <Segment>
          
            <Form>
              <h1>Basic Info</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label>Name: </label>
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
          
        </Segment>
      
    );
  }
}

export default BasicPage;