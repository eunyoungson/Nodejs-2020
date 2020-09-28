const http = require('http');
const fs  =require('fs');
let server = http.createServer((req,res) => {
    fs.readFile('media/EmbraceableYou.mp3',(error, audio) =>{
        res.writeHead(200, {'content-Type':'audio/mp3'});
        res.end(audio); //audio 안써도 상관없음->위에 함수안에 명 일치시킴
    });
});
server.listen(3000);

//MIME 타임 잘 맞쳐주기