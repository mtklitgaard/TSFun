"use strict";
class PartyFactory {
    private _parties: Array<Party>;

    constructor() {
        this._parties = new Array<Party>();
        this.createParties();
    }

    private createParties() {

        var party1 = new Party(2, 150, "Dope Hits");
        var party2 = new Party(1, 90, "Slow");
        var party3 = new Party(10, 210, "Electric Boogie");

        this._parties.push(party1);
        this._parties.push(party2);
        this._parties.push(party3);
    }

    getParties() {
        return this._parties;
    }
}