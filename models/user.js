const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   phone: {
//     type: string,
//   },
//   pwd: {
//     type: string,
//
//   },
//   recommender: {
//     type: string,
//   },
//   province:{
//     type: string,
//   },
//   city: {
//     type: string,
//   }
//   address: {
//     type: string
//   },
// });

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
  },
  pwd: {
    type: String,

  },

});

const User = mongoose.model('user', userSchema);

module.exports = User;
