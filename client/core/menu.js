import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Menu
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/Users">
        <Button style={isActive(history, "/Users")}>Users</Button>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/Signup">
            <Button style={isActive(history, "/Signup")}>Sign up
            </Button>
          </Link>
          <Link to="/Signin">
            <Button style={isActive(history, "/Signin")}>Sign in
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
))

export default Menu
