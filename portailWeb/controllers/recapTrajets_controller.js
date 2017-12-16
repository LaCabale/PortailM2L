const DeplacementDAO = require('../../DAO/deplacementDAO');
const deplacementDAO = new DeplacementDAO();


exports.afficheRecap = function(req,res){

    deplacementDAO.recupDeplacements(
        function(lesDeplacements){

            res.render('recapTrajets',{listeDeplacements: lesDeplacements})
        }
    );
};