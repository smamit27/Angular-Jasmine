var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.test = 0;
  
  var testValue = function() {
    $scope.privateCall = "private123";
  }

  //Using $scope Keyword//
  $scope.methodName = function() {
    $scope.test = $scope.name.length;
    testValue();
  };

  //using private key Var//


}]);