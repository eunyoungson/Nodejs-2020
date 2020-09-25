//비동기적 파일 읽기
//function 안의 buffer자리는 원하는 변수 넣는다

const fs = require('fs');
fs.readFile('tmp/02_textfile.txt','utf8',function(error,buffer){
    console.log(buffer);
});