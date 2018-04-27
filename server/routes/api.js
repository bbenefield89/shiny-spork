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
  NoteSchema.find()
    .then(data => res.json(data));
});

router.get('/new', function (req, res, next) {
  res.json(req.session.id);
});

// return a specific note
router.get('/:noteid', function (req, res, next) {
  NoteSchema.find({ _id: req.params.noteid })
    .then(data => {
      res.json(data);
    });
})

module.exports = router;
