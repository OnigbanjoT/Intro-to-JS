let rlSync = require('readline-sync');
let fname = rlSync.question('What is your first name?\n');
let lname = rlSync.question('What is your last name?\n');
console.log(`Hello, ${fname} ${lname}!`);
