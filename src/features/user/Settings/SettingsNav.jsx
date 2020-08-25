import React from 'react'
import { Grid, Header, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom'

const SettingsNav = () => {
    return (
            <Grid.Column width={4}>
              <Menu vertical>

                <Link to='/profile/:id'>
                <Header  icon="user" attached inverted color="grey" content="Profile" />
                </Link>

                <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
              </Menu>
              <Grid.Row />
              <Menu vertical>
                <Header
                  icon="settings"
                  attached
                  inverted
                  color="grey"
                  content="Account"
                />
                <Menu.Item as={NavLink} to='/settings/account'>My Account</Menu.Item>
              </Menu>
            </Grid.Column>
    )
}

export default SettingsNav