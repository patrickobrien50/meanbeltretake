var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "partials/login.html",
      controller: 'loginController'
    })
    .when('/dashboard', {
      templateUrl: "partials/dashboard.html",
      controller: 'dashboardController'
    })
    .when('/new_poll', {
      templateUrl: 'partials/new_poll.html',
      controller: 'newPollController'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/show_poll.html',
      controller: 'showPollController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
