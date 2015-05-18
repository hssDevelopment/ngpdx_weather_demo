'use strict';

angular.module('weatherDemoApp')
    .controller('WeatherCtrl', function ($http) {
        var API_ENDPOINT = '/api/weather';
        var CITY_ENDPOINTS = {
            la: '/la',
            snf: '/snf',
            ny: '/ny',
            bos: '/bos',
            por: '/por',
            sea: '/sea',
            hou: '/hou',
            chi: '/chi'
        };

        var vm = this;
        vm.weatherArray = [];

        function initializeWeatherData() {
            angular.forEach(CITY_ENDPOINTS, function (cityEndPoint) {
                $http.get(API_ENDPOINT + cityEndPoint)
                    .success(function (data) {
                        vm.weatherArray.push(data);
                    })
            });
        }

        initializeWeatherData();
    });


