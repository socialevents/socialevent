import React, { Component } from "react";
import { Grid, Button, Segment, Form, TextArea } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {getUser} from '../../../redux/authReducer';
import {connect} from 'react-redux';
import axios from 'axios';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editView: false,
      description: ''
    };
  }

  componentDidMount = () => {
    this.setState({
      description: this.props.user.description
    })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.user !== this.props.user) {
      this.setState({
        description: this.props.user.description
      })
    }
  }

  handleSaveChanges = () => {
    const {description} = this.state;
    console.log(this.state.id);
    axios.put(`/api/users/${this.props.user.id}`, {description})
      .then((res) => this.props.getUser(res.data))
      .catch(err => console.log(err));
      
      this.toggleEditView();

  }

  toggleEditView = () => {
    this.setState({ editView: !this.state.editView });
  };

  

  render() {
    const {description} = this.props.user;
    return (
      <div className='aboutseg'>
        <Segment>
          
            <Form>
              {/* profile image */}
              <h1 className='basicinfo'>About Me</h1>
              {this.state.editView === false ? (
                <div>
                  <Form.Field>
                    <label >{description}</label>
                  </Form.Field>
                  <Button type="edit"  color='inverted green' onClick={this.toggleEditView}>
                    Edit
                  </Button>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label className='basicdetails'>Description</label>
                    <TextArea
                    value={this.state.description}
                    onChange={(e) => this.setState({description: e.target.value})}
                     placeholder='Hobbies, allergies, hometown, interesting facts about yourself, etc...'></TextArea>
                  </Form.Field>
                  <Button type="button" color='red' onClick={this.toggleEditView}>
                    Cancel
                  </Button>
                  <Button type="button" color='inverted green' onClick={this.handleSaveChanges}>
                    Save Changes
                  </Button>
                </div>
              )}
            </Form>
          
        </Segment>
        </div>
       
      
    );
  }
}
const mapStateToProps = reduxState => reduxState.users;
export default connect(mapStateToProps, {getUser})(AboutPage);