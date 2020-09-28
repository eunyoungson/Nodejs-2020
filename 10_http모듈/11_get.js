const http = require('http')
const url = require('url');

let server = http.createServer((req,res)=>{
    let query = url.parse(req.url, true).query;
    console.log(query.name,query.region);
    //Get 파라메터 출력 ,localhost:3000/?name=Kim&region=seoul 을 창에입력
    res.end(`<h1>${JSON.stringify(query)}</h1>`)
}).listen(3000, () =>{
    console.log('server running at http://localhost:3000')
});