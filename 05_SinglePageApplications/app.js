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
    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
})

angularApp.service('nameService', function() {
  var self = this;
  this.name = 'John Doe';
  this.nameLength = function() {
    return self.name.length;
  }
})

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function ($scope, $location, $log, nameService) {
  $scope.name = 'Main';
  $log.log(nameService.name);
  $log.log(nameService.nameLength());
                                         
}]);

angularApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function ($scope, $location, $log, $routeParams) {
  $scope.name = 'Second';
  $scope.num = $routeParams.num || 1;
}]);



