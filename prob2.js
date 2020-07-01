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
  inputs = inputs[1].split(" ").map((e) => parseInt(e));
  let str = [];
  inputs = inputs.sort(function (a, b) {
    return a - b;
  });
  let [i, j] = [1, 0];
  let state = true;
  while (str.length < inputs.length) {
    if (state) str.push(inputs[inputs.length - i]);
    else str.push(inputs[j]);
    state ? i++ : j++;
    state = !state;
  }
  console.log(str.join(" "));
}
