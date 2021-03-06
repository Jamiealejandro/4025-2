import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/menu'

const MainRouter = () => {
 return (<div>
   <Menu/>
 <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Users" component={Users}/>
      <Route path="/Signup" component={Signup}/>
      <Route path="/Signin" component={Signin}/>
      <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
      <Route path="/user/:userId" component={Profile}/>
 </Switch>
 </div>)
}

export default MainRouter
