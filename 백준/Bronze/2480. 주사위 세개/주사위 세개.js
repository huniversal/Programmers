function main() {
  const data = getData();
  const n1 = data[0][0];
  const n2 = data[0][1];
  const n3 = data[0][2];

  let reward = 0;

  if (n1 === n2 && n2 === n3) {
    // 3개 다 같을 때
    reward = 10000 + n1 * 1000;
  } else if (n1 === n2 || n1 === n3) {
    // 2개만 같을 때 (n1 중심)
    reward = 1000 + n1 * 100;
  } else if (n2 === n3) {
    // n1은 다르고, n2 == n3
    reward = 1000 + n2 * 100;
  } else {
    // 전부 다를 때
    reward = Math.max(n1, n2, n3) * 100;
  }

  console.log(reward);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = []; // 리턴할 2차원 배열

  for (let row of arr) {
    // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}
