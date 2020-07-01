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
  inputs = inputs.sort(function (a, b) {
    return a - b;
  });
  let longest = 1;
  let temp_len = 1;
  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i] - inputs[i - 1] == 1) {
      temp_len++;
      if (temp_len > longest) longest = temp_len;
    } else temp_len = 1;
  }
  console.log(longest);
}
