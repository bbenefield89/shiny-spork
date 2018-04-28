const UserSchema = require('../schemas/userschema');

const UserModel = new UserSchema({
  user_name: 'demo',
  password: 'password'
});

module.exports = UserModel;