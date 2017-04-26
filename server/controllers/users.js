var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
  login: function(req, res){
    User.findOne({user_name: req.body.user_name}, function(err, user){
      if(err){
        res.json(err)
      } else {
        if( user === null){
          var newUser = new User({
            user_name: req.body.user_name
          });
          newUser.save(function(err){
            if (err){
              res.json(err)
            } else {
              res.json(newUser)
            }
          });
        } else {
          res.json(user);
        }
      }
    });
  }
}
