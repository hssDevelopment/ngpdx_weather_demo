'use strict';

angular.module('weatherDemoApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.weatherArray = [];
    $http.get('/api/weather/la').success(function(data) {
        for(var i = 0; i < 8; i++){
            $scope.weatherArray.push(data);
        }
    });

  });
