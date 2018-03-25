var express = require('express');
var router = express.Router();

var adherents_controller = require('../controllers/adherents_controller');


router.get('/adherents', adherents_controller.getListAdherents);


module.exports = router;

