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

    getVilles(villeD, villeA, callback)
    {
        let query = {text : "select idville from ville where nom = '" + villeD +
        "' or nom = '" + villeA+"'"};

        this._client.query(query, function(err, result)
        {
            if (err)
            {
                console.log(err.stack);
            }
            else
            {
                let lesVilles = [];
                result.rows.forEach(function(row)
                {
                    console.log(row);
                    lesVilles.push(row['idville']);
                });
                callback(lesVilles);
            }
        });
    }

    addNewDeplacements(motif, idAdherent, date, villeD, villeA, cout, fraisHebergement,
                       fraisRepas, fraisPeage, kilomP)
    {

        let query = {
            name: 'add-new-deplacement',
            text: "select addNewDeplacement ('"+date+"', "+cout+", "+idAdherent+ ", "+fraisRepas+", "+fraisHebergement+","+fraisPeage+", '"+motif+"', "+villeD+","+villeA+","+kilomP+");"
        };

        this._client.query(query, function(err){
            if(err){
                console.log(err.stack);
            }
        });
    };
}
module.exports = Frais_DAO;