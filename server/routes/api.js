var express = require('express');
var router = express.Router();

// database connection
const db = require('../database/connection');

// schemas
const NoteSchema = require('../database/schemas/noteschema');

// models
const NoteModel = require('../database/models/notemodel');

// return all of a users notes
router.get('/all', function(req, res, next) {
  const user_name = req.session.username;
  const _id = 0;
  
  // returns all the `notes` from `user_name` and excludes the `_id`
  NoteModel.find({}, (_, notes) => {
    res.send(notes)
  })
});
// route to create a new note
router.post('/new', function (req, res, next) {
  let newNote = new NoteModel({
    user_id     : '5ae3db07aa1f85c210e57953', // to-do: apply condition to get either 'demo' id or authenticated user's user_id
    user_name   : 'demo', // to-do: apply condition to get either 'demo' or authenticated user's user_name
    note_title  : req.body.note_title,
    note_content: req.body.note_content,
    date_created: Date.now(),
  })
  newNote.save(function(err, dbRes) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(dbRes)
    }
  })
});

// edit/remove note
router.post('/note', function (req, res, next) {
  let { action, data } = req.body
  if ( action === 'save') {
    NoteModel.findByIdAndUpdate(data._id, data, function(err, dbRes) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(dbRes)
      }
    })
  }

  if (action === 'delete') {
    NoteModel.findByIdAndRemove(data._id, function(err, dbRes) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(dbRes)
      }
    })
  }
})

module.exports = router;
