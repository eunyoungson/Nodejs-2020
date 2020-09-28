const http = require('http');
const fs  =require('fs');
let server = http.createServer((req,res) => {
    fs.readFile('view/02_any.html','utf8',(error, html) =>{
        res.writeHead(200, {'content-Type':'text/html'});
        res.end(html);
    })
});
server.listen(3000);

//순서가 중요하다