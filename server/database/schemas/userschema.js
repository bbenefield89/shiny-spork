const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const UserSchema = new Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true }
});

// compile model from schema
const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;