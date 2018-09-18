import React, { Component } from 'react';
import {Landing} from './Landing';
import {Main} from './Main';
import {Registration} from './Registration';
import {Login} from './Login';


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
        
        //get the current state
        const currentState = this.state.page;

        //landing page
        if (currentState === 'landing')
        {
          return(
            <Landing clickState={this.updateState}/>
        );
        }
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
      }
    
    }
  
  export default PageHandler;