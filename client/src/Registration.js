import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



export class Registration extends Component {
  

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

      <div>

        <h1>reg</h1>
        <p>Hey Welcome to questline</p>
        <p>username</p>
        <p>Email Address</p>
        <p>Password</p>

      </div>

    );
  }
}


export default Registration;