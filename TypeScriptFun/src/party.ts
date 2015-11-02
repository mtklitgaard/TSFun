"use strict";
class Party {
    private _pimpPoints: number;
    private _vitalityCost: number;
    private _partyName: string;

    constructor(pimpPoints: number, vitalityCost: number, partyName: string) {
        this._pimpPoints = pimpPoints;
        this._vitalityCost = vitalityCost;
        this._partyName = partyName;
    }

    get pimpPoints() {
        return this.pimpPoints;
    }

    get vitalityCost() {
        return this._vitalityCost;
    }

    get partyName() {
        return this._partyName;
    }
}