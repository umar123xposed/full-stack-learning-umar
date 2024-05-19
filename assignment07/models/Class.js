const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Class', classSchema);
