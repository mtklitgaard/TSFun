namespace Utilities {
    class Calculator {
        private firstNumber: HTMLInputElement;
        private secondNumber: HTMLInputElement;
        private answer: HTMLSpanElement;

        constructor(firstNumberId: string, secondNumberId: string, answerId: string) {
            this.firstNumber = <HTMLInputElement>document.getElementById(firstNumberId);
            this.secondNumber = <HTMLInputElement>document.getElementById(secondNumberId);
            this.answer = <HTMLSpanElement>document.getElementById(answerId);
            this.wireEvents();
        }

        wireEvents() {
            document.getElementById("add").addEventListener("click",
                event => {
                    this.answer.innerHTML = this.add(parseInt(this.firstNumber.value), parseInt(this.secondNumber.value)).toString();
                });

            document.getElementById("subtract").addEventListener("click",
                event => {
                    this.answer.innerHTML = this.subtract(parseInt(this.firstNumber.value), parseInt(this.secondNumber.value)).toString();
                });
        }

        add(number1: number, number2: number) {
            return number1 + number2;
        }

        subtract(number1: number, number2: number) {
            return number1 - number2;
        }
    }
    window.onload = function () {
        var calculator = new Calculator("firstNumber", "secondNumber", "answer");
    };
}


