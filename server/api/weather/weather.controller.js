/**
 * Created by hensleym on 5/12/15.
 */
'use strict';

var cityToDataMapper = require('./weather.data.mapper');

// Get list of things
exports.getHandler = function (cityCode){
    return {
        handle: function(req, res) {
            var cityJson = cityToDataMapper[cityCode];
            res.json(cityJson);
        }
    }
};


