//FRAIS
exports.frais = function(req, res){
    res.render('frais');
};

//VERIFICATION

exports.verification = function(req, res)
{
    let cout;
    let kiloM = req.body.parcourus;
    if (kiloM <= 5000)
        cout = kiloM * 0.493;
    else if (kiloM > 5000 && kiloM <= 20000)
        cout = kiloM * 0.277 + 1082;
    else
        cout = kiloM * 0.332;
    res.render('verification', {motif : req.body.motif, villeD : req.body.villeD,
        villeA: req.body.villeA, kiloM : req.body.parcourus, cout : cout});
};

//FRAIS ANNEXES
exports.fraisAnnexes = function(req, res){

    res.render('fraisAnnexes', {M : req.body.M, vD : req.body.vD, vA : req.body.vA,
        kl: req.body.kl, c: req.body.c});
};

exports.fraisIndex = function(req, res)
{
    res.redirect('/');
}