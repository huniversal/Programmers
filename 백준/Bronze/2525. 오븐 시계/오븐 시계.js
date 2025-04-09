
function main() {
  const data = getData();

  const h = data[0][0];
  const m = data[0][1];
  const c = data[1][0];

  let totalMin = h * 60 + m + c;

  const result = {
    hour: Math.floor(totalMin / 60) % 24,
    minute: totalMin % 60,
  };

  console.log(result.hour, result.minute);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}
