'use strict';

angular.module('weatherDemoApp')
    .controller('WeatherCtrl', function (weatherApiService, la, snf, ny,
                                         bos, por, sea, hou, chi) {
        var vm = this;
        vm.weatherArray = [];
        vm.weatherArray.push(la);
        vm.weatherArray.push(snf);
        vm.weatherArray.push(ny);
        vm.weatherArray.push(bos);
        vm.weatherArray.push(por);
        vm.weatherArray.push(sea);
        vm.weatherArray.push(hou);
        vm.weatherArray.push(chi);
    });


