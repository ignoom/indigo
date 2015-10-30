'use strict';

// Declare app level module which depends on views, and components
angular.module('indigo', [
  'ngRoute',
  'indigo.view1',
  'indigo.view2',
  'indigo.users',
  'indigo.clients',
  'indigo.version',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
