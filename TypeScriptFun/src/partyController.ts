"use strict";
class PartyController {
    private vitality: number;
    private vitalityElement: HTMLDivElement;
    private goPartyElement: HTMLDivElement;
    private numberOfPartiesAttendedElement: HTMLDivElement;
    private yearsOldElement: HTMLDivElement;
    private monthsOldElement: HTMLDivElement;
    private daysOldElement: HTMLDivElement;
    private partyPimpScoreElement: HTMLDivElement;
    private partyContainerElement: HTMLDivElement;
    private timerVitalityToken: number;
    private timerAgeToken: number;
    private numberOfPartiesAttended: number;
    private partyPimpScore: number;
    private yearsOld: number;
    private monthsOld: number;
    private daysOld: number;
    private parties: Array<Party>;

    constructor(vitalityElement: HTMLDivElement, goPartyElement: HTMLDivElement, numberOfPartiesAttendedElement: HTMLDivElement, yearsOldElement: HTMLDivElement, monthsOldElement: HTMLDivElement, daysOldElement: HTMLDivElement, partyPimpScoreElement: HTMLDivElement, partyContainerElement: HTMLDivElement) {
        this.vitalityElement = vitalityElement;
        this.goPartyElement = goPartyElement;
        this.numberOfPartiesAttendedElement = numberOfPartiesAttendedElement;
        this.yearsOldElement = yearsOldElement;
        this.monthsOldElement = monthsOldElement;
        this.daysOldElement = daysOldElement;
        this.partyPimpScoreElement = partyPimpScoreElement;
        this.partyContainerElement = partyContainerElement;
        this.vitality = 0;
        this.numberOfPartiesAttended = 0;
        this.yearsOld = 0;
        this.monthsOld = 0;
        this.daysOld = 1;
        this.partyPimpScore = 0;
        this.createParties();
        this.wireEvents();
    }

    createParties() {
        var partyFactory = new PartyFactory();
        this.parties = partyFactory.getParties();
        console.log("about to push parties");
        for (var party in this.parties) {
            var partyToRender : HTMLDivElement = this.parties[party].renderPartyToPage();
            this.partyContainerElement.appendChild(partyToRender);
        }

    }

    wireEvents() {
        this.goPartyElement.addEventListener("click", () => {
            this.goParty();
        });
    }

    goParty() {
        if (this.vitality >= 0) {
            this.vitality -= 100;
            this.updateVitality();
            this.numberOfPartiesAttended++;
            this.partyPimpScore++;
            this.numberOfPartiesAttendedElement.innerHTML = this.numberOfPartiesAttended.toString();
            this.partyPimpScoreElement.innerHTML = this.partyPimpScore.toString();
        }
    }

    updateVitality() {
        this.vitalityElement.innerHTML = this.vitality.toString();
    }

    updateAge() {
        this.yearsOldElement.innerHTML = this.yearsOld.toString();
        this.monthsOldElement.innerHTML = this.monthsOld.toString();
        this.daysOldElement.innerHTML = this.daysOld.toString();
    }

    start() {
        this.updateAge();
        this.updateVitality();
        this.timerVitalityToken = setInterval(() => this.increaseVitality(), 100);
        this.timerAgeToken = setInterval(() => this.increaseAge(), 3000);
    }

    increaseVitality() {
        this.vitality++;
        this.updateVitality();
    }

    increaseAge() {
        this.daysOld++;
        if (this.daysOld > 30) {
            this.monthsOld++;
            this.daysOld = 1;
        }

        if (this.monthsOld > 12) {
            this.monthsOld = 1;
            this.yearsOld++;
        }

        this.updateAge();
    }
}

window.onload = () => {
    var vitalityTracker = <HTMLDivElement>document.getElementById("vitality");
    var goPartyElement = <HTMLDivElement>document.getElementById("goParty");
    var numberOfPartiesAttended = <HTMLDivElement>document.getElementById("numberOfPartiesAttended");
    var yearsOldElement = <HTMLDivElement>document.getElementById("yearsOld");
    var monthsOldElement = <HTMLDivElement>document.getElementById("monthsOld");
    var daysOldElement = <HTMLDivElement>document.getElementById("daysOld");
    var partyPimpScoreElement = <HTMLDivElement>document.getElementById("partyPimpScore");
    var partyContainerElement = <HTMLDivElement>document.getElementById("parties");
    var party = new PartyController(vitalityTracker, goPartyElement, numberOfPartiesAttended, yearsOldElement, monthsOldElement, daysOldElement, partyPimpScoreElement, partyContainerElement);
    party.start();
}