const ps = require("prompt-sync");
const prompt = ps();

let magicWord = "done";
let placeHolder = 0;
let request;

while (request !== magicWord) {
  request = prompt("Enter a number (type 'done' when complete): ");
  if (Number(request)) {
    placeHolder += Number(request);
  }
}
console.log(placeHolder);
