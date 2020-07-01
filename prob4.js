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
  let max_sum = inputs[0];
  let temp_sum = inputs[0];
  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i] - inputs[i - 1] >= 1) {
      temp_sum += inputs[i];
      if (temp_sum > max_sum) max_sum = temp_sum;
    } else temp_sum = inputs[i];
  }
  console.log(max_sum);
}
