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
  let st1 = inputs[0].split("").sort().join("");
  let st2 = inputs[1].split("").sort().join("");

  if (st1 == st2) console.log("1");
  else console.log("0");
}
