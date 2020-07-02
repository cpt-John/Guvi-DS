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
  let pre_sum = arr.reduce((r, e) => {
    if (r.length) return [...r, r[r.length - 1] + e];
    else return [e];
  }, (r = []));
  let res = pre_sum.map((e, i) => {
    if (!(e % 2)) return e;
    else return arr[i];
  });
  console.log(res.join(" "));
}
