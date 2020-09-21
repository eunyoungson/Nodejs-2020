const readline = require(`readline`);
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt(`연도 입력`);
rl.prompt();
   
rl.on('line', function(buf) {
 //입력을 받아서 처리하는 로직
    let year = parseInt(buf);

    if  (year%400 === 0 ) {
        console.log('윤년입니다.');
    } else if 
        ( year%100 === 0 ) {
        console.log('윤년이 아닙니다.');
    } else if ( year%4 === 0 ) {
        console.log('윤년입니다');
    } else {
        console.log(`윤년이 아닙니다`)
    }
rl.close();
});

