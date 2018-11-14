import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';



export class Registration extends Component {
  
    //constructor
    constructor(){
      super()
      this.state = {
        username:''
      }

    }


    //registration header
    regHeader()
    {
      return(
        <div className="qlRegistrationHeader">
        Registration
      </div>
      )
    }


    regForm()
    {
      return(
        <div className="qlRegistrationBody">
          <br />
          <br />

        <form onSubmit={this.submitForm}>

          <label>
            Username:<br/>
            <input type="text" name="username" />
          </label>
          <br />
          <br />

          <label>
            Password:<br/>
            <input type="text" name="password" />
          </label>
          <br />
          <br />

          <label>
            Email Address:<br/>
            <input type="text" name="emailaddress" />
          </label>
          <br />
          <br />
          <br />

          <input type="submit" value="Submit" />

        </form>
        
      </div>
      )
    }



    submitForm(event) {
      
      //prevent empty fields
      event.preventDefault();
      //get data
      const data = new FormData(event.target);




      console.log(data.get('username'));
      //send api call to server
      axios.post('/api/registration/new', {
        username: 'heck'
      })
      .then (function (response) {
        console.log('heck it worked!');
      })
      .catch (function (error) {
        console.log(error);
      });



      //test, appears that this works!
      /*
      axios.get('/api/hello')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */


        console.log('heck');
    }

  render() {

    return (
      <div>
        {this.regHeader()}
        {this.regForm()}
      </div>
    );
  }
}


export default Registration;