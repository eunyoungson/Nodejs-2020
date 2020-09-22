const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('성적 입력>');
rl.prompt();
   
rl.on('line', function(buf) {
 //입력을 받아서 처리하는 로직
/* let score = parseInt(buf);
let grade;
    if (  score>= 90) {
       console.log( grade= 'A');
    } else if ( score >= 80 ){
        console.log( grade= 'B');
    } else if ( score >= 70){
        console.log( grade= 'C');
    } else if ( score >= 60){
        console.log( grade= 'D');
    } else   {
        console.log( grade= 'F');
    } */
    console.log(/* `성적: ${score}, 학점 : ${grade}` */) ;
    rl.close();
}); 