//파일목록 읽기(알아내기) 
//:10_http모듈/data의 파일목록이 무엇이 있는가?

let filefolder = '../data'
let fs = require('fs');

fs.readdir(filefolder, function (error, filelist) {
    console.log(filelist);
});

fs.readdir('../data/css.txt','utf8', function (error, result) {
    console.log(result);
});
//다시 공부하기

