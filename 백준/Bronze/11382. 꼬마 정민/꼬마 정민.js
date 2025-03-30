var fs = require("fs");
var filedata = fs.readFileSync(0).toString().split(" ");
const A = parseInt(filedata[0]);
const B = parseInt(filedata[1]);
const C = parseInt(filedata[2]);
console.log(A + B + C);