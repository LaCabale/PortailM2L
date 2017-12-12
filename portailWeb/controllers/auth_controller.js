var users_model = require('../model/users');

// LOGIN
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

exports.login_authentication = function(req, res) {
    users_model.findByUsername(req.body.username, function(user) {
        if(user != null) {
                if (user.password === req.body.password) {
                    res.render('index', {username: req.body.username});
                }
                else {
                    res.redirect('/users/login');
                }
        } else {
            res.redirect('/users/login');
        }
    });
};

// SIGNUP
exports.signUp_form = function(req, res){
    res.render('signUp');
}

exports.signUp_authentification = function(req, res) {
    users_model.registerUser((req.body.nom),(req.body.prenom),(req.body.adresse),(req.body.eMail),(req.body.telephone),(req.body.newUsername), (req.body.Password),function(bool){
        if(bool == true){
        res.redirect('/');
        }
        else{
            res.redirect('/users/signUp');
        }
    });
}


//LOGOUT
exports.logout = function(req, res){
     req.logout();
     res.redirect('/');
 };