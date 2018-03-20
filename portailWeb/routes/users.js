let express = require('express');
let router = express.Router();


const passport = require('passport');

let auth_controller = require('../controllers/auth_controller');

//Route permettant d'afficher le formulaire de login
router.get('/login',auth_controller.login_form);

//Route permettant l'autentification d'un utilisateur
router.post('/login',passport.authenticate('local', { failureRedirect: '/users/login' }),auth_controller.login_authentication);

//Route permettant d'afficher le formulaire d'enregistrement d'un nouvel utilisateur
router.get('/signUp',auth_controller.signUp_form);

//Route permettant d'enregistrer un utilisateur/Adhérent dans la base de donnée
router.post('/signUp',auth_controller.signUp_authentification);

//Route permettant de déconnecter l'utilisateur actuellement connecté
router.get('/logout',auth_controller.logout);


module.exports = router;

