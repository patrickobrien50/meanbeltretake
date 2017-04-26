myApp.factory('pollsFactory', function($http){
  var factory = {};
  factory.success = [];





  factory.index = function(callback){
    $http.get('/polls').then(function(returned_data){
      callback(returned_data.data)
    })
  }



  factory.create = function(newPoll, callback){
    $http.post('/polls', newPoll).then(function(returned_data){
      console.log("Im back from server side");
      if(typeof(callback) == 'function'){
        if(returned_data.data.success) {
          factory.success.push(returned_data.data)
        }
        callback(returned_data.data)
      }
    });
  }

  factory.show = function(id, callback){
    $http.get('/poll/' + id).then(function(returned_data){
      callback(returned_data)
    })
  }

  factory.vote = function(poll, option, callback){
    var pollOption = {poll, option}
    $http.post('/poll/vote', pollOption).then(function(returned_data){
      if(returned_data.data.success){
        factory.success.push(returned_data.data)
      }
      callback(returned_data)

    });
  }


  factory.delete = function(id){
    $http.delete('/polls/'+ id)
  }


  return factory;
})
