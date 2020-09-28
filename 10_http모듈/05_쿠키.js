const http = require('http');


let server = http.createServer(function(request, response) {
    //console.log(request); 참고적으로request 정보 보고싶으면..
    let cookie = request.headers.cookie; //쿠키정보 받기
    response.writeHead(200, {  //status code ,ok)
        'content-Type':'text/html',
        'set-Cookie': ['breakfast =toast','dinner=chicken']
    });    
    response.end(`<hi>${cookie}</h1>`);
});

server.listen(3000, () =>{
    console.log('server running at http://localhost:3000'); //이런방법으로도 가능
});

//application 안의 cookie애서 확인, 삭제 할수있다.