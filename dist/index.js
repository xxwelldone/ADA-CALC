"use strict";
const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
let selectedNumbers = [];
let definedOperation = "";
const reset = document.querySelector(".reset");
const totalReset = document.querySelector(".totalReset");
numbers.forEach((item) => {
    item.addEventListener("click", digitouNumero);
});
operations.forEach((item) => {
    item.addEventListener("click", digitouOperacao);
});
if (equal) {
    equal.addEventListener("click", igual);
}
if (reset && input) {
    reset.addEventListener("click", () => {
        input.value = "";
    });
}
if (totalReset && input) {
    totalReset.addEventListener("click", () => {
        selectedNumbers.forEach(() => {
            selectedNumbers.pop();
        });
        input.value = "";
    });
}
function digitouNumero(event) {
    const element = event.target;
    const number = element.innerText;
    if (input) {
        input.value += number.toString();
    }
}
function digitouOperacao(event) {
    const element = event.target;
    definedOperation = element.innerText;
    if (input) {
        selectedNumbers.push(Number(input.value));
        input.value = "";
        console.log(selectedNumbers);
    }
}
function igual(event) {
    if (input && selectedNumbers.length > 0) {
        selectedNumbers.push(Number(input.value));
    }
    if (selectedNumbers.length === 2) {
        calculate(selectedNumbers[0], selectedNumbers[1], definedOperation);
    }
}
function calculate(num1, num2, operation) {
    console.log(selectedNumbers);
    if (input) {
        let calculated = 0;
        switch (operation) {
            case "%":
                calculated = num1 % num2;
                input.value = calculated.toString();
                break;
            case "*":
                calculated = num1 * num2;
                input.value = calculated.toString();
                break;
            case "-":
                calculated = num1 - num2;
                input.value = calculated.toString();
                break;
            case "+":
                calculated = num1 + num2;
                input.value = calculated.toString();
                break;
            case "/":
                calculated = num1 / num2;
                input.value = calculated.toString();
                break;
            default:
                break;
        }
    }
}
