import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

export class Landing extends Component {
  


  constructor(props)
  {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {response:'',
                  copyrightresponse:''};


  }



  //make api calls upon mount
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

      this.callCopyrightInfo()
      .then(res => this.setState({ copyrightresponse: res.express }))
      .catch(err => console.log(err));
  }

  //call test API - remove later
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //call copyright info API
  callCopyrightInfo = async () => {
    const response = await fetch('/api/landing/copyright');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


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
        {this.state.copyrightresponse}
        </div>
    )
  }

handleStateChange(e)
{
  this.props.clickState('login');
}

  
  render() {

    return (




      //TODO: Add Logo and increase size to appropriate-ness
      //header
      <div>

          {this.qlHeader()}
        
          {this.qlBody1()}

          {this.qlBody2()}

          {this.qlBody3()}

          {this.qlFooter()}

      </div>

    );
  }
}


export default Landing;