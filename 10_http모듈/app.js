const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const template =require('./view/templete')

 http.createServer((req,res) =>{  
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    let body ;
    switch(pathname) {
        case '/':
            if (query.id === undefined) {   
                fs.readdir('data',function(error, filelist){                    
                    let list =template.listGen(filelist);
                    let content = template.HOME_CONTENTS;
                    let control = template.buttonGen();
                    let html = view.index('web 기술', list, content,control);                  
                    res.end(html);
                });
            } else {

                fs.readdir('data',function(error, filelist){                    
                    let list =template.listGen(filelist);
                    let title = query.id ;     
                    let control = template.buttonGen(title);               
                    let filename ='data/' + title + '.txt';
                    fs.readFile(filename,'utf8',(error,buffer) => {
                        let html = view.index(title,list,buffer,control);
                        res.end(html);
                    })
                    
                });
            }           
            break; 
        case '/create':
            fs.readdir('data',function(error, filelist){                    
                let list =template.listGen(filelist);
                let control = template.buttonGen();               
                let content= template.createForm();   
             
                let html = view.index('글 생성',list,content,control);
                res.end(html);
                              
            });
            break;
        case '/create_proc':
             body ='';
            req.on('data', function(data){
                body += data;
            })
           
            req.on('end', function() {
                let param =qs.parse(body); 
                        
               // console.log(param.subject, param.description);
               let filepath = 'data/'+param.subject + '.txt';
               fs.writeFile(filepath, param.description,error=>{
                    res.writeHead(302, 
                     {'Location':`/?id=${param.subject}`});
                     res.end();
               });
       
            });
            break;

        case '/delete':
                fs.readdir('data',function(error, filelist){                    
                    let list =template.listGen(filelist);
                    let control = template.buttonGen();               
                    let content= template.deleteForm(query.id);      
                    let html = view.index('글 삭제',list,content,control);
                    res.end(html);
                    console.log(content);
                                  
                });
                break;
        case '/delate_proc': 
            body ='';
            req.on('data', function(data){
                body += data;
            })
            
            req.on('end', function() {
                let param =qs.parse(body);    
                console.log(param);                
                let filepath = 'data/'+param.subject + '.txt';               
                console.log(filepath);
                fs.unlink(filepath, error=>{
                    res.writeHead(302, 
                        {'Location':'/'});
                        res.end();
                });               
            });
            break;
        case '/update':
             fs.readdir('data',function(error, filelist){                    
                    let list =template.listGen(filelist);
                    let title = query.id ;     
                    let control = template.buttonGen();               
                    let filename ='data/' + title + '.txt';
                    fs.readFile(filename,'utf8',(error,buffer) => {
                        let content = template.updateForm(title,buffer)
                        let html = view.index(`${title}수정`,list,buffer,control);
                        res.end(html);
                    })                                                                      
            });
            break;
        case '/update_proc':
            body ='';
            req.on('data', function(data){
                body += data;
            })
            
            req.on('end', function() {
                let param =qs.parse(body); 
                        
                // console.log(param.original, param.subject, param.description);
                let filepath = 'data/'+param.original + '.txt';
                fs.writeFile(filepath, param.description,error=>{
                    if (param.original !== subject) {
                            fs.rename(filepath, `data/${param.subject}.txt`, error => {
                                res.writeHead(302, 
                                    {'Location':`/?id=${param.subject}`});
                                    res.end();   
                            });
                    } else {
                        res.writeHead(302, 
                            {'Location':`/?id=${param.subject}`});
                            res.end();
                    }
                  
                });
        
            });
            break;
        
        default:
            res.writeHead(404);
            res.end();
    
    }
 }).listen(3000,() =>{
     console.log('server running at http://localhost:3000');
 });