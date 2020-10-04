var http = require('http');//http라는 모듈을 http라는 변수를 통해 사용할것이다.
var fs = require('fs'); //fs라는 모듈을 fs라는 변수를 통해 사용할것이다.
var url = require('url');  //url이라는 모듈을 url이란변수 통해 사용할것이다

//html 똑같은 부분들을 함수를 이용하여 깔끔하게 정리해보자!!!!
function templateHTML(title,list,body ) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${queryData.id}</title>
    </head>
    <body>                   
        <hi><a href="/">WEB</a></hi>
         ${list}
        ${body}
    </body>
    </html>    
    `;
}

function templatelist(filelist) {
    
    let list = '';
    list +='<ul>\n'
    for(let i=0; i< filelist.length; i++){
        list = list + `\t<li><a href ="/?id=${filelist[i]}">${filelist[i]}</a></li>\n`;
    }
    list += '</ul>';
    return list;
}

let app =http.createServer(function(req,res){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(url.parse(_url,true));
    let pathname = url.parse(_url).pathname;
       //pathname과 path의 차이 
       //  /        /?id=CSS

    if (pathname === '/'){
        if (queryData.id === undefined){   //home 일 경우
                        
            fs.readdir('./data', function(err,filelist){
                console.log(filelist);         //filelist 값을 얻었으니까(HOME,CSS,,)

                let title = 'welcome';        
                let description ='Hello node.js';
              
                let list = templatelist(filelist); //여기도 변화됨!!!

                let templete = templateHTML(title,list, `<hi>${queryData.id}</hi>${description}`)
                response.writeHead(200);
                response.end(templete);
            })

                
        } else {
                //위에처럼 목록이 변화함으로 복사해 가져온다.
            fs.readdir('./data', function(err,filelist){
                console.log(filelist);         //filelist 값을 얻었으니까(HOME,CSS,,)

               /* 이부분은 홈에서만 필요하므로 삭제
                 let title = 'welcome';        
                let description ='Hello node.js'; */

                // 함수로 바꾸고 아래로 이동시켜 위와 맞쳐준다.let list = templatelist(filelist);

                fs.readFile(`data/${queryData.id}`,'utf8', function(err,description){
                    let title =queryData.id ;

                    let list = templatelist(filelist); //여기로 이동
                    //아래는  함수로 변경하여 위의 반복을 줄인다.
                    let templete = templateHTML(title,list, `<hi>${queryData.id}</hi>${description}`)
                    response.writeHead(200);
                    response.end(templete);
                }); 
            });
        }    
    } else {
        response.writeHead(404);
        response.end('Not Found');
    }           
});
app.listen(3000);