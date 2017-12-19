const adherentDAO = require('../DAO/adherentDAO');
const AdherentDAO = new adherentDAO();
const Adherent = require('../metier/Adherent');

// Research function by id
exports.findById = function(id,callback) {
    AdherentDAO.getListAdherents(function (listAdherents){
        if(listAdherents != null) {
            listAdherents.forEach(function (user) {
                if (user.id === id) {
                    callback(null, user);
                }
            });
        } else {
            callback(null, null);
        }
    });
 };

// Research function by Username
exports.findByUsername = function(username, user) {
    AdherentDAO.getListAdherents(function (listAdherents){
        find = false;
        if(listAdherents != null) {
                listAdherents.forEach(function (adherent) {
                    if (adherent.username === username) {
                        find= true;
                        user(null, adherent);
                    }
                });
                if (find == false){
                    user(null,null);
                }
        } else {
            user(null, null);
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
