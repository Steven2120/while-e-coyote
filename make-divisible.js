const ps = require("prompt-sync");
const prompt = ps();

let num1 = Number(prompt("Enter a number: "));
let num2 = Number(prompt("Enter a number: "));

while (num1 % num2 !== 0) {
  if (num1 % num2 !== 0) {
    console.log(num1);
    num1 += 1;
  }
  if (num1 % num2 === 0) {
    console.log(`${num1} is divisible by ${num2}`);
  }
}
