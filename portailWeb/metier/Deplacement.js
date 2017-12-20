class Deplacement
{
    constructor(idAdherent, motif, dateDeplacement, villeD, villeA, unCout, kiloM, fraisHebergement, fraisRepas, fraisPeage)
    {
        this._idAdherent = idAdherent;
        this._dateDeplacement = dateDeplacement;
        this._motif = motif;
        this._villeA = villeA;
        this._villeD = villeD;
        this._cout = unCout;
        this._kiloM = kiloM;
        this._fraisHebergement = fraisHebergement;
        this._fraisRepas = fraisRepas;
        this._fraisPeage = fraisPeage;
    }

    //GETTERS-----------------------------------------------------

    get idAdherent()
    {
        return this._idAdherent;
    }

    get motif()
    {
        return this._motif;
    }

    get fraisHebergement()
    {
        return this._fraisHebergement;
    }

    get fraisRepas()
    {
        return this._fraisRepas;
    }

    get fraisPeage()
    {
        return this._fraisPeage;
    }

    get kiloM()
    {
        return this._kiloM;
    }

    get dateDeplacement()
    {
        return this._dateDeplacement;
    }

    get villeA()
    {
        return this._villeA;
    }

    get villeD()
    {
        return this._villeD;
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

    set idAdherent(idAdherent)
    {
        this._idAdherent = idAdherent;
    }

    set dateDeplacement(uneDate)
    {
        this._dateDeplacement = uneDate;
    }

    set villeA(uneVille)
    {
        this._villeA = uneVille;
    }

    set villeD(uneVille)
    {
        this._villeD = uneVille;
    }

    set motif(unMotif)
    {
        this._motif = unMotif;
    }

    set cout(unCout)
    {
        this._cout = unCout;
    }

    set kiloM(uneDistance)
    {
        this._kiloM =  uneDistance;
    }

    set fraisHebergement(fraisHebergement)
    {
        this._fraisHebergement = fraisHebergement;
    }

    set fraisRepas(fraisRepas)
    {
        this._fraisRepas = fraisRepas;
    }

    set fraisPeage(fraisPeage)
    {
        this._fraisPeage = fraisPeage;
    }

}

module.exports = Deplacement;