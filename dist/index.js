"use strict";
const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
let selectedNumbers = [];
let definedOperation = "";
let secondNumber = false;
numbers.forEach((item) => {
    item.addEventListener("click", digitouNumero);
});
operations.forEach((item) => {
    item.addEventListener("click", digitouOperacao);
});
equal === null || equal === void 0 ? void 0 : equal.addEventListener("click", igual);
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
        secondNumber = true;
    }
}
function igual(event) {
    if (input) {
        selectedNumbers.push(Number(input.value));
    }
    calculate(selectedNumbers[0], selectedNumbers[1], definedOperation);
}
function calculate(num1, num2, operation) {
    console.log(selectedNumbers);
}
