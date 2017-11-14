class NoteFrais
{
    constructor(dateNote, anneeCivile, montantDons, lesDeplacements)
    {
        this._dateNote = dateNote;
        this._anneeCivile = anneeCivile;
        this._montantDons = montantDons;
        this._lesDeplacements = lesDeplacements;
    }

    get  dateNote()
    {
        return this._dateNote;
    }

    get anneeCivile()
    {
        return this._anneeCivile;
    }

    get montantDons()
    {
        return this._montantDons;
    }

    get lesDeplacements()
    {
        return this.lesDeplacements;
    }

    set  dateNote(uneDate)
    {
        this._dateNote = uneDate;
    }

    set anneeCivile(uneAnnee)
    {
        this._anneeCivile = uneAnnee;
    }

    set montantDons(unMontant)
    {
        this._montantDons = unMontant;
    }

    set lesDeplacements(desDeplacements)
    {
        this._lesDeplacements = desDeplacements;
    }

}

module.exports = NoteFrais;