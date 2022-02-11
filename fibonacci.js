const ps = require("prompt-sync");
const prompt = ps();

let request = Number(prompt("Enter a number: "));

let counter = 1;
let counter1 = 0;
let fib;

while (request > 0) {
  fib = counter;
  counter = counter + counter1;
  counter1 = fib;
  console.log(counter1);
  request--;
}
