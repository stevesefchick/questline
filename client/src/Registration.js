import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
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
            <input type="text" id="username" name="username" />
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

          <input type="submit" id="Submit" value="Submit" />

          <Button onClick={this.submitForm} variant="contained"  color="secondary" id="Submit" value="Submit">
          Hai
          </Button>
          </MuiThemeProvider>


        </form>
        
        <br />
        <br />
        <br />
        
        <MuiThemeProvider theme={theme}>

        <FormControl>
          <TextField label="Name" id="regname" variant="outlined" /> <br />
          <TextField label="Password" id="regpassword" variant="outlined" /><br />
          <TextField label="Email Address" id="regemail" variant="outlined" /><br />

          <Button onClick={this.submitForm} variant="contained"  color="secondary" id="Submit" value="Submit">
          Submit
          </Button>
        </FormControl>
        </MuiThemeProvider>

      </div>
      )
    }



    submitForm(event) {
      
      //prevent empty fields
      event.preventDefault();
      //get data
      const data = new FormData(event.target);
      console.log(data.get('username'));
      console.log(data.get('password'));
      console.log(data.get('emailaddress'));


      //send api call to server
      axios.post('/api/registration/new', {
        username: data.get('username'),
        password: data.get('password'),
        emailaddress: data.get('emailaddress'),
      })
      .then (function (response) {
        console.log(response.data);
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