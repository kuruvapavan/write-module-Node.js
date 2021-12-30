let fs = require("fs");
 let indexIN = fs.readFileSync('names.txt', 'utf8');
console.log(indexIN);

fs.writeFileSync('names1.js', "bunch of friends");