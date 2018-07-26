// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
})

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$location', '$log', function ($scope, $location, $log) {
//  $log.info($location.path());
    $scope.name = 'Main';
}]);

angularApp.controller('secondController', ['$scope', '$location', '$log', function ($scope, $location, $log) {
  $scope.name = 'Second';
}]);



