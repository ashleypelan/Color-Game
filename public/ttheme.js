var app = angular.module("backgroundTheme", []);
app.controller("ThemeController", function($scope) {

  $scope.customStyle = {};

  $scope.turnWhite = function (){
      $scope.customStyle.style = {"color":"white"};
      $scope.customStyle.body = {"background":"black"};
      // $scope.customStyle.class = turnBackgroundWhite;

  }

  $scope.turnBlack = function() {
      $scope.customStyle.style = {"color":"black"};
      $scope.customStyle.body = {"background":"white"};
      // $scope.customStyle.class = turnBackgroundBlack;

  }

});
