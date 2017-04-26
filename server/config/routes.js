var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');




module.exports = function(app){

  app.post('/user', function(req, res){
    users.login(req, res);
  });

  app.get('/polls', function(req, res){
    polls.index(req, res)
  });

  app.post('/polls', function(req, res){
    polls.create(req, res)
  });

  app.get('/poll/:id', function(req, res){
    polls.show(req, res)
  });
  app.post('/poll/vote', function(req, res){
    polls.vote(req, res)
  })
  app.delete('/polls/:id', function(req, res){
    polls.delete(req, res)
  })

}
