const async = require('async');
const fs = require('fs');
//항상순서가 유지되는... 콜백지옥 탈출하는 방법;순서보장이 안되는 문제를 async 모듈을 사용하여 해결함.
async.parallel({
    bufA: function(callback){
        fs.readFile('tmp/a.txt','utf8',callback) ;
    },
    bufB: callback =>{
        fs.readFile('tmp/b.txt','utf8',callback) ;
    },
    bufC: function(callback){
        fs.readFile('tmp/c.txt','utf8',callback) ;
    }
},function(e,result){
    console.log(result.bufA);
    console.log(result.bufB);
    console.log(result.bufC);
});

