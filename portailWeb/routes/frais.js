var express = require('express');
var router = express.Router();

const frais_controller = require('../controllers/frais_controller');

router.get('/',frais_controller.frais);

router.post('/',frais_controller.fraisIndex);


module.exports = router;
