const { Client } = require('pg');
const Deplacement = require('../metier/Deplacement');

class deplacementDAO {

    constructor(){

        this._client = new Client({connectionString : 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'});

        this._client.connect(function (err){
            if (err) return (err.stack);
        });
    }

    recupDeplacements(userId ,displaycb) {

        const query = {
            name: 'récup-déplacements',
            text: 'select datedeplacement, coutdeplacement, distancekm, fraishebergement, fraisrepas, fraispeage, motif, v1.nom as villeA, v2.nom as villeD ' +
            'from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrivee = v2.idville where idadh = ' + userId
        };

        this._client.query(query, function (err, result) {
            let lesDeplacements = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unDeplacement;

                    unDeplacement = new Deplacement(userId, row['motif'], row['datedeplacement'], row['villed'], row['villea'], row['coutdeplacement'], row['distancekm'],
                        row['fraishebergement'], row['fraisrepas'], row['fraispeage']);
                    lesDeplacements.push(unDeplacement);
                });
                displaycb(lesDeplacements);
            }
        });
    }
}

module.exports = deplacementDAO;