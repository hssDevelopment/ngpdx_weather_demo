/**
 * Created by hensleym on 5/18/15.
 */
'use strict';
angular.module('weatherDemoApp')
    .service('weatherApiService', function($http, $q){
        var API_ENDPOINT = '/api/weather';

        function getCurrentWeather(cityAbbreviation){
            var deferred = $q.defer();
            $http.get(API_ENDPOINT + '/' + cityAbbreviation)
                .success(function(weatherData){
                    var currentWeatherData;
                    currentWeatherData = {
                        location: weatherData.current_observation.display_location.full,
                        condition: weatherData.current_observation.weather,
                        temperature: weatherData.current_observation.temperature_string,
                        humidity: weatherData.current_observation.relative_humidity,
                        wind: weatherData.current_observation.wind_gust_mph,
                        icon: weatherData.current_observation.icon_url
                    };

                    deferred.resolve(currentWeatherData);
                })
                .error(function(){
                    //In this case, the route will not resolve
                    //without a successful promise - resolve an
                    //empty object or a helpful error message that
                    //will be displayed

                    deferred.resolve({
                        location: '',
                        condition: '',
                        temperature: '',
                        humidity: '',
                        wind: '',
                        icon: ''
                    });
                });

            return deferred.promise;
        }

        return{
            getCurrentWeather: getCurrentWeather
        };

    });