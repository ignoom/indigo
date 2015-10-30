'use strict';

angular.module('indigo.clients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'clients/register.html',
    controller: 'clientsCtrl'
  });
}])
.controller('clientsCtrl', [function() {

}]);
