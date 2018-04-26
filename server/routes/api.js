var express = require('express');
var router = express.Router();

// database connection
const db = require('../database/connection');
/*
** `User` represents `ShinySporkModel` from `schema.js`
** we have access to this because of `module.exports = ShinySporkModel;` inside of `schema.js`
*/
const User = require('../database/schema.js');
/*
** `brandon` var will create a new user
** check `newuser.js` for details
*/
// const brandon = require('../database/newuser.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  User.find()
    .then(data => res.json(data));
});

module.exports = router;
