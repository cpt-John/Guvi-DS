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
  let str = inputs[0].split("");
  let k = str.length - 1;
  for (let i = 0; ; i++) {
    while (!str[k].match(/[a-zA-Z0-9]/)) k--;
    if (k - i < 1) break;
    if (str[i].match(/[a-zA-Z0-9]/)) {
      let temp = str[i];
      str[i] = str[k];
      str[k] = temp;
      k--;
    }
  }
  console.log(str.join(""));
}
