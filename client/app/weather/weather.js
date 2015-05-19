'use strict';

angular.module('weatherDemoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('weather', {
        url: '/',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'WeatherCtrl',
        resolve: {
            weatherData: function(weatherInitializerService){
                return weatherInitializerService.initialize();
            }
        }

      });
  });
