function main() {
  for (const [a, b] of getData()) if (a || b) console.log(a + b);
}
main();

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");

  const result = []; // 리턴할 2차원 배열

  for (let row of arr) {
    // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}
