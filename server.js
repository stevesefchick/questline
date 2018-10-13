//load .env
require('dotenv').config();

//auth/okta testing
import { Security, ImplicitCallback} from '@okta/okta-react';

const config = {
  issuer: process.env.ORGURL +  '/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.CLIENTID
}
//end okta testing

const express = require('express');
const mongoose = require('mongoose');
const mongoUserURL='mongodb://'+process.env.MONGOUSER+':'+process.env.MONGOPASS+'@'+process.env.MONGOURL;

mongoose.connect(mongoUserURL,
  {username: process.env.MONGOUSER,
  password: process.env.MONGOPASS},
  function(err)
{
  if(err){
    console.log('Error connecting to MongoDB')
  }
  else{
    console.log('Connected to MongoDB!')
  }
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;


//create the schema for User
const Schema = mongoose.Schema;
const userModel = require('./models/QuestlineUser');

const app = express();
const port = process.env.PORT || 5000;


//TODO - remove later
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Test!' });
});




//return copyright info
app.get('/api/landing/copyright', (req, res) => {


  //mongoose MongoDB Testing!
//run a query against the db
//const query = userModel.find({"userName":"Biff"});
//query.select("userName");
//console.log(query); //ugly result but it works


//insert a record into the DB
const newBoy = new userModel;
newBoy.userName = 'heckboy';
newBoy.password = 'awheck69';
newBoy.accountStatus = "Active";
newBoy.userInfo.firstName = "heck";
newBoy.userInfo.lastName = "boy";
newBoy.userInfo.emailAddress = "heck@boy.com";
newBoy.lastUpdated = new Date;


//const newBoy = new userModel({"userID":123,"userName":"Bobby"});
newBoy.save(function(err){
  if (err) return console.log(err);
  console.log('hey it worked!?');
}
);
console.log('username to add:' + newBoy.userName);
console.log('userID to add:' + newBoy.userID);


  res.send({ express: 'Copyright Steve Sefchick 2018 heck yeah' });
  
});



app.listen(port, () => console.log(`Listening on port ${port}`));