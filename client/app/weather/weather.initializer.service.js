/**
 * Created by hensleym on 5/18/15.
 */
'use strict';

angular.module('weatherDemoApp')
    .service('weatherInitializerService', function(weatherApiService, $q){
        function initialize(){
            var laPromise = weatherApiService.getCurrentWeather('la');
            var snfPromise = weatherApiService.getCurrentWeather('snf');
            var nyPromise = weatherApiService.getCurrentWeather('ny');
            var bosPromise = weatherApiService.getCurrentWeather('bos');
            var porPromise = weatherApiService.getCurrentWeather('por');
            var seaPromise = weatherApiService.getCurrentWeather('sea');
            var houPromise = weatherApiService.getCurrentWeather('hou');
            var chiPromise = weatherApiService.getCurrentWeather('chi');

            var promise =  $q.all([laPromise, snfPromise, nyPromise, bosPromise, porPromise,
                seaPromise, houPromise, chiPromise]);

            return promise;
        }

        return{
            initialize: initialize
        };

    });