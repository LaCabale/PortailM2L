class Deplacement
{
    constructor(dateDeplacement, nomDeclarant, adresseDeclarant, leTrajet, leMotif, lesAdh, lesFrais)
    {
        this._dateDeplacement = dateDeplacement;
        this._nomDeclarant = nomDeclarant;
        this._adresseDeclarant = adresseDeclarant;
        this._leTrajet = leTrajet;
        this._leMotif = leMotif;
        this._lesAdh = lesAdh;
        this._lesFrais = lesFrais;
    }

    get dateDeplacement()
    {
        return this._dateDeplacement;
    }

    get nomDeclarant()
    {
        return this._nomDeclarant;
    }

    get adresseDeclarant()
    {
        return this._adresseDeclarant;
    }

    get leMotif()
    {
        return this._leMotif;
    }

    get leTrajet()
    {
        return this._leTrajet
    }

    get lesAdh()
    {
        return this._lesAdh;
    }

    get lesFrais()
    {
        return this._lesFrais;
    }

    set dateDeplacement(uneDate)
    {
        this._dateDeplacement = uneDate;
    }

    set nomDeclarant(unNom)
    {
        this._nomDeclarant = unNom;
    }

    set adresseDeclarant(uneAdresse)
    {
        this._adresseDeclarant = uneAdresse;
    }

    set leTrajet(unTrajet)
    {
        this._leTrajet = unTrajet;
    }

    set leTrajet(unMotif)
    {
        this._leMotif = unMotif;
    }

    set leTrajet(desAdh)
    {
        this._lesAdh = desAdh;
    }

    set lesFrais(desFrais)
    {
        this._lesFrais = desFrais;
    }
}

module.exports = Deplacement;