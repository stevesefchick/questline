const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestlineUserSchema = new Schema({
    userName: {type: String},
    password: {type: String},
    dateCreated: {type:Date, default: Date.now},
    lastUpdated: {type:Date, default: Date.now},
    accountStatus: {type:String, enum:["Active","Inactive"] },
    userInfo: {
      firstName: {type: String},
      lastName: {type:String},
      emailAddress: {type:String}
    }

  });

module.exports = mongoose.model('questline_users', QuestlineUserSchema);