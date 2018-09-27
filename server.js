const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('ds115963.mlab.com:15963/questlinedb');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const app = express();
const port = process.env.PORT || 5000;

//TODO - remove later
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Test!' });
});

//return copyright info
app.get('/api/landing/copyright', (req, res) => {


  //mongoose MongoDB Testing!
  var testboy = mongoose.Model('questline_user');
  var newBoy = new testboy();
  newBoy.userID.push({"userID":"billy"});

  newBoy.save(function (err){
    if (!err) console.log("We got a connection and Billy is there!");
  });

  res.send({ express: 'Copyright Steve Sefchick 2018 heck yeah' });
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));