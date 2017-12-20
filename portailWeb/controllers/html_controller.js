//Hauts_faits
exports.hauts_faits = function(req, res) {
    res.render('hauts_faits', { title: 'Hauts faits de la M2L', user: req.user});
};

//Jeux Olympique et paralympique
exports.j_o_p = function(req, res) {
    res.render('j_o_p', { title: 'Jeux Olympiques et Paralympiques', user: req.user});
};

//Articles
exports.articles = function(req, res) {
    res.render('articles', { title: 'Vu dans la presse !', user: req.user});
};

exports.statistiques = function(req, res) {
    res.render('statistiques', { title: 'Quelques statistiques', user: req.user});
};

//informations
exports.informations = function(req, res) {
    res.render('informations', { title: 'Information sur la M2L', user: req.user});
};

//presentation
exports.presentation = function(req, res) {
    res.render('presentation', { title: 'presentation', user: req.user});
};

exports.annuaire = function(req, res) {
    res.render('annuaire', { title: 'Annuaire des ligues', user: req.user});
};