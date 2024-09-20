const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
let selectedNumbers: number[] = [];
let definedOperation = "";
let secondNumber = false;
numbers.forEach((item) => {
  item.addEventListener("click", digitouNumero);
});
operations.forEach((item) => {
  item.addEventListener("click", digitouOperacao);
});
equal?.addEventListener("click", igual);

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
  if (input) {
    selectedNumbers.push(Number(input.value));
    input.value = "";
    console.log(selectedNumbers);
    secondNumber = true;
  }
}

function igual(event: Event) {
  if (input) {
    selectedNumbers.push(Number(input.value));
  }
  calculate(selectedNumbers[0], selectedNumbers[1], definedOperation);
}
function calculate(num1: number, num2: number, operation: string) {
  console.log(selectedNumbers);
}
