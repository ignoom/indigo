'use strict';

// Declare app level module which depends on views, and components
angular.module('indigo', [
  'ngRoute',
  'indigo.users',
  'indigo.menu',
  'indigo.clients',
  'indigo.version',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
