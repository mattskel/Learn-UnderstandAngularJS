//// MODULE
//var angularApp = angular.module('angularApp', []);
//
//// CONTROLLERS
//angularApp.controller('mainController', ['$scope', function ($scope) {
//    
//}]);

var myApp = angular.module('myApp', []);
myApp.controller('mainController',function() {
    
});

var Person = function (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(person) {
    var john = new Person('John','Doe');
    console.log(person);
}

var john = new Person('John','Doe');

logPerson(john);