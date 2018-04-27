const NoteSchema = require('../schemas/noteschema');

const NoteModel = new NoteSchema({
  user_id: 'asd',
  user_name: 'asd',
  note_title: 'asd',
  note_content: 'asd',
  date_created: Date.now()
});

module.exports = NoteModel;