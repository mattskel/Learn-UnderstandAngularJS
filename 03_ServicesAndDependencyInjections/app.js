// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', function ($scope, $log, $filter, $resource) {
//    console.log($log);
//    $log.log('Hello');
//    $log.info('This is info');
//    $log.warn('Warning');
//    $log.debug('Debug info');
//    $log.error('ERROR');
//    $scope.name = 'John';
//    $scope.formattedname = $filter('uppercase')($scope.name);
//    
//    $log.info($scope.name);
//    $log.info($scope.formattedname);
    
    console.log($resource);
});

