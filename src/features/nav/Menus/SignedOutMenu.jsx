
import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

 const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
            <Link to='/login'>
            
            <button class="medium inverted ui button">
                    Login
            </button>
            {/* <Button 
             class='small ui button'
             basic inverted content="Login" /> */}
            </Link>

            <Link to='/register'>
            <button class="medium inverted ui button">
                    Register
            </button>
            {/* <Button
              basic
              inverted
              content="Register"
              
              /> */}
              </Link>
          </Menu.Item>
    )
}

export default SignedOutMenu