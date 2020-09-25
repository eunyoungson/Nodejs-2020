const path = require('path');
console.log(__dirname) ;
console.log(__filename) ;

let filename = path.join(__dirname,'tmp','textfile.tmp');
let dirtyname = path.join(__dirname,'tmp','..','tmp','textfile.tmp');
console.log(filename);
console.log(dirtyname);
//_언더바는 시스템에서 사용하는 변수.

process.exit();

console.log('프로세스') ;
