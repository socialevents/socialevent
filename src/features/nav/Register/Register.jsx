import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

 class Register extends Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit} error={Boolean(err)}>
            <Form.Input label="Name" name="name" type="text"/>
            <Form.Input label="Gender" name="gender" type="text"/>
            <Form.Input label="Location" name="location" type="text"/>
            <Form.Input label="Email" name="email" type="text"/>
            <Form.Input label="Password" name="password" type="password"/>
            <Form.Input label="Confirm Password" name="confirmPassword" type="password"/>

            {err &&
                <Message header="Error" content={err.message} error/>
            }

            <Button size="huge" type="submit" primary>Sign Up</Button>
        </Form>
        )
    }
}

export default Register;