var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  user_name: {type: String, required: true, minlength: 3},
  created_at : {type: Date, default: Date.now}
})

var User = mongoose.model('User', UserSchema);
