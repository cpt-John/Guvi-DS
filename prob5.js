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
  let str = inputs[0].split(" ")[0];
  let rt = parseInt(inputs[0].split(" ")[1]) % str.length;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res[(i + rt) % str.length] = str[i];
  }
  console.log(res.join(""));
}
