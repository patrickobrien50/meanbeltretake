var mongoose = require('mongoose')

var PollSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength: 8},

  option1: {type: String, required: true, minlength: 3},

  option2: {type: String, required: true, minlength: 3},

  option3: {type: String, required: true, minlength: 3},

  option4: {type: String, required: true, minlength: 3},

  vote1: {type: Number, default: 0},
  vote2: {type: Number, default: 0},
  vote3: {type: Number, default: 0},
  vote4: {type: Number, default: 0},
  creator: {type: String, required: true},
  created_at: {type: Date, default: Date.now}

})

var Poll = mongoose.model('Poll', PollSchema)
