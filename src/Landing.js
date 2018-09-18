import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



export class Landing extends Component {
  


  constructor(props)
  {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  //qlBody displays the several body areas of the main landing screen
  qlBody1()
  {
    return(
      <div className="qlLandingBody1">
      Questline is a productivity tracker that progresses when you do. 
      </div>
 
    )
  }

  qlBody2()
  {
    return(
      <div className="qlLandingBody2">
      questline can save your dang life?
      </div>

    )
  }

  qlBody3()
  {
    return(
      <div className="qlLandingBody3">
      aw beans
      </div>

    )
  }

  //qlHeader returns the header for the main screen
  qlHeader()
  {
    return(
      <div className="qlLandingHeader">
          Questline
        </div>
    )
  }

  //qlFooter calls the footer
  qlFooter()
  {
    return(
      <div className="qlLandingFooter">
          This is the footer. Copyrights and crap go here.
        </div>
    )
  }

  /*
  handleButtonClick()
  {
    this.props.updateState("registration");
  }
*/

handleStateChange(e)
{
  this.props.clickState('login');
}

  drawButton()
  {
    return(
      <button onClick={this.handleStateChange}>
      Login!
      </button>

    )
  }
  
  render() {

    return (

      //TODO: Add <head> with info here

      //TODO: Add Logo and increase size to appropriate-ness
      //header
      <div>

          {this.qlHeader()}
        
          {this.qlBody1()}

          {this.qlBody2()}

          {this.qlBody3()}

          {this.qlFooter()}

          {this.drawButton()}

      </div>

    );
  }
}


export default Landing;