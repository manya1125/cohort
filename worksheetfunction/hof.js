const operate = (num1, num2, operation) => operation(num1, num2);
const add = (a, b) => a + b;
console.log(operate(5, 3, add)); 