const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestlineUserSchema = new Schema({
    userID: {type: Number},
    userName: {type: String},
    dateCreated: {type:Date, default: Date.now}
  });

module.exports = mongoose.model('questline_users', QuestlineUserSchema);