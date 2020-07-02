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
  let st = inputs[0].split("");
  let finshed = false;

  while (!finshed) {
    if (st.length < 2) break;
    for (let i = 0; i < st.length; i++) {
      if (i == st.length - 1) {
        finshed = true;
        break;
      }
      if (st[i] == st[i + 1]) {
        st.splice(i, 1);
        st.splice(i, 1);
        break;
      }
    }
  }
  console.log(st.join(""));
}
