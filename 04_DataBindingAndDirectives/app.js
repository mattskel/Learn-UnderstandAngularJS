// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
  $scope.handle = '';
  
  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
    
  };
  
  $scope.characters = 5;
//  $scope.rules = [
//    {rulename: "Must be 5 characters"},
//    {rulename: "Must not be used elsewhere"},
//    {rulename: "Must be cool"}
//  ];
  
  $http.get('api.php')
    .success(function (result) {
      $scope.rules = result;
      console.log(result);
    })
    .error(function (data, status) {
      console.log(data);
    })
}]);



