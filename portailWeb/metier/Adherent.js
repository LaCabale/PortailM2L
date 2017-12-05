class Adherent
{

    constructor(unUsername, unPassword)
    {
     this._username = unUsername;
     this._password = unPassword;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

}

module.exports = Adherent;