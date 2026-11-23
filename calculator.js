const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
};

const calculate = (a, b, operationCallback) => {
  return operationCallback(a, b);
};

const number1 = 20;
const number2 = 10;

console.log(`Addition: ${number1} + ${number2} = ${calculate(number1, number2, add)}`);
console.log(`Subtraction: ${number1} - ${number2} = ${calculate(number1, number2, subtract)}`);
console.log(`Multiplication: ${number1} * ${number2} = ${calculate(number1, number2, multiply)}`);
console.log(`Division: ${number1} / ${number2} = ${calculate(number1, number2, divide)}`);

console.log(`Division: ${number1} / 0 = ${calculate(number1, 0, divide)}`);