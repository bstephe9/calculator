const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let operand1 = "";
let operand2 = "";
let operation = "";

function operate(x, y, operation) {
  switch (operation) {
    case "+": return add(x, y);
    case "-": return subtract(x, y);
    case "*": return multiply(x, y);
    case "/": return divide(x, y);
    default: break;
  }
};