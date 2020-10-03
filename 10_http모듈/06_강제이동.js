const http = require('http');
const view = require('./view/01_first')


let server = http.createServer(function(request, response) {
    
    let html = view.first();
    response.writeHead(302, //redirection Found)
      {'Location':'http://www.hanbit.co.kr'});
   response.end();
   
});

server.listen(3000, ()=>{
    console.log('server running at http://localhost:3000');
});