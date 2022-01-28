let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Enter the first leg of the right triangle: \n"));
let num2 = Number(rlSync.question("Enter the second leg of the right triangle: \n"));
let hypotnuse = Math.sqrt((num1*num1) + (num2*num2));
console.log(`The hypotnuse of a right triangle with the legs ${num1} & ${num2} is ${hypotnuse}.`);
