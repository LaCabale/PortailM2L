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
            text: 'select datedeplacement, coutdeplacement, distancekm, fraishebergement, fraisrepas, fraispeage, motif, villedepart, villearrivee ' +
            'from deplacement where idadh = ' + userId
        };

        this._client.query(query, function (err, result) {
            let lesDeplacements = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unDeplacement;

                    unDeplacement = new Deplacement(userId, row['motif'], row['datedeplacement'], row['villedepart'], row['villearrivee'], row['coutdeplacement'], row['distancekm'],
                        row['fraishebergement'], row['fraisrepas'], row['fraispeage']);
                    lesDeplacements.push(unDeplacement);
                });
                displaycb(lesDeplacements);
            }
        });
    }
}

module.exports = deplacementDAO;