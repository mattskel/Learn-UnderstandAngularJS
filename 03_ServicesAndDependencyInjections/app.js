// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function ($scope) {
});

var searchPeople = function(firstName, height, age) {
    return 'Jane Doe';
}

console.log(searchPeople(1,2,3));
