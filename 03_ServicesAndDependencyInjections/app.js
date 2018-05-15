//// MODULE
//var angularApp = angular.module('angularApp', []);
//
//// CONTROLLERS
//angularApp.controller('mainController', ['$scope', function ($scope) {
//    
//}]);

var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson (person) {
    console.log(person);
}

var john = new Person('John','Doe');
logPerson(john);

