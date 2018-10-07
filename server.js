const express = require('express');
const mongoose = require('mongoose');
const mongoUserURL='mongo://ds115963.mlab.com:15963/questlinedb';
//load .env
require('dotenv').config();

mongoose.connect(mongoUserURL,
  {username: process.env.mongouser,password:process.env.mongopassword},
  function(err)
{
  if(err){
    console.log('Error connecting to: '+ mongoUserURL)
  }
  else{
    console.log('Connected to: '+ mongoUserURL)
  }
});



mongoose.Promise = global.Promise;
const db = mongoose.connection;

const Schema = mongoose.Schema;

const QuestlineUser = new Schema({
  "userID":Number,
  "UserName":String
});
const userModel = mongoose.model('UserSchema',QuestlineUser);


const app = express();
const port = process.env.PORT || 5000;

//TODO - remove later
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Test!' });
});

//return copyright info
app.get('/api/landing/copyright', (req, res) => {


  //mongoose MongoDB Testing!



  newBoy.userID.push({"userID":"billy"});

  newBoy.save(function (err){
    if (!err) console.log("We got a connection and Billy is there!");
  });

  res.send({ express: 'Copyright Steve Sefchick 2018 heck yeah' });
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));