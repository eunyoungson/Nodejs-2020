//서버만들기
/* const http = require('http');

let server = http.createServer(function(request, response) {
    
   response.end('First Server');
});

server.listen(3000); */
//localhost:3000 를 웹페이지에 쓰면, 내가 쓴것이 웹페이지에 생성됨을 볼수있다. (서버만들기)
//---------------------------------------------------------------------


//html과 연동된 서버 만들기
const http = require('http');
const view = require('./view/01_first')

let server = http.createServer(function(request, response) {
    //console.log(request); 참고적으로request 정보 보고싶으면..
    let html = view.first();
    response.writeHead(200, //status code ,ok)
      {'content-Type':'text/html'});//125page MIME 타입참고
    response.end(html);
   // response.end('First Server');
});

server.listen(3000);