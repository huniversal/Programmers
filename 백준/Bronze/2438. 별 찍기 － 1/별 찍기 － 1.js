function main() {
  const data = parseInt(getData(), 10); // ← 여기가 핵심!
  for (let i = 1; i <= data; i++) {
    let stars = "";
    for (let k = 1; k <= i; k++) {
      stars += "*";
    }
    console.log(stars);
  }
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
