let users_model = require('../model/users');

// Permet d'afficher le formulaire de connexion
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

//Permet de se connecter (autentification)
exports.login_authentication = function(req, res) {
    res.redirect('/');
};

// Permet d'afficher le formulaire d'enregistrement d'un nouvel utilisateur
exports.signUp_form = function(req, res){
    res.render('signUp');
};

//Permet d'enregister un nouvel utilisateur dans la base de donnée
exports.signUp_authentification = function(req, res) {
    if (req.body.nom && req.body.prenom && req.body.adresse && req.body.eMail && req.body.newUsername && req.body.Password){
        users_model.registerUser((req.body.nom), (req.body.prenom), (req.body.adresse), (req.body.eMail), (req.body.telephone), (req.body.newUsername), (req.body.Password), function (bool) {
            if (bool == true) {
                res.redirect('/');
            }
            else {
                res.redirect('/users/signUp');
            }
        });
    } else{
        res.render('signUp',{MessageSign: "Certains champs obligatoires n'ont pas été remplis" });
    }
}


//Permet de déconnecter un utilisateur
exports.logout = function(req, res){
    req.logout();
    res.redirect('/');
 };