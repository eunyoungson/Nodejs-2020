const http = require('http');
const fs  =require('fs');
let server = http.createServer((req,res) => {
    fs.readFile('media/Elvis.png',(error, image) =>{
        res.writeHead(200, {'content-Type':'image/png'});
        res.end(image);
    });
});
server.listen(3000);

//아래(텍스트 타입) 참고해서, 타입 변경하기

/* const http = require('http');
const fs  =require('fs');
let server = http.createServer((req,res) => {
    fs.readFile('view/02_any.html','utf8',(error, html) =>{
        res.writeHead(200, {'content-Type':'text/html'});
        res.end(html);
    })
});
server.listen(3000); */