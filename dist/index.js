"use strict";
const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
const track = document.querySelector(".followUp");
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
if (totalReset && input && track) {
    totalReset.addEventListener("click", () => {
        selectedNumbers.forEach(() => {
            selectedNumbers.pop();
        });
        input.value = "";
        track.innerHTML = "";
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
    if (input && track) {
        selectedNumbers.push(Number(input.value));
        track.innerHTML = input.value + definedOperation;
        input.value = "";
        console.log(selectedNumbers);
    }
}
function igual(event) {
    if (input && selectedNumbers.length > 0) {
        selectedNumbers.push(Number(input.value));
    }
    if (selectedNumbers.length === 2 && track && input) {
        track.innerHTML += input.value;
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
