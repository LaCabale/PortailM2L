var DeplacementDAO = require('../DAO/deplacementDAO');
var deplacementDAO = new DeplacementDAO();

exports.afficheRecap = function(req,res){

    /*if (!req.user) {
        res.redirect('/users/login');
    }*/
    console.log(req.isAuthenticated());
    console.log(req.user);
    deplacementDAO.recupDeplacements(
        function(lesDeplacements){

            res.render('recapTrajets',{lesDeplacements: lesDeplacements})
        }
    );
};