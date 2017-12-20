const Deplacement = require('../metier/Deplacement');
const {Client} = require('pg');
class Frais_DAO {
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
        });
        this._client.connect(function (err) {
            if (err) return done(err);
        });

    }
    addNewDeplacements(motif, idAdherent, date, villeD, villeA, cout, fraisHebergement,
                       fraisRepas, fraisPeage, kilomP)
    {
        console.log('il l a trouvé');
        let query = {text : "select idville from villefrance where idville =" + villeD + ";"};

        this._client.query(query, function(err, result)
        {
           if(err)
           {
               console.log(err.stack);
           }
           else
               villeD = result.rows[0]['idville'];
        });

         query = {text : "select idville from villefrance where idville =" + villeA + ";"};

        this._client.query(query, function(err, result)
        {
            if(err)
            {
                console.log(err.stack);
            }
            else
                villeA = result.rows[0]['idville'];
        });

        query = {
            name: 'add-new-deplacement',
            text: "select addnewdeplacement ('"+date+"', "+cout+", "+idAdherent+ ", "+fraisRepas+", "+fraisHebergement+","+fraisPeage+", '"+motif+"', "+villeD+","+villeA+","+kilomP+");"
        };

        this._client.query(query, function(err){
            if(err){
                console.log(err.stack);
            }
        });
    };
}
module.exports = Frais_DAO;