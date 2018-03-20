const { Client } = require('pg');
const Deplacement = require('../metier/Deplacement');

class deplacementDAO {

    constructor(){
        this._client = new Client({
            connectionString : 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    recupDeplacements(displaycb) {

        const query = {
            name: 'récup-déplacements',
            text: 'select motif, distancekm, idAdherent, fraisHebergement, fraisRepas, fraisPeage, datedeplacement, coutdeplacement, v1.nomville as villeA, v2.nomville as villeD from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrivee = v2.idville;'

            /*text: 'select datedeplacement, coutdeplacement, v1.nomville as villeA, v2.nomville as villeD' +
            'from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrivee = v2.idville' +
            'where '+ idUser + ' = idAdherent;'*/
        };

        this._client.query(query, function (err, result) {
            let lesDeplacements = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unDeplacement;
                    unDeplacement = new Deplacement(row['idAdherent'], row['motif'], row['datedeplacement'], row['villed'], row['villea'], row['coutdeplacement'], row['distance'], row['fraishebergement'], row['fraisrepas'], row['fraispeage']);
                    lesDeplacements.push(unDeplacement);
                });
                displaycb(lesDeplacements);
            }
        });
    }
}

module.exports = deplacementDAO;