class Party {
    private vitality: number;
    private vitalityElement: HTMLDivElement;
    private goPartyElement: HTMLDivElement;
    private numberOfPartiesAttendedElement: HTMLDivElement;
    private yearsOldElement: HTMLDivElement;
    private monthsOldElement: HTMLDivElement;
    private daysOldElement: HTMLDivElement;
    private timerVitalityToken: number;
    private timerAgeToken: number;
    private numberOfPartiesAttended: number;
    private yearsOld: number;
    private monthsOld: number;
    private daysOld: number;

    constructor(vitalityElement: HTMLDivElement, goPartyElement: HTMLDivElement, numberOfPartiesAttendedElement: HTMLDivElement, yearsOldElement: HTMLDivElement, monthsOldElement: HTMLDivElement, daysOldElement: HTMLDivElement) {
        this.vitalityElement = vitalityElement;
        this.goPartyElement = goPartyElement;
        this.numberOfPartiesAttendedElement = numberOfPartiesAttendedElement;
        this.yearsOldElement = yearsOldElement;
        this.monthsOldElement = monthsOldElement;
        this.daysOldElement = daysOldElement;
        this.vitality = 0;
        this.numberOfPartiesAttended = 0;
        this.yearsOld = 0;
        this.monthsOld = 0;
        this.daysOld = 1;
        this.wireEvents();
    }

    wireEvents() {
        this.goPartyElement.addEventListener("click", () => {
            this.goParty();
        });
    }

    goParty() {
        if (this.vitality > 0) {
            this.vitality -= 100;
            this.updateVitality();
            this.numberOfPartiesAttended++;
            this.numberOfPartiesAttendedElement.innerHTML = this.numberOfPartiesAttended.toString();
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
    var party = new Party(vitalityTracker, goPartyElement, numberOfPartiesAttended, yearsOldElement, monthsOldElement, daysOldElement);
    party.start();
}