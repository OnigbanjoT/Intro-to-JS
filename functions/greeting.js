//let rlsync = require('readline-sync');
//let fname = rlsync.question("What is your first name? ");
//let lname = rlsync.question("What is your last name? ");
//console.log(`Hello, ${fname} ${lname}!`);
function getName(prompt) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(prompt);
  return name;
}
let fname = getName('What is your first name? ');
let lname = getName('What is you last name? ');

console.log(`Hello, ${fname} ${lname}!`);

