myApp.controller('loginController', function($scope, usersFactory, $location){
  $scope.error = false;
  usersFactory.userstatus = false;

  $scope.login = function(){
    usersFactory.login($scope.newUser, function(data){
      if (data.name === "ValidationError"){
        $scope.error = true
        $scope.validationErrors = data.errors;
      } else {
        $location.url('/dashboard');
      }
    })
  }
})
