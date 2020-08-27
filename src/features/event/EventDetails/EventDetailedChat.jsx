import React, {useState} from 'react'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'
import {sendMessage} from '../eventActions';
import {connect} from 'react-redux';
import axios from 'axios';

const EventDetailedChat = (props) => {
    const {event, user, sendMessage} = props;
    const [text, setText] = useState('');

    const reply = () => {
      axios.post(`/api/events/reply/${event.id}`, {userId:user.id, photoURL:user.profile_pic, name:user.name, text})
      .then(res => {
        sendMessage({userId:user.id, photoURL:user.profile_pic, name:user.name, text}, event);
        setText('');
      })
    }
    
    const mappedMessages = event.messages ? event.messages.map(message => <Comment>
      <Comment.Avatar src={message.photoURL} />
      <Comment.Content>
        <Comment.Author as="a">{message.name}</Comment.Author>
        {/* <Comment.Metadata> */}
          {/* <div>5 days ago</div> */}
        {/* </Comment.Metadata> */}
        <Comment.Text>{message.text}</Comment.Text>
        <Comment.Actions>
          {/* <Comment.Action>Reply</Comment.Action> */}
        </Comment.Actions>
      </Comment.Content>
    </Comment>) : null;
    return (
            <div className='segment'>
              <Segment
                textAlign="center"
                attached="top"
                inverted
                color="black"
                style={{ border: 'none' }}
              >
                <Header><div className='title'>Chat about this event</div></Header>
              </Segment>
        
              <Segment attached>
                <Comment.Group>
                  {/* <Comment>
                    <Comment.Avatar src="/assets/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>DRINKSS!!!!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
        
                  <Comment>
                    <Comment.Avatar src="/assets/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">Jordan</Comment.Author>
                      <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>
                          I need some drinks!!
                        </p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar src="/assets/user.png" />
                        <Comment.Content>
                          <Comment.Author as="a">Tess</Comment.Author>
                          <Comment.Metadata>
                            <div>Just now</div>
                          </Comment.Metadata>
                          <Comment.Text>Jordan you are always so right :</Comment.Text>
                          <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>
        
                  <Comment>
                    <Comment.Avatar src="/assets/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">Natalie</Comment.Author>
                      <Comment.Metadata>
                        <div>5 days ago</div>
                      </Comment.Metadata>
                      <Comment.Text>This is awesome. Thanks so much</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment> */}
                  {mappedMessages}
        
                  <Form reply>
                    <Form.TextArea value={text} onChange={(e) => setText(e.target.value)} />
                    <Button
                      onClick={() => reply()}
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                  </Form>
                </Comment.Group>
              </Segment>
            </div>
    )
}

const mapStateToProps = reduxState => reduxState.users;

export default connect(mapStateToProps, {sendMessage})(EventDetailedChat);
