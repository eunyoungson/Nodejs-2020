

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('정수 입력>');
rl.prompt();
   
rl.on('line', function(buf) {
    //입력을 받아서 처리하는 로직

    //number ? 정의해주고,
let k ;
let sumOfSquare = 0;
let number = parseInt(buf);
    //제곱의 합
    for( k=1; k <= number; k++){
        sumOfSquare += k*k
    }
    //console.log(`${sumOfSquare}입니다`)
    
    //pow.Sum += pow
    
    //합의 제곱
    let sum =0;
    for( k=1; k <= number; k++ ) {       
        sum += k;
    }
        
    SquareOfSum = sum*sum ;

    if (k=number) {
    console.log(sumOfSquare, SquareOfSum ) ;
    }

    rl.close();
}); 