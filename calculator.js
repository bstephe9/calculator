const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

function operate(x, y, operation) {
  switch (operation) {
    case "+": return add(x, y);
    case "-": return subtract(x, y);
    case "*": return multiply(x, y);
    case "/": return divide(x, y);
    default: break;
  }
};

function updateDisplay() {
  display.textContent = displayText;
  miniDisplay.textContent = miniDisplayText;
}

const display = document.querySelector("#primary-display");
const miniDisplay = document.querySelector("#secondary-display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const eraseButtons = document.querySelectorAll("#erase-buttons button");

let expression = ""
let displayText = "0";
let miniDisplayText = "";

const actions = {
  number(value) {
    expression += value;
    if (displayText == "0") {
      displayText = value;
    } else {
      displayText += value;
    }
  },
  operator(value) {
    expression += ` ${value} `;
    displayText = "";
    miniDisplayText = expression;
  },
  "="() {
    const splitExpression = expression.split(" ");
    let operand1 = parseFloat(splitExpression[0]);
    let operation = splitExpression[1];
    let operand2 = parseFloat(splitExpression[2]);
    displayText = "" + operate(operand1, operand2, operation);
  },
  "C"() {
    expression = "";
    displayText = "0";
    miniDisplayText = "";
  },
  "Back"() {
    expression = expression.slice(0, -1);
    displayText = displayText.slice(0, -1);
    if (displayText.length < 1) {
      displayText = "0";
    }
  },
  "+/-"() {
    
  },
  "."() {
    expression += ".";
    displayText += ".";
  }
};

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    actions["number"](button.textContent)
    updateDisplay()
  });
});

operationButtons.forEach((button) => {
  if (["+","-","*","/"].includes(button.textContent)) {
    button.addEventListener("click", () => {
      actions["operator"](button.textContent);
      updateDisplay();
    });
  } else {
    button.addEventListener("click", () => {
      actions[button.textContent]();
      updateDisplay();
    })
  }
});

eraseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    actions[button.textContent]();
    updateDisplay();
  })
})