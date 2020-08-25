
import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

 const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
            <Link to='/login'>
            <Button 
             
             basic inverted content="Login" />
            </Link>

            <Link to='/register'>
            <Button
              basic
              inverted
              content="Register"
              
              />
              </Link>
          </Menu.Item>
    )
}

export default SignedOutMenu