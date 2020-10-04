var http = require('http');//http라는 모듈을 http라는 변수를 통해 사용할것이다.
var fs = require('fs'); //fs라는 모듈을 fs라는 변수를 통해 사용할것이다.
var url = require('url');  //url이라는 모듈을 url이란변수 통해 사용할것이다


let app =http.createServer(function(req,res){
    var _url = request.url;
    var queryData = url.parse(request.url, true).query;
    console.log(url.parse(_url,true));
    let pathname = url.parse(req.url).pathname;
       //pathname과 path의 차이 
       //  /        /?id=CSS

    if (pathname === '/'){
        if (queryData.id === undefined){   //home 일 경우
                        
            fs.readdir('./data', function(err,filelist){
                console.log(filelist);         //filelist 값을 얻었으니까(HOME,CSS,,)

                let title = 'welcome';        
                let description ='Hello node.js';
                //아래의 ul것을 여기로 이동,이것을또 반복문으로 바꾼다.
               /*  let list = ` <ul>
                                <li><a href ="/?id=HTML>HTML</a></li>
                                <li><a href ="/?id=CSS>css</a></li>
                                <li><a href ="/?id=Javascript>Javascript</a></li>
                            </ul>` */
                let list = '';
                list +='<ul>\n'
                for(let i=0; i< filelist.length; i++){
                    list = list + `\t<li><a href ="/?id=${filelist[i]}">${filelist[i]}</a></li>\n`;
                }
                list += '</ul>';

                let templete = `
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
                    <hi>${queryData.id}</hi>
                    <p>${description}</p>
                </body>
                </html>    
                `
                response.writeHead(200);
                response.end(templete);
            

            })

                
        } else {
                //위에처럼 목록이 변화함으로 복사해 가져온다.
            fs.readdir('./data', function(err,filelist){
                console.log(filelist);         //filelist 값을 얻었으니까(HOME,CSS,,)

                let title = 'welcome';        
                let description ='Hello node.js';
              
                let list = '';
                list +='<ul>\n'
                for(let i=0; i< filelist.length; i++){
                    list = list + `\t<li><a href ="/?id=${filelist[i]}">${filelist[i]}</a></li>\n`;
                }
                list += '</ul>';

            fs.readFile(`data/${queryData.id}`,'utf8', function(err,description){
                    let title =queryData.id ;
                    let templete = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title> ${queryData.id}</title>
                    </head>
                    <body>
                        // <hi><a href="index.html">WEB</a></hi>
                        <hi><a href="/">WEB</a></hi>
                        ${list}
                        <hi>${queryData.id}</hi>
                        <p>${description}</p>
                    </body>
                    </html>    
                    `
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