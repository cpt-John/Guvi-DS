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
  let arr = inputs[1]
    .split(" ")
    .map((e) => parseInt(e))
    .sort((a, b) => a - b);
  let found = false;

  let [l1, l2] = [-1, arr.length];
  while (l2 - l1 > 0) {
    let indx = Math.floor((l2 - l1) / 2) + l1;
    if (k == arr[indx]) {
      found = true;
      break;
    } else if (k > arr[indx]) l1 = indx;
    else l2 = indx;
    if (l2 - l1 == 1 && k != arr[indx]) break;
  }
  if (found) console.log("yes");
  else console.log("no");
}
