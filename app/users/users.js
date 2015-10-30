'use strict';

angular.module('indigo.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/login', {
    		templateUrl: 'users/login.html',
    		controller: 'UsersCtrl'
  }).
  		when('/uregister', {
    		templateUrl: 'users/register.html',
   			controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', [function() {

}]);
