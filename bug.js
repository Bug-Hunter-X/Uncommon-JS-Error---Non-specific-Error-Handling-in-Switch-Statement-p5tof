function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate('+', 5, 3)); // Output: 8
console.log(calculate('-', 10, 4)); // Output: 6
console.log(calculate('*', 7, 2)); // Output: 14
console.log(calculate('/', 15, 3)); // Output: 5
console.log(calculate('/', 10,0)); // throws error
console.log(calculate('%',10,3)); // throws error