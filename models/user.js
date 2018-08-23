const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  phone_num: {
    type: String,
  },
  pwd: {
    type: String,
  },
  province:{
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String
  },
  recommender: {
    type: String,
  },
});


const User = mongoose.model('user', userSchema);

module.exports = User;
