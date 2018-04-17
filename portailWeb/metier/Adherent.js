class Adherent
{


    //Constructeur de la classe Adherent
    constructor(unId, unUsername, unPassword)
    {
     this._id = unId;
     this._username = unUsername;
     this._password = unPassword;
    }

    //Getter de l'attribut Username
    get username() {
        return this._username;
    }

    //Getter de l'attribut password
    get password() {
        var passwordHash = require('password-hash');

        return passwordHash.generate(this._password);
    }

    //Getter de l'attribut Id
    get id() {
        return this._id;
    }

}

module.exports = Adherent;