import React from 'react'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'

const EventDetailedChat = () => {
    return (
            <div>
              <Segment
                textAlign="center"
                attached="top"
                inverted
                color="teal"
                style={{ border: 'none' }}
              >
                <Header>Chat about this event</Header>
              </Segment>
        
              <Segment attached>
                <Comment.Group>
                  <Comment>
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
                          <Comment.Text>Jordan you are always so right :)</Comment.Text>
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
                  </Comment>
        
                  <Form reply>
                    <Form.TextArea />
                    <Button
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

export default EventDetailedChat
