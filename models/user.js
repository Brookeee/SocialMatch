var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
  },

  email: {
    type: String,
    unique: true,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model('User', userSchema);

module.exports = User;
