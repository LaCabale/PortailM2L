const DeplacementDAO = require('../DAO/deplacementDAO');
const deplacementDAO = new DeplacementDAO();


exports.deplacements = function(req,res){
    deplacementDAO.recupDeplacements(
        function(lesDeplacements){
            console.log(req.session);
            res.render('deplacements',{listeDeplacements: lesDeplacements, user: req.user})
        }
    );
};