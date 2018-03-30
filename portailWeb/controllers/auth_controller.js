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
    users_model.registerUser((req.body.nom),(req.body.prenom),(req.body.adresse),(req.body.eMail),(req.body.telephone),(req.body.newUsername), (req.body.Password),function(bool){
        if(bool){
        res.status('201').send('bien joué');
        }
        else{
            res.redirect('/users/signUp');
        }
    });
};


//Permet de déconnecter un utilisateur
exports.logout = function(req, res){
    req.logout();
    res.redirect('/');
 };