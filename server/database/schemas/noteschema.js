const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const NoteSchema = new Schema({
  user_id     : { type: String, required: true },
  user_name   : { type: String, required: true },
  note_title  : { type: Schema.Types.Mixed, required: true },
  note_content: { type: Schema.Types.Mixed, required: false },
  date_created: { type: Date, required: true },
});

module.exports = NoteSchema;