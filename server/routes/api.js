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

// return all users
router.get('/', function(req, res, next) {
  User.find()
    .then(data => res.json(data));
});

// return all the notes from a user
router.get('/:userid', function(req, res, next) {
  User.find({ _id: req.params.userid })
    .then(data => {
      res.json(data);
    });
})

// return a specific note
router.get('/:noteid', function (req, res, next) {
  User.find({ _id: req.params.noteid })
    .then(data => {
      res.json(data);
    });
})

module.exports = router;
