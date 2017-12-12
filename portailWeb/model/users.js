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
exports.findByUsername = function(username, user) {
    AdherentDAO.getListAdherents(function (listAdherents){
        if(listAdherents != null) {
                listAdherents.forEach(function (mec) {
                    if (mec.username === username) {
                        user(mec);
                    }
                });
        } else {
            user(null);
        }
    });
};

exports.registerUser = function (nom, prenom, adresse,  eMail, telephone, username, passeword, callback) {
    this.findByUsername(username, function (user) {
            if (user == null) {
                AdherentDAO.setNewAdherent(nom,prenom,adresse,eMail,telephone,username,passeword);
                return callback(true);
            }
            else {
                callback(false)
            }
        }
    );
}
