//파일쓰기(동기) writeFileSync()

/* const fs = require('fs');

let buffer = '동기적으로 파일쓰기';
fs.writeFileSync('tmp/sync.txt', buffer); */

const fs = require('fs');

let buffer = `동기적으로 파일쓰기
동기적으로 파일쓰기
`;
fs.writeFileSync('tmp/sync.txt', buffer);

//기존 파일에 데이터를 추가하는 경우 --> {flag:'a'}
buffer = '추가 데이터입니다';
fs.writeFileSync('tmp/sync.txt', buffer,{flag:'a'});