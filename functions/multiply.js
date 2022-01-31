function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
let rlsync = require('readline-sync');
let firstNumber = rlsync.question('Enter the first number: '); 
let secondNumber = rlsync.question('Enter the second number: ');
let product = multiply(firstNumber, secondNumber);
console.log(`${firstNumber} * ${secondNumber} = ${product}`)