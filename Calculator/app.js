const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//create a calculator app
//that can add, subtract, multiply, and divide
//create a function that takes in two numbers and an operator
//return the result of the calculation
const button = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
let values;

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      display.innerText = "0";
    }
    for (let i = 0; i < numbers.length; i++) {
      if (e.target.innerText === numbers[i]) {
        display.innerText += parseInt(e.target.innerText);
        display.innerText = parseInt(display.innerText);

      }
    }
  });

  button.addEventListener("click", (e) => {
    if (e.target.innerText === "+") {
      let value = add(parseInt(display.innerText), parseInt(display.innerText));

      console.log(parseInt(value));
    }
  });
});

//clear.addEventListener('click', () => {
//   display.innerHTML = '0';
//});

equal.addEventListener("click", () => {
  display;
});

console.log(add(1, 2));
