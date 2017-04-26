var mongoose = require('mongoose')

var Poll = mongoose.model('Poll')
var User = mongoose.model('User')

module.exports = {
  index: function(req, res){
    Poll.find({}, function(err, polls){
      if(err){
        res.json(err)
      } else {
        res.json(polls)
      }
    })
  },

  create: function(req, res){
    var poll = new Poll({
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      creator: req.body.creator
    });
    poll.save(function(err){
      if(err){
        res.json(err)
      } else {
        res.json({success: "Poll created successfuly"})
      }
    });
  },

  show: function(req, res){
    Poll.findOne({_id: req.params.id}, function(err, poll){
      if(err){
        res.json(err)
      } else {
        res.json(poll)
      }
    });
  },

  vote: function(req, res){
    var voteOption = 'vote' + req.body.option
    Poll.findOne({_id: req.body.poll._id}, function(err, poll){
      if(err){
        res.json(err)
      } else {
        poll[voteOption] += 1
        console.log("Voting for", poll[voteOption]);
        poll.save(function(err){
          if(err){
            res.json(err)
          } else {
            res.json({success: "Voted Successfully!"})
          }
        })
      }
    })
  },

  delete: function(req, res){
    Poll.remove({_id: req.params.id}, function(err){
      if(err){
        res.json(err)
      } else {
        res.json({success: "Deleted Poll!"})
      }
    })
  }





}
