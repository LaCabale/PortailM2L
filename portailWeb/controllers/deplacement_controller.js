const DeplacementDAO = require('../../DAO/deplacementDAO');
const deplacementDAO = new DeplacementDAO();


exports.deplacements = function(req,res){

    deplacementDAO.recupDeplacements(
        function(lesDeplacements){

            res.render('deplacements',{listeDeplacements: lesDeplacements})
        }
    );
};