'use strict';

angular.module('weatherDemoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'WeatherCtrl'
      });
  });