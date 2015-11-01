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

.controller('UsersCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  $scope.register = function(user) {
    console.log("Registering user", user);
    // TODO while trying to register a client show a spinner or something in here
    $http.post('http://localhost:1337/users/local/register', user)
      .success($scope.registerSuccess)
      .error($scope.registerError);
  };

  $scope.registerSuccess = function(data, status, headers, config) {
    console.log("Data", data);
    console.log("Status", status);
    $scope.resetForm($scope.usersRegister);
  };

  $scope.registerError = function(data, status, headers, config) {
    console.log("error", data);
    console.log("status", status);
    // TODO display some kind of error in here
  };
  //I added the following lines for the login... not sure if needed
  $scope.login = function(user) {
    console.log("Login user", user);
    user.client_id = '5o6NHxGe8uTKF2EXzhQf9p6lDxPUNd1L';
    user.grant_type = 'password';
    // TODO while trying to register a client show a spinner or something in here
    $http.post('http://localhost:1337/oauth/token', user)
      .success($scope.loginSuccess)
      .error($scope.loginError);
  };

  $scope.loginSuccess = function(data, status, headers, config) {
    console.log("Data", data);
    console.log("Status", status);
    $scope.resetForm($scope.usersLogin);
    // Display success
    var success_obj = {data: "Login success "+data.access_token, status: status};
    $scope.showMessage(success_obj);
    // TODO save the session bearer token
  };

  $scope.loginError = function(data, status, headers, config) {
    console.log("error", data);
    console.log("status", status);
    // Display message
    var error_obj = {data: data.error_description, status: status};
    $scope.showMessage(error_obj);
    // TODO display some kind of error in here
  };

  $scope.showMessage = function(obj){
    $scope.formMessage = obj.data;
    // TODO set up a timeout to hide it
    if(obj.status == 200){
      $timeout($scope.hideMessage, 3000);
    }
  }

  $scope.hideMessage = function(){
    $scope.formMessage = null;
  }

  $scope.resetForm = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = {};
  }

}]);
