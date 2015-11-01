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

.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.register = function(user){
    console.log("Registering user", user );
    // TODO while trying to register a client show a spinner or something in here
    $http.post('http://localhost:1337/users/users', user)
      .success($scope.registerSuccess)
      .error($scope.registerError);
  };

  $scope.registerSuccess = function(data, status, headers, config){
    console.log("Data",data);
    console.log("Status", status);
    $scope.resetForm($scope.usersRegister);
  };

  $scope.registerError = function(data, status, headers, config){
    console.log("error", data);
    console.log("status", status);
    // TODO display some kind of error in here
  };
//I added the following lines for the login... not sure if needed
    $scope.login = function(user){
    console.log("Login user", user );
    // TODO while trying to register a client show a spinner or something in here
    $http.post('http://localhost:1337/login', user)
      .success($scope.registerSuccess)
      .error($scope.registerError);
  };

  $scope.loginSuccess = function(data, status, headers, config){
    console.log("Data",data);
    console.log("Status", status);
    $scope.resetForm($scope.usersLogin);
  };

  $scope.loginError = function(data, status, headers, config){
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

