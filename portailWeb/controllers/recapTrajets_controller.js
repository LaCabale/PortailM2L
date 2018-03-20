var DeplacementDAO = require('../DAO/deplacementDAO');
var deplacementDAO = new DeplacementDAO();

exports.afficheRecap = function(req,res){
    deplacementDAO.recupDeplacements(
        function(lesDeplacements){

            res.render('recapTrajets',{lesDeplacements: lesDeplacements})
        }
    );
};