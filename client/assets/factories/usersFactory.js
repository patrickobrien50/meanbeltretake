myApp.factory('usersFactory', function($http){
  var factory = {};
  factory.user = {};
  factory.userstatus = false;
  factory.login = function(name, callback){
    $http.post('/user', name).then(function(returned_data){
      console.log(returned_data);
      if(returned_data.data.name === "ValidationError"){
        callback(returned_data.data)
      } else {
        factory.user = returned_data.data
        factory.userstatus = true;
        if(typeof(callback) == 'function'){
          callback({success: true});
        }
      }
    });
  }

  return factory;
});
