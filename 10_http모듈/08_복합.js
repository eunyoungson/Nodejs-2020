const http = require('http');
const url = require('url');
const fs  =require('fs');
const view = require('./view/01_first');

let server = http.createServer((req,res) => {
    let pathname = url.parse(req.url).pathname;
    let html;
    if (pathname === '/') {
        let html = view.first();
        res.end(html);
    } else if(pathname === '/image') {
        fs.readFile('media/Elvis.png',(error, image) =>{
            res.writeHead(200, {'content-Type':'image/png'});
            res.end(image);
        });
       
    } else if(pathname === '/audio') {
        fs.readFile('media/EmbraceableYou.mp3',(error, audio) =>{
            res.writeHead(200, {'content-Type':'audio/mp3'});
            res.end(audio); 
        });
    }else {
        res.writeHead(404, {'content-Type' : 'text/html'});
        res.end( );
    }
   
});
server.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
});