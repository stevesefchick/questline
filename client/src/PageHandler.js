import React, { Component } from 'react';
import {Landing} from './Landing';
import {Main} from './Main';
import {Registration} from './Registration';
import Login from './Login';
//import {Auth} from './Auth';
//import AuthLogin from '/Auth/Login';
//import AuthLogout from '/Auth/Logout';
//import isAuthenticated from './Auth/isAuthenticated';
//import Private from './Components/Private';

import {
  BrowserRouter as Router,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom'


//require('dotenv').config();


class PageHandler extends Component{
    
      constructor(props)
      {
        super(props);
        //define the state here
        this.state = {page: 'landing'};
        this.updateState = this.updateState.bind(this);
      }
  
      updateState(newState)
      {
        this.setState({page: newState});
        console.log("heck it worked!");
      }

      render(){
        

        const landing = () => (
          <Landing clickState={this.updateState}/>
        );

        const registration = () => (
          <Registration />
        );

        const main = () => (
          <Main />
        );

        /*
        const login = () => (
          <Login />

        );
*/
        //get the current state
        //const currentState = this.state.page;

        //landing page
        //if (currentState === 'landing')
       // {
          return(

            <Router>
              <div className="qlHeader">
              <Link to="/landing">Home</Link>...
              <Link to="/registration">Register</Link>...
              <Link to="/login">Login</Link>...
              <Link to="/main">Main</Link>...
              
              <Route exact path="/" component={landing} />
              <Route path="/landing" component={landing} />
              <Route path="/registration" component={registration} />
              <Route path="/main" component={main} />
              <Route path="/login" component={Login} />
              
              </div>
            </Router>
            //<Landing clickState={this.updateState}/>
        );

       // }
       /*
        //registration page - TBD
        else if (currentState === 'registration')
        {
          return(
            <Registration />
          );
  
        }
        //main (logged in) - TBD
        else if (currentState === 'main')
        {
          return(
            <Main />
          );
  
        }
        //login - TBD
        else if (currentState === 'login')
        {
          return(
            <Login />
          );
  
        }
        */
      }
    
    }
  

  export default PageHandler;