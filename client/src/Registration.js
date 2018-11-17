import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightgreen from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});


const theme = createMuiTheme({
  palette: {
    primary: {
      main:  blue[900],
    },
    secondary: {
      main: lightgreen[600],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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

          <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="secondary">
          
          Hai
          </Button>
          </MuiThemeProvider>

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
      <React.Fragment>
        <CssBaseline />
      <div>
        {this.regHeader()}
        {this.regForm()}
      </div>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Registration);