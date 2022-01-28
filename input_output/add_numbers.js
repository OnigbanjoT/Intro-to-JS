let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("What's your first number?\n"));
let num2 = Number(rlSync.question("What's your second number?\n"));
let sum = num1 + num2;
console.log(`${num1} + ${num2} equals ${sum}.`);