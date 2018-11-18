import React, { Component } from 'react';
import {Landing} from './Landing';
import {Main} from './Main';
import {Registration} from './Registration';
import Login from './Login';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightgreen from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


import {
  BrowserRouter as Router,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom'

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


          return(



            <Router>

              <div className="qlHeader">


            <MuiThemeProvider theme={theme}>
              <AppBar position="static" color="primary">
                <Toolbar>

                <Button color="inherit" href="/landing">Home</Button>
                <Button color="inherit" href="/registration">Register</Button>
                <Button color="inherit" href="/login">Login</Button>
                <Button color="inherit" href="/main">Main</Button>


                </Toolbar>      



              </AppBar>
            </MuiThemeProvider>


              <Route exact path="/" component={landing} />
              <Route path="/landing" component={landing} />
              <Route path="/registration" component={registration} />
              <Route path="/main" component={main} />
              <Route path="/login" component={Login} />
              
              </div>
            </Router>
        );

      }
    
    }
  

  export default withStyles(styles)(PageHandler);