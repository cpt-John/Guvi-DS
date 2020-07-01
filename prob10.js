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
  let result = "no";
  let sum1 = inputs[1].split(" ").reduce((s, n) => s + parseInt(n), (s = 0));
  let sum2 = inputs[2].split(" ").reduce((s, n) => s + parseInt(n), (s = 0));
  let [maxArr, minArr] = [[], []];
  let diff = Math.abs(sum1 - sum2) / 2;
  if (sum1 > sum2) {
    maxArr = inputs[1].split(" ").map((e) => parseInt(e));
    minArr = inputs[2].split(" ").map((e) => parseInt(e));
  } else {
    maxArr = inputs[2].split(" ").map((e) => parseInt(e));
    minArr = inputs[1].split(" ").map((e) => parseInt(e));
  }
  let max = Math.max(...maxArr);
  let k = 0;
  for (let i = 0; i < maxArr.length; i++) {
    if (diff + k > max) break;
    let f1 = maxArr.includes(diff + k);
    let f2 = minArr.includes(k);
    if (f1 && f2) {
      result = "yes";
      break;
    } else k++;
  }
  console.log(result);
}
