const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const t = parseInt(input[0]); // 첫 줄: 테스트 케이스 개수

for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(" ").map(Number); // 공백 기준으로 나눈 후 숫자 변환
  console.log(a + b);
}
