class Deplacement
{
    constructor(dateDeplacement, nomDeclarant, adresseDeclarant, villeD, villeA, leMotif, lesAdh, lesFrais, unCout, uneDistance)
    {
        this._dateDeplacement = dateDeplacement;
        this._nomDeclarant = nomDeclarant;
        this._adresseDeclarant = adresseDeclarant;
        this._villeA = villeA;
        this._villeD = villeD;
        this._leMotif = leMotif;
        this._lesAdh = lesAdh;
        this._lesFrais = lesFrais;
        this._cout = unCout;
        this._kiloM = uneDistance;
    }

    //GETTERS-----------------------------------------------------

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

    get villeA()
    {
        return this._villeA;
    }

    get villeD()
    {
        return this._villeD;
    }

    get leMotif()
    {
        return this._leMotif;
    }

    get lesAdh()
    {
        return this._lesAdh;
    }

    get lesFrais()
    {
        return this._lesFrais;
    }

    get cout()
    {
        return this._cout;
    }

    get kiloM()
    {
        return this._kiloM;
    }

    //SETTERS-------------------------------------------------------------

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

    set villeA(uneVille)
    {
        this._villeA = uneVille;
    }

    set villeD(uneVille)
    {
        this._villeD = uneVille;
    }

    set leMotif(unMotif)
    {
        this._leMotif = unMotif;
    }

    set lesAdh(desAdh)
    {
        this._lesAdh = desAdh;
    }

    set lesFrais(desFrais)
    {
        this._lesFrais = desFrais;
    }

    set cout(unCout)
{
    this._cout = unCout;
}

    set kiloM(uneDistance)
    {
        this._kiloM =  uneDistance;
    }
}

module.exports = Deplacement;