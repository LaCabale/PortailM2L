const { Client } = require('pg');
const Deplacement = require('../metier/Deplacement');

class deplacementDAO {

    constructor(){

        this._client = new Client({connectionString : 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'});

        this._client.connect(function (err){
            if (err) return (err.stack);
        });
    }

    recupDeplacements(displaycb) {

        const query = {
            name: 'récup-déplacements',
            text: 'select datedeplacement, coutdeplacement, v1.nomville as villeA, v2.nomville as villeD from (deplacement join ville v1 on villedepart = v1.idville) join ville v2 on villearrive = v2.idville;'
        };

        this._client.query(query, function (err, result) {
            let lesDeplacements = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unDeplacement;

                    unDeplacement = new Deplacement(row['datedeplacement'], row['villed'], row['villea'], row['coutdeplacement']);
                    lesDeplacements.push(unDeplacement);
                    console.log('mdr');
                });
                console.log('je me tue');
                displaycb(lesDeplacements);
            }
        });
    }
}

module.exports = deplacementDAO;