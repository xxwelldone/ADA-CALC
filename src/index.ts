const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
const track = document.querySelector(".followUp");
let selectedNumbers: number[] = [];
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
    selectedNumbers = [];

    input.value = "";
    track.innerHTML = "";
  });
}
function digitouNumero(event: Event) {
  const element = event.target as HTMLElement;
  const number = element.innerText;

  if (input) {
    input.value += number.toString();
  }
}
function digitouOperacao(event: Event): void {
  const element = event.target as HTMLElement;
  definedOperation = element.innerText;
  if (input && track) {
    selectedNumbers.push(Number(input.value));
    track.innerHTML += input.value + definedOperation;
    input.value = "";
  }
  if (selectedNumbers.length >= 2 && track && input) {
    calculate(definedOperation);
  }
}

function igual(event: Event) {
  if (input && selectedNumbers.length > 0) {
    selectedNumbers.push(Number(input.value));
  }
  if (selectedNumbers.length === 2 && track && input) {
    track.innerHTML += input.value;
    calculate(definedOperation);
  }
  if (input) {
    input.value = calculated.toString();
  }
}
let calculated = 0;
function calculate(operation: string) {
  if (input && track) {
    switch (operation) {
      case "%":
        calculated = selectedNumbers[0] % selectedNumbers[1];
        selectedNumbers = [];
        selectedNumbers.push(calculated);

        break;
      case "*":
        calculated = selectedNumbers[0] * selectedNumbers[1];
        selectedNumbers = [];
        selectedNumbers.push(calculated);

        break;
      case "-":
        calculated = selectedNumbers[0] - selectedNumbers[1];
        selectedNumbers = [];
        selectedNumbers.push(calculated);

        break;
      case "+":
        calculated = selectedNumbers[0] + selectedNumbers[1];
        selectedNumbers = [];
        selectedNumbers.push(calculated);

        break;
      case "/":
        calculated = selectedNumbers[0] / selectedNumbers[1];
        selectedNumbers = [];
        selectedNumbers.push(calculated);

        break;

      default:
        input.value = "Erro inesperado";
        break;
    }
  }
}
