myApp.controller('dashboardController', function($scope, $location, usersFactory, pollsFactory){
  if(usersFactory.userstatus === false){
    $location.url('/');
  } else {
    console.log("Good to go!");
    $scope.success;
    $scope.user = usersFactory.user
    $scope.polls = [];

    var index = function(){
      if(pollsFactory.success.length > 0){
        $scope.success = pollsFactory.success.pop().success
      }
      pollsFactory.index(function(data){
        console.log("Polls?", data);
        $scope.polls = data;
      });
    }
    index();
  }

  $scope.delete = function(id){
    pollsFactory.delete(id)
    index()
  }

});
