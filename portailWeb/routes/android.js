var express = require('express');
var router = express.Router();


var andro_controller = require('../controllers/andro_controller');
/* GET home page. */

router.get('/', andro_controller.index);



module.exports = router;