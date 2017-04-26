myApp.controller('showPollController', function($scope, $location, $routeParams, $route, pollsFactory, usersFactory){


  if( usersFactory.userstatus === false) {
    $location.url('/')
  } else {
    $scope.success;
    $scope.user = usersFactory.user;
    var show = function(){
      if(pollsFactory.success.length > 0){
        $scope.success = pollsFactory.success.pop().success;
      }
      pollsFactory.show($routeParams.id, function(returned_data){
        if( returned_data.name === "CastError"){
          $location.url('/')
        } else {
          $scope.poll = returned_data.data
        }
      })
    }
    show();


    $scope.vote = function(poll, num){
      pollsFactory.vote(poll, num, function(returned_data){
        console.log(returned_data.data);
      })
    }
  }
})
