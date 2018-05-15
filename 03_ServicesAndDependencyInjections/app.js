// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function ($scope) {
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    console.log($scope);
});
