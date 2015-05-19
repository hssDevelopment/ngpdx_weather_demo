'use strict';

angular.module('weatherDemoApp')
    .controller('WeatherCtrl', function (weatherData) {
        var vm = this;
        vm.weatherArray = weatherData
    });


