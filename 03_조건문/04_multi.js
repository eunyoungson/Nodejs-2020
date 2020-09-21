//사용자가 입력한 글을 받는 방법
const readline = require(`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt(`정수 , 로 구분해서 여러개 입력`);
rl.prompt();
   
//3,4,8,9
rl.on('inline', function(buf) {
 //입력을 받아서 처리하는 로직
 let bufArray =buf.split(',');
 console.log(bufArray);

 for (let item of bufArray) {
      let input = parseInt(item)
 }
}


/*let input =873;

    if (input % 3 === 0) {
        console.log(`${input}은 3의배수입니다.`);
    } else
    {
    console.log(`${input}은 3의 배수가 아닙니다.`);
    }  
*/