//디렉토리에 있는 파일 목록 알아내기

/* const fs = require('fs');
fs.readdir('tmp',function(e,files){
    for(let file of files) {
        let filename = 
        let stat = fs.statSync('tmp/' + file); //파일사이즈 구하는거
        console.log(file, '\t', stat.size);
    }
}); */

const fs = require('fs');
/* fs.readdir('tmp',function(e,files){
    for(let file of files) {
        let filename = 'tmp/' + file ;
        let stat = fs.statSync(filename); //파일사이즈 구하는거
        console.log(file, '\t', stat.size, 'B');
    }
}); */

//파일삭제하기 unlink

/* fs.unlink('tmp/tmp.txt',error => {
    if(error)
   console.log(error) ;   
});
 */
//파일이름 변경
/* fs.unlink(oldfile, new file,error => {
    if(error)
   console.log(error) ;   
}) */

fs.rename('tmp/async.txt','tmp/tmp.txt',error => {
    if(error)
   console.log(error) ;   
});
