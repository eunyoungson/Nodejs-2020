const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
//const view2 = require('./view/text')

 http.createServer((req,res) =>{  
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
        case '/':
            fs.readdir('data',function(error, filelist){
                let list ='';
                for(let file of filelist) {
                    let filename =file.substring(0,file.length-4);
                    list += `<li><a href="/?id=${filename}">${filename}</a></li>`
                }
                let html = view.index(list);
                res.end(html);
            });
           /*  fs.readFile('view/index.html', 'utf8',(error,html) => {
                res.end(html);
            }); */
               // let html2 = view2.text(text);
            /* fs.readFile('view/text.html', 'utf8',(error,html) => {
                res.end(html2);
            }); */
            break;

        default:
            res.writeHead(404, {'content-Type' : 'text/html'});
            res.end( );
    
    }
 }).listen(3000,() =>{
     console.log('server running at http://localhost:3000');
 });