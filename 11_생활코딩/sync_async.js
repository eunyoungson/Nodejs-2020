//동기
/* console.log('A');

const fs = require('fs')
let result = fs.readFileSync('textfile.txt', 'utf8')
console.log(result);

console.log('C');  */

//비동기
console.log('A');

const fs = require('fs');
fs.readFile('textfile.txt','utf8', (error, buffer)=>{
    console.log(buffer);
})
console.log('C');