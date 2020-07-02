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
  let arr = inputs[1].split(" ").map((e) => parseInt(e));
  if (arr.length < 6) {
    console.log(0);
    return;
  }
  let sum1 = arr.slice(0, 3).reduce((r, e) => r + e);
  let sum2 = arr.slice(arr.length - 3, arr.length).reduce((r, e) => r + e);
  if (sum1 == sum2) console.log(1);
  else console.log(0);
}
