var deplacement = require('../metier/Deplacement')
var villeA;
var villeD;
var kiloM;
var motif;
var cout;

//FRAIS
exports.frais = function(req, res){
    res.render('frais');
};

//VERIFICATION

exports.verification = function(req, res)
{
    kiloM = req.body.parcourus;
    villeA = req.body.villeA;
    villeD = req.body.villeD;
    motif = req.body.motif;

    if (kiloM <= 5000)
        cout = kiloM * 0.493;
    else if (kiloM > 5000 && kiloM <= 20000)
        cout = kiloM * 0.277 + 1082;
    else
        cout = kiloM * 0.332;
    res.render('verification', {motif : motif, villeD : villeD,
        villeA: villeA, kiloM : kiloM, cout : cout});
}

//FRAIS ANNEXE
exports.fraisAnnexes = function(req, res){
    res.render('fraisAnnexes' {motif : motif, villeD : villeD,
        villeA: villeA, kiloM : kiloM, cout : cout});
};

exports.fraisIndex = function(req, res)
{
    res.redirect('/');
}