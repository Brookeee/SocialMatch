var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rateSchema = new Schema({
  ratingScore: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

var Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;
