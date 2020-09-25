//비동기적 파일 쓰기

const fs = require('fs');
let buffer = `비동기파일입니다.
비동기파일입니다`;

fs.writeFile('tmp/async.txt', buffer, function(error){
    if (error)
    console.log(error);
});

//기존파일에 데이터 추가하는 경우
/* buffer = '추가파일입니다';
fs.writeFile('tmp/async.txt', buffer,{flag: 'a'} , e => {
    if(e)
    console.log(e);
}) */