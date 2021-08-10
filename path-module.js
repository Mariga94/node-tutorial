const path = require('path')

console.log(path.sep)

const absolute = path.resolve(__dirname,'content','test.txt');
console.log(absolute)