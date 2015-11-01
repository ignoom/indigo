'use strict';

angular.module('indigo.clients', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'clients/register.html',
    controller: 'clientsCtrl'
  });
}])
.controller('clientsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.register = function(client){
    console.log("Registering client", client );
    // TODO while trying to register a client show a spinner or something in here
    $http.post('http://localhost:1337/clients/local/register', client)
      .success($scope.registerSuccess)
      .error($scope.registerError);
  };

  $scope.registerSuccess = function(data, status, headers, config){
    console.log("Data",data);
    console.log("Status", status);
    $scope.resetForm($scope.clientsRegister);
  };

  $scope.registerError = function(data, status, headers, config){
    console.log("error", data);
    console.log("status", status);
    // TODO display some kind of error in here
  };

  $scope.resetForm = function(form){
    if(form){
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.client = {};
  }
}]);
