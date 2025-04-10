function main() {
  const data = getData();
  // console.log(data); // [ [ 5 ], [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ] ]

  for (let i = 1; i < data.length; i++) {
    const n1 = data[i][0];
    const n2 = data[i][1];
    const sum = n1 + n2;
    console.log(`Case #${i}: ${n1} + ${n2} = ${sum}`);
  }
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++)
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr);
  }
  return result;
}
