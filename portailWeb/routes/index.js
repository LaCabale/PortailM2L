var express = require('express');
var router = express.Router();
var html_controller = require('../controllers/html_controller');

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);


        res.render('index', { title: 'Portail de la M2L', user: req.user});
    }
);

router.get('/hauts_faits', html_controller.hauts_faits);

router.get('/hauts_faits/j_o_p',html_controller.j_o_p);

router.get('/hauts_faits/articles',html_controller.articles);

router.get('/hauts_faits/statistiques',html_controller.statistiques);

router.get('/informations',html_controller.informations);

router.get('/informations/presentation',html_controller.presentation);

router.get('/informations/annuaire',html_controller.annuaire);




module.exports = router;
