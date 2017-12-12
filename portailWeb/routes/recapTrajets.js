var express = require('express');
var router = express.Router();

var recapTrajets_controller = require('../controllers/recapTrajets_controller.js');

router.get('/', recapTrajets_controller.afficheRecap)

module.exports = router;