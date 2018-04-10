const { Client } = require('pg');
const Deplacement = require('../metier/Deplacement');

class AndroidDAO {
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
            // connectionString: process.ENV.DATABASE_URL
        });
        this._client.connect(function (err) {
            if (err) return done(err);
        })
    }

    getAllDeplacement(displaycb) {

        const query = {
            name: 'fetch-all-Deplacement',
            text: 'select idadh, datedeplacement, motif, coutdeplacement, distancekm, fraishebergement, fraisrepas, fraispeage, v1.nom as villeA, v2.nom as villeD from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrivee = v2.idville'
        };

        this._client.query(query, function (err, result) {
            let lesDeplacements = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unDeplacement;
                    unDeplacement = new Deplacement(row['idadh'], row['motif'], row['datedeplacement'], row['villed'], row['villea'], row['coutdeplacement'], row['distancekm'],
                        row['fraishebergement'], row['fraisrepas'], row['fraispeage']);
                    lesDeplacements.push(unDeplacement);
                });

                displaycb(lesDeplacements);

            }

        });

    };

    getAllDeplacement(displaycb) {

        const query = {
            name: 'fetch-all-Deplacement',
            text: 'select idadh, datedeplacement, motif, coutdeplacement, distancekm, fraishebergement, fraisrepas, fraispeage, v1.nom as villeA, v2.nom as villeD from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrivee = v2.idville'
        };
}
module.exports = AndroidDAO;