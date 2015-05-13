'use strict';

angular.module('weatherDemoApp')
  .controller('WeatherCtrl', function ($http) {
    var vm = this;
    vm.weatherArray = [];
    $http.get('/api/weather/la').success(function(data) {
        for(var i = 0; i < 8; i++){
            vm.weatherArray.push(data);
        }
    });

  });
