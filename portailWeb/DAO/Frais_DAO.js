const Deplacement = require('../metier/Deplacement');
const {Client} = require('pg');

class Frais_DAO {
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
        });
        this._client.connect(function (err) {
            if (err) return (err.message);
        });

    }

    addNewDeplacements(motif, idAdherent, date, villeD, villeA, cout, fraisHebergement,
                       fraisRepas, fraisPeage, kilomP)
    {

        let query = {
            name: 'add-new-deplacement',
            text: "select addNewDeplacement ('"+date+"', "+parseFloat(cout).toFixed(2)+", "+idAdherent+ ", "+fraisRepas+", "+fraisHebergement+", "+fraisPeage+", '"+motif+"', '"+villeD+"', '"+villeA+"', "+parseFloat(kilomP).toFixed(2)+");"
        };

        this._client.query(query, function(err){
            if(err){
                console.log(err.stack);
            }
        });
    };
}
module.exports = Frais_DAO;