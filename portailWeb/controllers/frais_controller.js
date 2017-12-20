const Frais_DAO = require('../DAO/Frais_DAO');
const frais_DAO = new Frais_DAO();

//FRAIS
    exports.frais = function(req, res) {
        res.render('frais')
    }

//VERIFICATION

    exports.verification = function (req, res) {
        let cout;
        let kiloM = req.body.parcourus;
        if (kiloM <= 5000)
            cout = kiloM * 0.493;
        else if (kiloM > 5000 && kiloM <= 20000)
            cout = kiloM * 0.277 + 1082;
        else
            cout = kiloM * 0.332;
        res.render('verification', {
            motif: req.body.motif, villeD: req.body.villeD,
            villeA: req.body.villeA, kiloM: req.body.parcourus, cout: cout,
            date : req.body.date
        });
    }

//FRAIS ANNEXE
    exports.fraisAnnexes = function (req, res) {
        res.render('fraisAnnexes', {motif : req.body.motif, villeD : req.body.villeD, villeA : req.body.villeA,
        kiloM: req.body.kiloM, cout: req.body.cout, date : req.body.date});
    };

    exports.fraisIndex = function (req, res) {
        frais_DAO.getVilles(req.body.villeD, req.body.villeA, function(lesVilles)
        {
            frais_DAO.addNewDeplacements(req.body.motif, req.user.id, req.body.date, lesVilles[0],
                lesVilles[1], req.body.cout, req.body.montantHebergement, req.body.montantRepas,
                req.body.montantHebergement, (req.body.kiloM));
            res.redirect('/')
        });
        ;
    };
