'use strict';

angular.module('indigo.menu', [])
.controller('menuCtrl', [function() {
}])
.directive('myMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'menu/myMenu.html'
  };
});
