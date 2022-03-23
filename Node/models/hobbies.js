const mongoose = require('mongoose');
const HobbySchema = new mongoose.Schema({
  name: {type: String, required: true, maxLength: 50},
  description: {type: String, required: true, maxLength: 500},
  date_of_creation: {type: String, required: true},
});

module.exports = mongoose.model('Hobby', HobbySchema);
