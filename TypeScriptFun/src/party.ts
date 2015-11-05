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
        return this._pimpPoints;
    }

    get vitalityCost() {
        return this._vitalityCost;
    }

    get partyName() {
        return this._partyName;
    }

    renderPartyToPage() : HTMLDivElement {
        var pimpElement = document.createElement("div");
        pimpElement.innerHTML = "Pimp Points: " + this.pimpPoints.toString();

        var vitalityCostElement = document.createElement("div");
        vitalityCostElement.innerHTML = "Vitality Cost: " + this.vitalityCost.toString();

        var partyNameElement = document.createElement("div");
        partyNameElement.innerHTML = "Party Name: " + this.partyName.toString();

        var divElement = document.createElement("div");
        divElement.className = "btn btn-default col-xs-3";
        divElement.innerHTML = partyNameElement.innerHTML + "<br />" + pimpElement.innerHTML + "<br />"+ vitalityCostElement.innerHTML;

        return divElement;
    }
}