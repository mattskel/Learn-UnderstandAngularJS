// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope','$log',function ($scope, $log) {
    $log.info($scope);
}]);
// This can be minified and still used
// It does mean we can't play around with the order we pass the parameters

