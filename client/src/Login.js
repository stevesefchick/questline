
//import react
import React from 'react';
import {Redirect} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import isAuthenticated from './Auth/isAuthenticated';
import Lock from './Auth/Lock';

//import Auth from './Auth.js';

//dont need this yet
/*import {
  BrowserRouter as Router,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom'
*/

const Login = (props) => (
  isAuthenticated() ? (
    <Redirect to={{
      pathname: '/private',
      state: { from: props.location }
    }} />
  ) : (
    <Lock location={props.location} />
  )
)

/*
export class Login extends Component {
  

  render() {

    //const auth = new Auth();
    //auth.login();

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
*/

//uncomment this too
export default Login;