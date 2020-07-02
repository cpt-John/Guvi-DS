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
  let [n, k] = inputs[0].split(" ").map((e) => parseInt(e));
  let arr = inputs[1].split(" ").map((e) => parseInt(e));
  let f_arr = [...new Set(arr.sort((a, b) => a - b))];
  if (f_arr.length < k) console.log(-1);
  else console.log(arr[k - 1]);
}
