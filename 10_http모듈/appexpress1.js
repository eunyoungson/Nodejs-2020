var express = require('express')
var app = express()
var fs = require('fs');
const view = require('./view/index');
const template =require('./view/template')
 

app.get('/', function(request, response) { 
  fs.readdir('data', function(error, filelist){
    let list =template.listGen(filelist);
    let content = template.HOME_CONTENTS;
    content = content.replace(/\n/g,'<br>');
    let control = template.buttonGen();
    let html = view.index('web 기술', list, content,control); 
    response.send(html);   
  });  
});

/* app.get('/page')
    fs.readdir('data',function(error, filelist){                    
        let list =template.listGen(filelist);
        let title = query.id ;     
        let control = template.buttonGen(title);               
        let filepath ='data/' + title + '.txt';
        fs.readFile(filepath,'utf8',(error,buffer) => {
            let html = view.index(title,list,buffer,control);
            res.end(html);
        })   
    }); */
 
app.get('/page', function(req, res) { 
  return res.send('/page');
});
 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});