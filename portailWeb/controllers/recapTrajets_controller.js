var DeplacementDAO = require('../DAO/deplacementDAO');
var deplacementDAO = new DeplacementDAO();

exports.afficheRecap = function(req,res){

    if (!req.user) {
        res.redirect('/users/login');
    }
    else {
        deplacementDAO.recupDeplacements(req.user.id,
            function (lesDeplacements) {
                res.render('recapTrajets', {lesDeplacements: lesDeplacements, user: req.user})
            }
        );
    }
};