let count = 1;
let ouput = "";
let aa = 1;
let bb = 1;
let cc = 2;
let temp = 0;
let strRow = "";
let rows = 0;

while(rows < 10) {
  let xx = 10;
  while (xx > 0) {
    strRow += " * ";
    // aa = bb;
    // bb= cc;
    // cc = aa + bb;
    // strRow = strRow + aa + "\t";
    xx--;
  }
  strRow += "\n";
  rows++;
}

console.log(strRow);
