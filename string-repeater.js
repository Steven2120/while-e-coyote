const ps = require("prompt-sync");
const prompt = ps();

let request = prompt("Enter a string: ");
let counter = 0;
let sol = "";

while (counter <= 10) {
  sol += request;
  if (sol.length >= 10) {
    console.log(sol);
    break;
  }
  counter++;
}
