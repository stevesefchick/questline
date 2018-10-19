
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







export class Login extends Component {
  

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


export default Login;