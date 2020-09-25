//동기적으로 파일읽기 fs.readFileSync

const fs = require('fs');

//binary data 읽기
let buffer = fs.readFileSync('tmp/02_textfile.txt');

console.log(buffer);
console.log(buffer.toString());

//text data 읽기는 
let text = fs.readFileSync('tmp/02_textfile.txt','utf8');
console.log(text);