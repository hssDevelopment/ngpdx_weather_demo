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
            la:  function(weatherApiService){return weatherApiService.getCurrentWeather('la')},
            snf: function(weatherApiService){return weatherApiService.getCurrentWeather('snf')},
            ny:  function(weatherApiService){return weatherApiService.getCurrentWeather('ny')},
            bos: function(weatherApiService){return weatherApiService.getCurrentWeather('bos')},
            por: function(weatherApiService){return weatherApiService.getCurrentWeather('por')},
            sea: function(weatherApiService){return weatherApiService.getCurrentWeather('sea')},
            hou: function(weatherApiService){return weatherApiService.getCurrentWeather('hou')},
            chi: function(weatherApiService){return weatherApiService.getCurrentWeather('chi')}
        }

      });
  });
