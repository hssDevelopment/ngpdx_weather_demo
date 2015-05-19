'use strict';

angular.module('weatherDemoApp')
    .controller('WeatherCtrl', function (weatherApiService) {
        var CITY_ENDPOINTS = {
            la:  'la',
            snf: 'snf',
            ny:  'ny',
            bos: 'bos',
            por: 'por',
            sea: 'sea',
            hou: 'hou',
            chi: 'chi'
        };

        var vm = this;
        vm.weatherArray = [];

        function initializeWeatherData() {
            angular.forEach(CITY_ENDPOINTS, function (cityAbbreviation) {
                weatherApiService.getCurrentWeather(cityAbbreviation).then(function(weatherData){
                    vm.weatherArray.push(weatherData);
                });
            });
        }

        initializeWeatherData();
    });


