const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const ShinySporkSchema = new Schema({
  a_string: { type: String, required: true },
  a_date: { type: Date, required: true }
});

// compile model from schema
const ShinySporkModel = mongoose.model('ShinySporkModel', ShinySporkSchema);

module.exports = ShinySporkModel;