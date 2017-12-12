const { Client } = require('pg');

class fraisAnDAO {

    constructor() {

        this._client = new Client({
            connectionString: 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });


    }

}
module.exports = fraisAnDAO;