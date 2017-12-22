const adherentDAO = require('../DAO/adherentDAO');
const AdherentDAO = new adherentDAO();

// Recherche un Adherent dans la base de donnée à partir de son Id
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

//Recherche un Adherent dans la base de donnée à partir de son Username
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
                if (!find){
                    user(null,null);
                }
        } else {
            user(null, null);
        }
    });
};

//Permet l'enregistrement d'un nouvel Adherent dans la base de donnée
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
};
