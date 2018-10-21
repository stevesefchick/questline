
//import react
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom'
import {withAuth} from '@okta/okta-react';





//export default withAuth(class Login extends Component {
export class Login extends Component {
  
//okta test
/*
constructor(props) {
  super(props);
  this.state = { authenticated: null };
  this.checkAuthentication = this.checkAuthentication.bind(this);
  this.checkAuthentication();
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
}

async checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    this.setState({ authenticated });
  }
}

componentDidUpdate() {
  this.checkAuthentication();
}

async login() {
  // Redirect to '/' after login
  this.props.login('/');
}

async logout() {
  // Redirect to '/' after logout
  this.props.logout('/');
}

render() {
  if (this.state.authenticated === null) return null;
  return this.state.authenticated ?
    <button onClick={this.logout}>Logout</button> :
    <button onClick={this.login}>Login</button>;
}
*/
//end okta test

/*
  constructor(props)
  {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

handleStateChange(e)
{
  this.props.clickState('main');
}

  drawButton()
  {
    return(
      <button onClick={this.handleStateChange}>
      Login!
      </button>

    )
  }
  */



 // non okta test uncomment this if stuff doesn't work.
  
  render() {

    return (

      //TODO: Add <head> with info here

      //TODO: Add Logo and increase size to appropriate-ness
      //header
      <div>

        <h1>login</h1>

      </div>

    );
  }
  
}
//);

//uncomment this too
export default Login;