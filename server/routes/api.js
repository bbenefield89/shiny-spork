var express = require('express');
var router = express.Router();

// database connection
const db = require('../database/connection');

// schemas
const NoteSchema = require('../database/schemas/noteschema');

// models
const NewNote = require('../database/models/notemodel');

// return all of a users notes
router.get('/all', function(req, res, next) {
  const user_name = req.session.username;
  const _id = 0;
  
  // returns all the `notes` from `user_name` and excludes the `_id`
  NoteSchema.find({ user_name }, { _id })
    .then(data => res.json(data));
});

// route to create a new note
router.get('/new', function (req, res, next) {
  res.send('new');
});

// return a specific note
router.get('/:noteid', function (req, res, next) {
  NoteSchema.find({ _id: req.params.noteid })
    .then(data => {
      res.json(data);
    });
})

module.exports = router;
