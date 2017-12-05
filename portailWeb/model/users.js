var records = [
    { id: 1, username: 'jack', password: 'secret', eMail: 'jack@test.fr'}
  , { id: 2, username: 'jill', password: 'birthday', eMail: 'jill@chill.com'}
];

const adherentDAO = require('../DAO/adherentDAO');
const AdherentDAO = new adherentDAO();
const Adherent = require('../metier/Adherent');

// Research function by id
exports.findById = function(id,callback) {
    find = false;
    records.forEach(function(record) {
        if (record.id == id) {
            find = true;
            return callback(null, record);
        }
    });
    if (!(find)){
        return callback(new Error('User ' + id + ' does not exist'))}
 };

// Research function by Username
exports.findByUsername = function(username, callback) {
    console.log(AdherentDAO.getListAdherents()+'1');
    var listAdherents = AdherentDAO.getListAdherents();
    var find = false;
    console.log(listAdherents);
    for (var i = 0, len = listAdherents.length; i < len; i++) {
        console.log('la');
      var record = listAdherents[i];
        console.log('inside find username '+ listAdherents.length);
        if (record.username === username) {
          find=true;
          return callback(null, record.password);
      }
    }

    if (!(find)) {
        return callback(null, null);
    }
};

exports.registerUser = function (nom, prenom, adresse,  eMail, telephone, username, passeword, callback) {
    console.log('registerUser 1');
    this.findByUsername(username,
        function (err, user) {
            console.log('registerUser');
            if (err) {
                return callback(false);
            }
            console.log('logIn');
            if (!user) {
                /*var id = records.length + 1;
                records.push({id: id, username: username, password: passeword, eMail: eMail});*/
                AdherentDAO.setNewAdherent(nom,prenom,adresse,eMail,telephone,username,passeword);
                console.log('regiserUser3')
                return callback(true);
            }
            else {
                callback(false)
            }
        }
    );
}
