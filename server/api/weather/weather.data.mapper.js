/**
 * Created by hensleym on 5/12/15.
 */
var snfData = require('../mock_data/snf.json'),
    laData = require('../mock_data/la.json'),
    nyData = require('../mock_data/ny.json'),
    bosData = require('../mock_data/bos.json'),
    porData = require('../mock_data/por.json'),
    seaData = require('../mock_data/sea.json'),
    houData = require('../mock_data/hou.json'),
    chiData = require('../mock_data/chi.json');

var cityToDataMapper = {
    'snf': snfData,
    'la' : laData,
    'ny' : nyData,
    'bos': bosData,
    'por': porData,
    'sea': seaData,
    'hou': houData,
    'chi': chiData
};

module.exports = cityToDataMapper;