var express = require('express');
var router = express.Router();

var deplacement_controller = require('../controllers/deplacement_controller');

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);


        res.render('index', { title: 'Portail de la M2L', user: req.user});
    }
);

router.get('/deplacements', deplacement_controller.deplacements);




module.exports = router;
