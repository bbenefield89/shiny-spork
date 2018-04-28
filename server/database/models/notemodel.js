const mongoose = require('mongoose');
const NoteSchema = require('../schemas/noteschema');

// compile model from schema
const NoteModel = mongoose.model('NoteModel', NoteSchema);

module.exports = NoteModel;