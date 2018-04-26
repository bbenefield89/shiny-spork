const User = require('./schema.js');

const brandon = new User({
  a_string: 'Brandon',
  a_date: Date.now()
});

brandon.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully');
});

module.exports = brandon;