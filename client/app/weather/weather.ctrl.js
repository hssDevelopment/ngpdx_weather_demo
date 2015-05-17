'use strict';

angular.module('weatherDemoApp')
  .controller('WeatherCtrl', function ($http) {

    var vm = this;

        /**
         *
         * @type {Array}
         * Array to hold API Results on Scope
         */
    vm.weatherArray = [];
    var API_ENDPOINT = '/api/weather';

        /***
         *
         * key/value pairs for weather API endpoints
         */
    var cityEndpoints = {
        la:  '/la',
        snf: '/snf',
        ny:  '/ny',
        bos: '/bos',
        por: '/por',
        sea: '/sea',
        hou: '/hou',
        chi: '/chi'
    };

    function initializeWeatherData(){
        angular.forEach(cityEndpoints, function(cityEndpoint, key){
            $http.get(API_ENDPOINT + cityEndpoint)
                .success(function(data){
                    vm.weatherArray.push(data);
                })
        });
    }

        initializeWeatherData();
  });
