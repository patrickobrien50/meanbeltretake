myApp.controller('newPollController', function($scope, $location, usersFactory, pollsFactory){
  if( usersFactory.userstatus === false){
    $location.url('/');
  } else {
    console.log("Good to go @ adding poll");
    $scope.error = false
    $scope.user = usersFactory.user
    $scope.newPoll = {};

    $scope.create = function(){
      var newPoll = $scope.newPoll;
      newPoll.creator = $scope.user.user_name
      pollsFactory.create(newPoll, function(data){
        console.log("This is the data", data);
        if(data.name === "ValidationError"){
          $scope.error = true
          $scope.validationErrors = data.errors
        } else {
          $scope.newPoll = {};
          console.log("Redirecting to dashboard");
          $location.url('/dashboard')
        }
      })
    }
  }
})
