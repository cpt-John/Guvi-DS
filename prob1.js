const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});
let inputs = [];
inp.on("line", (data) => {
  inputs = data.split(" ");
});

inp.on("close", () => main(inputs));

function main(inputs) {
  let str = [];
  for (let i = inputs.length - 1; i >= 0; i--) str.push(inputs[i]);
  console.log(str.join(" "));
}
