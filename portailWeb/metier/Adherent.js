class Adherent
{

    constructor(unUsername, unPassword, unId, unEmail, unNom, unPrenom)
    {
     this._username = unUsername;
     this._password = unPassword;
     this._id = unId;
     this._email = unEmail;
     this._nom = unNom;
     this._prenom = unPrenom;

    }

    get username() {
        return this._username;
    }

    get password() {
        var passwordHash = require('password-hash');

        return passwordHash.generate(this._password);
    }

    get id()
    {
        return this._id;
    }

    get email()
    {
        return this._email;
    }

    get prenom()
    {
        return this._prenom;
    }

    get nom()
    {
        return this._nom;
    }

}

module.exports = Adherent;