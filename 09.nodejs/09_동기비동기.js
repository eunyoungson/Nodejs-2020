//여러개 파일 동기적으로 읽기

/* const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.txt','utf8');
let bufB = fs.readFileSync('tmp/b.txt','utf8');
let bufC = fs.readFileSync('tmp/c.txt','utf8');

console.log(bufA);
console.log(bufB);
console.log(bufC); */

//비동기적으로 읽기(순서보장이 안되어있다. )

const fs = require('fs');

fs.readFile('tmp/a.txt','utf8',(e,bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt','utf8',(e,bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt','utf8',(e,bufC) => {
    console.log(bufC);
});

//순서보장 방법 /단점?-> 콜백지옥:안에 안에 들어가는것
fs.readFile('tmp/a.txt','utf8',(e,bufA) => {
    fs.readFile('tmp/b.txt','utf8',(e,bufB) => {
        fs.readFile('tmp/c.txt','utf8',(e,bufC) => {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);

        });       
    });
});
