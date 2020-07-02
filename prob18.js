const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});
let inputs = [];
inp.on("line", (data) => {
  inputs.push(data);
});
inp.on("close", () => main(inputs));
function main(inputs) {
  let st1 = inputs[0];
  let st2 = inputs[1];
  console.log(st1.search(st2));
}
