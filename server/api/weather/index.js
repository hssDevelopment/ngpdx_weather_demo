/**
 * Created by hensleym on 5/12/15.
 */
'use strict';

var express = require('express');
var weatherController = require('./weather.controller');

var router = express.Router();

router.get('/snf', weatherController.getHandler('snf').handle);
router.get('/la', weatherController.getHandler('la').handle);
router.get('/ny', weatherController.getHandler('ny').handle);
router.get('/bos', weatherController.getHandler('bos').handle);
router.get('/por', weatherController.getHandler('por').handle);
router.get('/sea', weatherController.getHandler('sea').handle);
router.get('/hou', weatherController.getHandler('hou').handle);
router.get('/chi', weatherController.getHandler('chi').handle);

module.exports = router;