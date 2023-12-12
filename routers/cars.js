'use strict'
var express = require('express')
var controller = require('../controllers/brand')
var router = express.Router()

router.get('/home', controller.home);
router.post('/test', controller.test);
router.post('/savegames', controller.savegames);
router.get('/games/_id?', controller.getgame)

module.exports = router