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
  let arrs = inputs
    .slice(1)
    .map((arr) => arr.split(" ").map((e) => parseInt(e)));
  arrs = arrs
    .reduce((res, arr) => [...res, ...arr], (res = []))
    .sort((a, b) => a - b);
  console.log(arrs.join(" "));
}
